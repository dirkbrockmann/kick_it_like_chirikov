import * as d3 from "d3"
import param from "./parameters.js"
import {orbits} from "./model.js"
import cfg from "./config.js"
import colors from "./colormaps.js"


const C = colors[cfg.simulation.colormap];

const L = param.N;

const X = d3.scaleLinear().domain([0, 2*Math.PI])
const Y = d3.scaleLinear().domain([0 , 2*Math.PI])

const Xback = d3.scaleLinear().range([0, 2*Math.PI])
const Yback = d3.scaleLinear().range([0 , 2*Math.PI])


var ctx,dL,W,H;

const draw_orbit = (o,s,c)=>{
	o.forEach(function(d){
		ctx.fillRect(X(d[0]),Y(d[1]),s,s)
		ctx.fillStyle = c
		ctx.fill()
	})	
}



const update = (display) => {

	ctx.clearRect(0, 0, W, H);
	
	// draw rectancle 
	if (param.dark_mode.widget.value()){
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, W, H);				
	} else {
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, W, H);		
	}
	
	orbits.forEach(function(d){
		const co = param.color_orbits.widget.value() ? C(d.color) : param.dark_mode.widget.value() ? "white" : "black" 
		draw_orbit(d.orbit, param.color_orbits.widget.value() ? 3 : 1,co);
	})	
	
	if(param.highlight_last.widget.value() && orbits.length>0){
		draw_orbit(orbits[orbits.length-1].orbit,cfg.simulation.highlight_size,cfg.simulation.highlight_color)
	}
		
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, W, H);	
}

const initialize = (display,config) => {
	
	const cv = display.node().getBoundingClientRect();
	
	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	Xback.domain([0,cv.width])
	Yback.domain([0,cv.height])

	ctx = display.node().getContext('2d');
	
	
	ctx.clearRect(0, 0, W, H);
	
	// draw rectancle without fill
	if (param.dark_mode.widget.value()){
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, W, H);				
	} else {
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, W, H);		
	}
	
};

const go = (display) => {
	
	update(display)
}


export {initialize,go,update,Xback,Yback}
