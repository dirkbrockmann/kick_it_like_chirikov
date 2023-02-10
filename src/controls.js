import * as widgets from "d3-widgets"
import {range,map} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {add_id_label,add_widget,variables,booleans,choices} from "./utils.js"


const va = add_id_label(variables(parameters));
const bo = add_id_label(booleans(parameters));

const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.show(cfg.widgets.slider_show)
					.girth(cfg.widgets.slider_girth)
					.knob(cfg.widgets.slider_knob)
					.size(cfg.widgets.slider_size)
					.fontsize(cfg.widgets.fontsize)
		);

const toggles = map(bo, 
		v => widgets.toggle()
					.id(v.id).
					label(v.label).
					value(v.default)
					.labelposition(cfg.widgets.toggle_label_pos)
						.fontsize(cfg.widgets.fontsize)
						.size(cfg.widgets.toggle_size)
		);


add_widget(bo,toggles);
add_widget(va,sliders);

const reset = widgets.button().actions(["rewind"])
const buttons = [reset];

export default (controls,grid)=>{
	
	const tg_pos=grid.position(cfg.widgets.toggle_anchor.x,range(toggles.length)
		.map(x=>(cfg.widgets.toggle_anchor.y+cfg.widgets.toggle_gap*x)));

	toggles.forEach((to,i) => to.position(tg_pos[i]));

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,cfg.widgets.slider_anchor.y);	
	const bu_pos=grid.position(cfg.widgets.button_anchor.x,cfg.widgets.button_anchor.y);	

	sliders[0].position(sl_pos)
	buttons[0].position(bu_pos).size(cfg.widgets.button_size)

	controls.selectAll(".slider").data(sliders).enter().append(widgets.widget);
	controls.selectAll(".toggle").data(toggles).enter().append(widgets.widget);
	controls.selectAll(".button").data(buttons).enter().append(widgets.widget);

}

export {sliders,toggles,reset,variables,booleans}


