import * as d3 from "d3"
import param from "./parameters.js"
import {each,range,map,mean} from "lodash-es"
import {Xback,Yback} from "./viz.js"

const N = param.N;

var orbits = [];
var No = 0;

const stdmap = (p) => { 
	const f = param.coupling_strength.widget.value() * Math.sin(p[0]); 
	return [ ( p[0] + p[1] + f + 2 * Math.PI ) % (2 * Math.PI) , ( p[1] + f + 2 * Math.PI) % (2 * Math.PI) ];	
}

function make_orbit(p){
	var points = [], i = 0;
	points.push(p);
	while(++i<N){ p=stdmap(p); points.push(p);}
	return points;
}


const initialize = (display) => {
	orbits = [];
	No = 0;
};


const go  = (display) => {
	
	const pon = d3.pointer(event)
	var p = [Xback(pon[0]),Yback(pon[1])];
	var orbit = make_orbit(p);
	No++;
	orbits.push({index:No,orbit:orbit,color:Math.random()})	
}

const update = () => {
	orbits.forEach(function(d){
		var p = [];
		p[0] = d.orbit[0][0] ; p[1] = d.orbit[0][1];		
		var points = make_orbit(p);
		d.orbit = points;
	})	
}

export {orbits,initialize,go,update}
