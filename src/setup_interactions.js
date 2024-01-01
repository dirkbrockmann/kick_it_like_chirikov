import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"


export default (display,controls,config) => {
	console.log(display)
	display.on("click",function(){iterate(display,config)})
	ct.reset.update(()=>initialize(display,config))
	param.coupling_strength.widget.update(()=>{update(display)})
	param.highlight_last.widget.update(()=>{update(display)})
	param.color_orbits.widget.update(()=>{update(display)})
	param.dark_mode.widget.update(()=>{update(display)})
}

