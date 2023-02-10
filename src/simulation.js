import * as d3 from "d3"
import {initialize as model_init, update as model_update, go as model_go} from "./model.js"
import {initialize as visual_init, update as visual_update, go as visual_go} from "./viz.js"



function iterate (display,config) {
	model_go(display);
	visual_go(display,config);
};

function initialize (display,config) {	
	
	window.onresize = ()=>{ 
		model_init(display);
		visual_init(display,config); 
	};
	
	model_init(display);
	visual_init(display,config); 
};

function update (display) {
	visual_update(display);
	model_update();

}


export {iterate,initialize,update}