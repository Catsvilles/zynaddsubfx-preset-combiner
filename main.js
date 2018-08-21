//This code is very unwieldy due to having to parse XML and work with a large amount of variables
//It's also more of an experiment
//I suggest not looking at the code :P

//Array that holds the XML preset values we want
//Used for creating objects and variables dynamically due to the large number of them
//Simply add new values here when adding more in the future
var preset_values = ["punch_strength", "punch_time", "punch_stretch", "punch_velocity_sensing", "harmonic_randomness_grouping", "amplitude_envelope_env_points", "amplitude_envelope_env_sustain", "amplitude_envelope_env_stretch", "amplitude_envelope_A_dt", "amplitude_envelope_D_dt", "amplitude_envelope_R_dt", "amplitude_envelope_A_val", "amplitude_envelope_D_val", "amplitude_envelope_S_val", "amplitude_envelope_R_val", "amplitude_lfo_freq", "amplitude_lfo_intensity", "amplitude_lfo_start_phase", "amplitude_lfo_lfo_type", "amplitude_lfo_randomness_amplitude", "amplitude_lfo_randomness_frequency", "amplitude_lfo_delay", "amplitude_lfo_stretch", "amplitude_lfo_continous", "frequency_parameters_detune", "frequency_parameters_coarse_detune", "frequency_parameters_detune_type", "frequency_parameters_bandwidth", "frequency_envelope_free_mode", "frequency_envelope_env_points", "frequency_envelope_env_sustain", "frequency_envelope_env_stretch", "frequency_envelope_forced_release", "frequency_envelope_linear_envelope", "frequency_envelope_A_dt", "frequency_envelope_D_dt", "frequency_envelope_R_dt", "frequency_envelope_A_val", "frequency_envelope_D_val", "frequency_envelope_S_val", "frequency_envelope_R_val", "frequency_lfo_freq", "frequency_lfo_intensity", "frequency_lfo_start_phase", "frequency_lfo_lfo_type", "frequency_lfo_randomness_amplitude", "frequency_lfo_randomness_frequency", "frequency_lfo_delay", "frequency_lfo_stretch", "frequency_lfo_continous", "filter_parameters_velocity_sensing_amplitude", "filter_parameters_velocity_sensing", "filter_category", "filter_type", "filter_freq", "filter_q", "filter_stages", "filter_freq_track", "filter_gain", "filter_envelope_free_mode", "filter_envelope_env_points", "filter_envelope_env_sustain", "filter_envelope_env_stretch", "filter_envelope_forced_release", "filter_envelope_linear_envelope", "filter_envelope_A_dt", "filter_envelope_D_dt", "filter_envelope_R_dt", "filter_envelope_A_val", "filter_envelope_D_val", "filter_envelope_S_val", "filter_envelope_R_val", "filter_lfo_freq", "filter_lfo_intensity", "filter_lfo_start_phase", "filter_lfo_lfo_type", "filter_lfo_randomness_amplitude", "filter_lfo_randomness_frequency", "filter_lfo_delay", "filter_lfo_stretch", "filter_lfo_continous", "voice0_type", "voice0_unison_size", "voice0_unison_frequency_spread", "voice0_unison_stereo_spread", "voice0_unison_vibratto", "voice0_unison_vibratto_speed", "voice0_unison_invert_phase", "voice0_unison_phase_randomness", "voice0_delay", "voice0_resonance", "voice0_ext_oscil", "voice0_ext_fm_oscil", "voice0_oscil_phase", "voice0_oscil_fm_phase", "voice0_filter_enabled", "voice0_filter_bypass", "voice0_fm_enabled", "voice0_oscil_harmonic_mag_type", "voice0_oscil_base_function", "voice0_oscil_base_function_par", "voice0_oscil_base_function_modulation", "voice0_oscil_base_function_modulation_par1", "voice0_oscil_base_function_modulation_par2", "voice0_oscil_base_function_modulation_par3", "voice0_oscil_modulation", "voice0_oscil_modulation_par1", "voice0_oscil_modulation_par2", "voice0_oscil_modulation_par3", "voice0_oscil_wave_shaping", "voice0_oscil_wave_shaping_function", "voice0_oscil_filter_type", "voice0_oscil_filter_par1", "voice0_oscil_filter_par2", "voice0_oscil_filter_before_wave_shaping", "voice0_oscil_spectrum_adjust_type", "voice0_oscil_spectrum_adjust_par", "voice0_oscil_rand", "voice0_oscil_amp_rand_type", "voice0_oscil_amp_rand_power", "voice0_oscil_harmonic_shift", "voice0_oscil_harmonic_shift_first", "voice0_oscil_adaptive_harmonics", "voice0_oscil_adaptive_harmonics_base_frequency", "voice0_oscil_adaptive_harmonics_power", "voice0_oscil_harmonics_harmonic1_mag", "voice0_oscil_harmonics_harmonic1_phase", "voice0_oscil_harmonics_harmonic2_mag", "voice0_oscil_harmonics_harmonic2_phase", "voice0_oscil_harmonics_harmonic3_mag", "voice0_oscil_harmonics_harmonic3_phase", "voice0_oscil_harmonics_harmonic4_mag", "voice0_oscil_harmonics_harmonic4_phase", "voice0_oscil_harmonics_harmonic5_mag", "voice0_oscil_harmonics_harmonic5_phase", "voice0_oscil_harmonics_harmonic6_mag", "voice0_oscil_harmonics_harmonic6_phase", "voice0_oscil_harmonics_harmonic7_mag", "voice0_oscil_harmonics_harmonic7_phase", "voice0_oscil_harmonics_harmonic8_mag", "voice0_oscil_harmonics_harmonic8_phase", "voice0_amplitude_parameters_panning", "voice0_amplitude_parameters_volume", "voice0_amplitude_parameters_volume_minus", "voice0_amplitude_parameters_velocity_sensing", "voice0_amplitude_parameters_amp_envelope_enabled", "voice0_amplitude_parameters_amp_lfo_enabled", "voice0_frequency_parameters_fixed_freq", "voice0_frequency_parameters_fixed_freq_et", "voice0_frequency_parameters_detune", "voice0_frequency_parameters_detune_type", "voice0_frequency_parameters_freq_envelope_enabled", "voice0_frequency_parameters_freq_lfo_enabled", "instrument_effects_1_type", "instrument_effects_1_preset", "instrument_effects_1_effect_parameters_par_no_0", "instrument_effects_1_effect_parameters_par_no_1", "instrument_effects_1_effect_parameters_par_no_2", "instrument_effects_1_effect_parameters_par_no_3", "instrument_effects_1_effect_parameters_par_no_4", "instrument_effects_1_effect_parameters_par_no_5", "instrument_effects_1_effect_parameters_par_no_6", "instrument_effects_1_effect_parameters_par_no_7", "instrument_effects_1_effect_parameters_par_no_8", "instrument_effects_1_effect_parameters_par_no_9", "instrument_effects_1_effect_parameters_par_no_10", "instrument_effects_1_effect_parameters_par_no_11", "instrument_effects_1_effect_parameters_par_no_12", "instrument_effects_2_type", "instrument_effects_2_preset", "instrument_effects_2_effect_parameters_par_no_0", "instrument_effects_2_effect_parameters_par_no_1", "instrument_effects_2_effect_parameters_par_no_2", "instrument_effects_2_effect_parameters_par_no_3", "instrument_effects_2_effect_parameters_par_no_4", "instrument_effects_2_effect_parameters_par_no_5", "instrument_effects_2_effect_parameters_par_no_6", "instrument_effects_2_effect_parameters_par_no_7", "instrument_effects_2_effect_parameters_par_no_8", "instrument_effects_2_effect_parameters_par_no_9", "instrument_effects_2_effect_parameters_par_no_10", "instrument_effects_2_effect_parameters_par_no_11", "instrument_effects_2_effect_parameters_par_no_12"];
var preset_values_length = preset_values.length;

//These hold the values when importing presets and are used when creating a new preset
var obj_ = {};
for (var i = 0; i < preset_values_length; i++) {
	obj_[preset_values[i]] = {};
}

//These are used for holding the generated values that are selected when making a file
var var_ = {};
for (var i = 0; i < preset_values_length; i++) {
	var_[preset_values[i]] = 0;
}

function loadpresetfromfile(selectedfile){
	//This cleans up part of the xml to make it play nice with the xml parser
	var file = selectedfile.files[0];
	var reader = new FileReader();
	reader.onload = function(progressEvent){
		var xml = this.result;
		var xmlregex1 = xml.replace(/<?xml version="1.0"?>/g, "");
		var xmlregex2 = xmlregex1.replace(/<!DOCTYPE lmms-project>/g, "");
		var xmlregex3 = xmlregex2.replace(/lmms-project/g, "lmmsproject");
		var xmlregex4 = xmlregex3.replace(/ZynAddSubFX-data/g, "ZynAddSubFXdata");
		var storage_sucess = store_preset_values(xmlregex4);
		if (storage_sucess != false) {
			document.getElementById('selectedpresets').innerHTML += '<span class="button2">'+selectedfile.value.replace(/.*[\/\\]/, '')+'</span>';
		}
	};
	reader.readAsText(file);	
}

function parse_xml(xml){
	var xml_dom = false;
	if (window.DOMParser){
		var parser = new DOMParser();
		xml_dom = parser.parseFromString(xml,"text/xml");
	}
	else{
		alert("The web browser does not appear to support parsing XML. Please try another browser.");
		return false;
	}

	/**
	* XML2jsobj v1.0
	* Converts XML to a JavaScript object
	* so it can be handled like a JSON message
	*
	* By Craig Buckler, @craigbuckler, http://optimalworks.net
	*
	* As featured on SitePoint.com:
	* https://www.sitepoint.com/how-to-convert-xml-to-a-javascript-object/
	*
	* Please use as you wish at your own risk.
	*/
	function XML2jsobj(node) {
		var data = {};
		// append a value
		function Add(name, value) {
			if (data[name]) {
				if (data[name].constructor != Array) {
					data[name] = [data[name]];
				}
				data[name][data[name].length] = value;
			}
			else {
				data[name] = value;
			}
		}
		
		// element attributes
		var c, cn;
		if (node.attributes){
			for (c = 0; !!(cn = node.attributes[c]); c++) {
				Add(cn.name, cn.value);
			}
		}
		
		// child elements
		for (c = 0; !!(cn = node.childNodes[c]); c++) {
			if (cn.nodeType == 1) {
				if (cn.childNodes.length == 1 && cn.firstChild.nodeType == 3) {
					// text value
					Add(cn.nodeName, cn.firstChild.nodeValue);
				}
				else {
					// sub-object
					Add(cn.nodeName, XML2jsobj(cn));
				}
			}
		}

		return data;
	}

	return XML2jsobj(xml_dom);
}

//This gets the values from the parsed xml and records the values into objects
function store_preset_values(xml) {
	var parsedxml = parse_xml(xml);
	
	//If XML parsing was unsuccessful, stop
	if (parsedxml == false) {
		return false;
	}
	
	//Check if xml was invalid and stop if it is
	if (!parsedxml.lmmsproject) {
		alert("The selected preset file is either invalid or incompatible with this randomizer. Please try a different preset file.");
		console.log('test');
		return false;
	}
	
	//Check if part 1 is enabled
	//If not, throw error and stop
	if (parsedxml.lmmsproject.instrumenttracksettings.instrumenttrack.instrument.zynaddsubfx.ZynAddSubFXdata.MASTER.PART[0].par_bool[0].value == "yes") {
		
		//Stores that values from the preset file to be later added to the branching objects
		var add_synth_1 = {};
		
		//Used to try and make code a little easier to read
		var add_synth_parameters = parsedxml.lmmsproject.instrumenttracksettings.instrumenttrack.instrument.zynaddsubfx.ZynAddSubFXdata.MASTER.PART[0].INSTRUMENT.INSTRUMENT_KIT.INSTRUMENT_KIT_ITEM[0].ADD_SYNTH_PARAMETERS;
		var instrument_effects = parsedxml.lmmsproject.instrumenttracksettings.instrumenttrack.instrument.zynaddsubfx.ZynAddSubFXdata.MASTER.PART[0].INSTRUMENT.INSTRUMENT_EFFECTS;
		
		//If the add synth doesn't exist, stop and throw an error
		if (!add_synth_parameters) {
			alert("The preset file did not contain add synth parameters. Only add synth parameters are used at this time. Sub synth and pad synth randomization might be added later.");
			return false;
		}
		
		add_synth_1["velocity_sensing"] = add_synth_parameters.AMPLITUDE_PARAMETERS.par[2].value;
		add_synth_1["punch_strength"] = add_synth_parameters.AMPLITUDE_PARAMETERS.par[3].value;
		add_synth_1["punch_time"] = add_synth_parameters.AMPLITUDE_PARAMETERS.par[4].value;
		add_synth_1["punch_stretch"] = add_synth_parameters.AMPLITUDE_PARAMETERS.par[5].value;
		add_synth_1["punch_velocity_sensing"] = add_synth_parameters.AMPLITUDE_PARAMETERS.par[6].value;
		add_synth_1["harmonic_randomness_grouping"] = add_synth_parameters.AMPLITUDE_PARAMETERS.par[7].value;
		add_synth_1["amplitude_envelope_env_points"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[0].value;
		add_synth_1["amplitude_envelope_env_sustain"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[1].value;
		add_synth_1["amplitude_envelope_env_stretch"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[2].value;
		add_synth_1["amplitude_envelope_A_dt"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[3].value;
		add_synth_1["amplitude_envelope_D_dt"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[4].value;
		add_synth_1["amplitude_envelope_R_dt"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[5].value;
		add_synth_1["amplitude_envelope_A_val"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[6].value;
		add_synth_1["amplitude_envelope_D_val"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[7].value;
		add_synth_1["amplitude_envelope_S_val"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[8].value;
		add_synth_1["amplitude_envelope_R_val"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_ENVELOPE.par[9].value;
		add_synth_1["amplitude_lfo_freq"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_LFO.par_real.value;
		add_synth_1["amplitude_lfo_intensity"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_LFO.par[0].value;
		add_synth_1["amplitude_lfo_start_phase"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_LFO.par[1].value;
		add_synth_1["amplitude_lfo_lfo_type"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_LFO.par[2].value;
		add_synth_1["amplitude_lfo_randomness_amplitude"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_LFO.par[3].value;
		add_synth_1["amplitude_lfo_randomness_frequency"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_LFO.par[4].value;
		add_synth_1["amplitude_lfo_delay"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_LFO.par[5].value;
		add_synth_1["amplitude_lfo_stretch"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_LFO.par[6].value;
		add_synth_1["amplitude_lfo_continous"] = add_synth_parameters.AMPLITUDE_PARAMETERS.AMPLITUDE_LFO.par_bool.value;
		add_synth_1["frequency_parameters_detune"] = add_synth_parameters.FREQUENCY_PARAMETERS.par[0].value;
		add_synth_1["frequency_parameters_coarse_detune"] = add_synth_parameters.FREQUENCY_PARAMETERS.par[1].value;
		add_synth_1["frequency_parameters_detune_type"] = add_synth_parameters.FREQUENCY_PARAMETERS.par[2].value;
		add_synth_1["frequency_parameters_bandwidth"] = add_synth_parameters.FREQUENCY_PARAMETERS.par[3].value;
		add_synth_1["frequency_envelope_free_mode"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par_bool[0].value;
		add_synth_1["frequency_envelope_env_points"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[0].value;
		add_synth_1["frequency_envelope_env_sustain"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[1].value;
		add_synth_1["frequency_envelope_env_stretch"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[2].value;
		add_synth_1["frequency_envelope_forced_release"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par_bool[1].value;
		add_synth_1["frequency_envelope_linear_envelope"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par_bool[2].value;
		add_synth_1["frequency_envelope_A_dt"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[3].value;
		add_synth_1["frequency_envelope_D_dt"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[4].value;
		add_synth_1["frequency_envelope_R_dt"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[5].value;
		add_synth_1["frequency_envelope_A_val"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[6].value;
		add_synth_1["frequency_envelope_D_val"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[7].value;
		add_synth_1["frequency_envelope_S_val"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[8].value;
		add_synth_1["frequency_envelope_R_val"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_ENVELOPE.par[9].value;
		add_synth_1["frequency_lfo_freq"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_LFO.par_real.value;
		add_synth_1["frequency_lfo_intensity"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_LFO.par[0].value;
		add_synth_1["frequency_lfo_start_phase"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_LFO.par[1].value;
		add_synth_1["frequency_lfo_lfo_type"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_LFO.par[2].value;
		add_synth_1["frequency_lfo_randomness_amplitude"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_LFO.par[3].value;
		add_synth_1["frequency_lfo_randomness_frequency"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_LFO.par[4].value;
		add_synth_1["frequency_lfo_delay"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_LFO.par[5].value;
		add_synth_1["frequency_lfo_stretch"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_LFO.par[6].value;
		add_synth_1["frequency_lfo_continous"] = add_synth_parameters.FREQUENCY_PARAMETERS.FREQUENCY_LFO.par_bool.value;
		add_synth_1["filter_parameters_velocity_sensing_amplitude"] = add_synth_parameters.FILTER_PARAMETERS.par[0].value;
		add_synth_1["filter_parameters_velocity_sensing"] = add_synth_parameters.FILTER_PARAMETERS.par[1].value;
		add_synth_1["filter_category"] = add_synth_parameters.FILTER_PARAMETERS.FILTER.par[0].value;
		add_synth_1["filter_type"] = add_synth_parameters.FILTER_PARAMETERS.FILTER.par[1].value;
		add_synth_1["filter_freq"] = add_synth_parameters.FILTER_PARAMETERS.FILTER.par[2].value;
		add_synth_1["filter_q"] = add_synth_parameters.FILTER_PARAMETERS.FILTER.par[3].value;
		add_synth_1["filter_stages"] = add_synth_parameters.FILTER_PARAMETERS.FILTER.par[4].value;
		add_synth_1["filter_freq_track"] = add_synth_parameters.FILTER_PARAMETERS.FILTER.par[5].value;
		add_synth_1["filter_gain"] = add_synth_parameters.FILTER_PARAMETERS.FILTER.par[6].value;
		add_synth_1["filter_envelope_free_mode"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par_bool[0].value;
		add_synth_1["filter_envelope_env_points"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[0].value;
		add_synth_1["filter_envelope_env_sustain"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[1].value;
		add_synth_1["filter_envelope_env_stretch"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[2].value;
		add_synth_1["filter_envelope_forced_release"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par_bool[1].value;
		add_synth_1["filter_envelope_linear_envelope"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par_bool[2].value;
		add_synth_1["filter_envelope_A_dt"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[3].value;
		add_synth_1["filter_envelope_D_dt"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[4].value;
		add_synth_1["filter_envelope_R_dt"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[5].value;
		add_synth_1["filter_envelope_A_val"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[6].value;
		add_synth_1["filter_envelope_D_val"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[7].value;
		add_synth_1["filter_envelope_S_val"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[8].value;
		add_synth_1["filter_envelope_R_val"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_ENVELOPE.par[9].value;
		add_synth_1["filter_lfo_freq"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_LFO.par_real.value;
		add_synth_1["filter_lfo_intensity"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_LFO.par[0].value;
		add_synth_1["filter_lfo_start_phase"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_LFO.par[0].value;
		add_synth_1["filter_lfo_lfo_type"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_LFO.par[0].value;
		add_synth_1["filter_lfo_randomness_amplitude"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_LFO.par[0].value;
		add_synth_1["filter_lfo_randomness_frequency"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_LFO.par[0].value;
		add_synth_1["filter_lfo_delay"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_LFO.par[0].value;
		add_synth_1["filter_lfo_stretch"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_LFO.par[0].value;
		add_synth_1["filter_lfo_continous"] = add_synth_parameters.FILTER_PARAMETERS.FILTER_LFO.par_bool.value;
		add_synth_1["voice0_type"] = add_synth_parameters.VOICE[0].par[0].value;
		add_synth_1["voice0_unison_size"] = add_synth_parameters.VOICE[0].par[1].value;
		add_synth_1["voice0_unison_frequency_spread"] = add_synth_parameters.VOICE[0].par[2].value;
		add_synth_1["voice0_unison_stereo_spread"] = add_synth_parameters.VOICE[0].par[3].value;
		add_synth_1["voice0_unison_vibratto"] = add_synth_parameters.VOICE[0].par[4].value;
		add_synth_1["voice0_unison_vibratto_speed"] = add_synth_parameters.VOICE[0].par[5].value;
		add_synth_1["voice0_unison_invert_phase"] = add_synth_parameters.VOICE[0].par[6].value;
		add_synth_1["voice0_unison_phase_randomness"] = add_synth_parameters.VOICE[0].par[7].value;
		add_synth_1["voice0_delay"] = add_synth_parameters.VOICE[0].par[8].value;
		add_synth_1["voice0_resonance"] = add_synth_parameters.VOICE[0].par_bool[1].value;
		add_synth_1["voice0_ext_oscil"] = add_synth_parameters.VOICE[0].par[9].value;
		add_synth_1["voice0_ext_fm_oscil"] = add_synth_parameters.VOICE[0].par[10].value;
		add_synth_1["voice0_oscil_phase"] = add_synth_parameters.VOICE[0].par[11].value;
		add_synth_1["voice0_oscil_fm_phase"] = add_synth_parameters.VOICE[0].par[12].value;
		add_synth_1["voice0_filter_enabled"] = add_synth_parameters.VOICE[0].par_bool[2].value;
		add_synth_1["voice0_filter_bypass"] = add_synth_parameters.VOICE[0].par_bool[3].value;
		add_synth_1["voice0_fm_enabled"] = add_synth_parameters.VOICE[0].par[12].value;
		add_synth_1["voice0_oscil_harmonic_mag_type"] = add_synth_parameters.VOICE[0].OSCIL.par[0].value;
		add_synth_1["voice0_oscil_base_function"] = add_synth_parameters.VOICE[0].OSCIL.par[1].value;
		add_synth_1["voice0_oscil_base_function_par"] = add_synth_parameters.VOICE[0].OSCIL.par[2].value;
		add_synth_1["voice0_oscil_base_function_modulation"] = add_synth_parameters.VOICE[0].OSCIL.par[3].value;
		add_synth_1["voice0_oscil_base_function_modulation_par1"] = add_synth_parameters.VOICE[0].OSCIL.par[4].value;
		add_synth_1["voice0_oscil_base_function_modulation_par2"] = add_synth_parameters.VOICE[0].OSCIL.par[5].value;
		add_synth_1["voice0_oscil_base_function_modulation_par3"] = add_synth_parameters.VOICE[0].OSCIL.par[6].value;
		add_synth_1["voice0_oscil_modulation"] = add_synth_parameters.VOICE[0].OSCIL.par[7].value;
		add_synth_1["voice0_oscil_modulation_par1"] = add_synth_parameters.VOICE[0].OSCIL.par[8].value;
		add_synth_1["voice0_oscil_modulation_par2"] = add_synth_parameters.VOICE[0].OSCIL.par[9].value;
		add_synth_1["voice0_oscil_modulation_par3"] = add_synth_parameters.VOICE[0].OSCIL.par[10].value;
		add_synth_1["voice0_oscil_wave_shaping"] = add_synth_parameters.VOICE[0].OSCIL.par[11].value;
		add_synth_1["voice0_oscil_wave_shaping_function"] = add_synth_parameters.VOICE[0].OSCIL.par[12].value;
		add_synth_1["voice0_oscil_filter_type"] = add_synth_parameters.VOICE[0].OSCIL.par[13].value;
		add_synth_1["voice0_oscil_filter_par1"] = add_synth_parameters.VOICE[0].OSCIL.par[14].value;
		add_synth_1["voice0_oscil_filter_par2"] = add_synth_parameters.VOICE[0].OSCIL.par[15].value;
		add_synth_1["voice0_oscil_filter_before_wave_shaping"] = add_synth_parameters.VOICE[0].OSCIL.par[16].value;
		add_synth_1["voice0_oscil_spectrum_adjust_type"] = add_synth_parameters.VOICE[0].OSCIL.par[17].value;
		add_synth_1["voice0_oscil_spectrum_adjust_par"] = add_synth_parameters.VOICE[0].OSCIL.par[18].value;
		add_synth_1["voice0_oscil_rand"] = add_synth_parameters.VOICE[0].OSCIL.par[19].value;
		add_synth_1["voice0_oscil_amp_rand_type"] = add_synth_parameters.VOICE[0].OSCIL.par[20].value;
		add_synth_1["voice0_oscil_amp_rand_power"] = add_synth_parameters.VOICE[0].OSCIL.par[21].value;
		add_synth_1["voice0_oscil_harmonic_shift"] = add_synth_parameters.VOICE[0].OSCIL.par[22].value;
		add_synth_1["voice0_oscil_harmonic_shift_first"] = add_synth_parameters.VOICE[0].OSCIL.par_bool.value;
		add_synth_1["voice0_oscil_adaptive_harmonics"] = add_synth_parameters.VOICE[0].OSCIL.par[23].value;
		add_synth_1["voice0_oscil_adaptive_harmonics_base_frequency"] = add_synth_parameters.VOICE[0].OSCIL.par[24].value;
		add_synth_1["voice0_oscil_adaptive_harmonics_power"] = add_synth_parameters.VOICE[0].OSCIL.par[25].value;
		
		add_synth_1["voice0_oscil_harmonics_harmonic1_mag"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic1_phase"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic2_mag"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic2_phase"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic3_mag"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic3_phase"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic4_mag"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic4_phase"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic5_mag"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic5_phase"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic6_mag"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic6_phase"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic7_mag"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic7_phase"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic8_mag"] = "64";
		add_synth_1["voice0_oscil_harmonics_harmonic8_phase"] = "64";
		
		//If there is only one harmonics (not an array) do this
		if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC) {
			if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.id == "1") {
				add_synth_1["voice0_oscil_harmonics_harmonic1_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[0].value;
				add_synth_1["voice0_oscil_harmonics_harmonic1_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[1].value;
			}
			else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.id == "2") {
				add_synth_1["voice0_oscil_harmonics_harmonic2_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[0].value;
				add_synth_1["voice0_oscil_harmonics_harmonic2_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[1].value;
			}
			else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.id == "3") {
				add_synth_1["voice0_oscil_harmonics_harmonic3_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[0].value;
				add_synth_1["voice0_oscil_harmonics_harmonic3_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[1].value;
			}
			else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.id == "4") {
				add_synth_1["voice0_oscil_harmonics_harmonic4_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[0].value;
				add_synth_1["voice0_oscil_harmonics_harmonic4_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[1].value;
			}
			else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.id == "5") {
				add_synth_1["voice0_oscil_harmonics_harmonic5_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[0].value;
				add_synth_1["voice0_oscil_harmonics_harmonic5_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[1].value;
			}
			else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.id == "6") {
				add_synth_1["voice0_oscil_harmonics_harmonic6_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[0].value;
				add_synth_1["voice0_oscil_harmonics_harmonic6_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[1].value;
			}
			else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.id == "7") {
				add_synth_1["voice0_oscil_harmonics_harmonic7_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[0].value;
				add_synth_1["voice0_oscil_harmonics_harmonic7_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[1].value;
			}
			else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.id == "8") {
				add_synth_1["voice0_oscil_harmonics_harmonic8_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[0].value;
				add_synth_1["voice0_oscil_harmonics_harmonic8_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC.par[1].value;
			}		
		}
		
		//If there is more than one (an array) check each one
		for (i = 0; i <= 7; i++){
			if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i]) {
				if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].id == "1") {
					add_synth_1["voice0_oscil_harmonics_harmonic1_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[0].value;
					add_synth_1["voice0_oscil_harmonics_harmonic1_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[1].value;
				}
				else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].id == "2") {
					add_synth_1["voice0_oscil_harmonics_harmonic2_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[0].value;
					add_synth_1["voice0_oscil_harmonics_harmonic2_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[1].value;
				}
				else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].id == "3") {
					add_synth_1["voice0_oscil_harmonics_harmonic3_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[0].value;
					add_synth_1["voice0_oscil_harmonics_harmonic3_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[1].value;
				}
				else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].id == "4") {
					add_synth_1["voice0_oscil_harmonics_harmonic4_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[0].value;
					add_synth_1["voice0_oscil_harmonics_harmonic4_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[1].value;
				}
				else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].id == "5") {
					add_synth_1["voice0_oscil_harmonics_harmonic5_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[0].value;
					add_synth_1["voice0_oscil_harmonics_harmonic5_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[1].value;
				}
				else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].id == "6") {
					add_synth_1["voice0_oscil_harmonics_harmonic6_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[0].value;
					add_synth_1["voice0_oscil_harmonics_harmonic6_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[1].value;
				}
				else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].id == "7") {
					add_synth_1["voice0_oscil_harmonics_harmonic7_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[0].value;
					add_synth_1["voice0_oscil_harmonics_harmonic7_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[1].value;
				}
				else if (add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].id == "8") {
					add_synth_1["voice0_oscil_harmonics_harmonic8_mag"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[0].value;
					add_synth_1["voice0_oscil_harmonics_harmonic8_phase"] = add_synth_parameters.VOICE[0].OSCIL.HARMONICS.HARMONIC[i].par[1].value;
				}
			}
		}
		
		add_synth_1["voice0_amplitude_parameters_panning"] = add_synth_parameters.VOICE[0].AMPLITUDE_PARAMETERS.par[0].value;
		add_synth_1["voice0_amplitude_parameters_volume"] = add_synth_parameters.VOICE[0].AMPLITUDE_PARAMETERS.par[1].value;
		add_synth_1["voice0_amplitude_parameters_volume_minus"] = add_synth_parameters.VOICE[0].AMPLITUDE_PARAMETERS.par_bool[0].value;
		add_synth_1["voice0_amplitude_parameters_velocity_sensing"] = add_synth_parameters.VOICE[0].AMPLITUDE_PARAMETERS.par[2].value;
		add_synth_1["voice0_amplitude_parameters_amp_envelope_enabled"] = add_synth_parameters.VOICE[0].AMPLITUDE_PARAMETERS.par_bool[1].value;
		add_synth_1["voice0_amplitude_parameters_amp_lfo_enabled"] = add_synth_parameters.VOICE[0].AMPLITUDE_PARAMETERS.par_bool[2].value;
		add_synth_1["voice0_frequency_parameters_fixed_freq"] = add_synth_parameters.VOICE[0].FREQUENCY_PARAMETERS.par_bool[0].value;
		add_synth_1["voice0_frequency_parameters_fixed_freq_et"] = add_synth_parameters.VOICE[0].FREQUENCY_PARAMETERS.par[0].value;
		add_synth_1["voice0_frequency_parameters_detune"] = add_synth_parameters.VOICE[0].FREQUENCY_PARAMETERS.par[1].value;
		add_synth_1["voice0_frequency_parameters_detune_type"] = add_synth_parameters.VOICE[0].FREQUENCY_PARAMETERS.par[2].value;
		add_synth_1["voice0_frequency_parameters_freq_envelope_enabled"] = add_synth_parameters.VOICE[0].FREQUENCY_PARAMETERS.par[3].value;
		add_synth_1["voice0_frequency_parameters_freq_lfo_enabled"] = add_synth_parameters.VOICE[0].FREQUENCY_PARAMETERS.par_bool[1].value;
		
		add_synth_1["instrument_effects_1_type"] = "0";
		add_synth_1["instrument_effects_1_preset"] = "0";
		
		if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.par[0]) {
			add_synth_1["instrument_effects_1_type"] = instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.par[0].value;
		}
		if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.par[1]) {
			add_synth_1["instrument_effects_1_preset"] = instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.par[1].value;
		}
		
		add_synth_1["instrument_effects_1_effect_parameters_par_no_0"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_1"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_2"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_3"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_4"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_5"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_6"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_7"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_8"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_9"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_10"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_11"] = '';
		add_synth_1["instrument_effects_1_effect_parameters_par_no_12"] = '';
		
		if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS) {
			for (i = 0; i <= 12; i++) {
				if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i]) {
					if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "0") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_0"] = '<par_no id="0"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "1") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_1"] = '<par_no id="1"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "2") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_2"] = '<par_no id="2"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "3") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_3"] = '<par_no id="3"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "4") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_4"] = '<par_no id="4"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "5") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_5"] = '<par_no id="5"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "6") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_6"] = '<par_no id="6"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "7") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_7"] = '<par_no id="7"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "8") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_8"] = '<par_no id="8"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "9") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_9"] = '<par_no id="9"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "10") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_10"] = '<par_no id="10"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "11") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_11"] = '<par_no id="11"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "12") {
						add_synth_1["instrument_effects_1_effect_parameters_par_no_12"] = '<par_no id="12"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[0].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
				}
			}
		}
		
		add_synth_1["instrument_effects_2_type"] = "0";
		add_synth_1["instrument_effects_2_preset"] = "0";
		
		if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.par[0]) {
			add_synth_1["instrument_effects_2_type"] = instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.par[0].value;
		}
		if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.par[1]) {
			add_synth_1["instrument_effects_2_preset"] = instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.par[1].value;
		}
		
		add_synth_1["instrument_effects_2_effect_parameters_par_no_0"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_1"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_2"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_3"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_4"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_5"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_6"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_7"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_8"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_9"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_10"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_11"] = '';
		add_synth_1["instrument_effects_2_effect_parameters_par_no_12"] = '';
		
		if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS) {
			for (i = 0; i <= 12; i++) {
				if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i]) {
					if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "0") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_0"] = '<par_no id="0"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "1") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_1"] = '<par_no id="1"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "2") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_2"] = '<par_no id="2"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "3") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_3"] = '<par_no id="3"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "4") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_4"] = '<par_no id="4"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "5") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_5"] = '<par_no id="5"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "6") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_6"] = '<par_no id="6"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "7") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_7"] = '<par_no id="7"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "8") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_8"] = '<par_no id="8"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "9") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_9"] = '<par_no id="9"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "10") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_10"] = '<par_no id="10"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "11") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_11"] = '<par_no id="11"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
					else if (instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].id == "12") {
						add_synth_1["instrument_effects_2_effect_parameters_par_no_12"] = '<par_no id="12"><par name="par" value="'+instrument_effects.INSTRUMENT_EFFECT[1].EFFECT.EFFECT_PARAMETERS.par_no[i].par.value+'"/> </par_no>';
					}
				}
			}
		}
		
		//Due to using velocity sensing to kick off the chain of branching objects, we manually add it before looping through the rest
		if (!obj_["punch_strength"][add_synth_1["velocity_sensing"]]) {
			obj_["punch_strength"][add_synth_1["velocity_sensing"]] = {};
		}
		obj_["punch_strength"][add_synth_1["velocity_sensing"]][add_synth_1["punch_strength"]] = add_synth_1["punch_strength"];
		
		//Loop through the rest
		//punch strength = 0
		//punch time = 1
		//etc...
		for (var i = 0; i < preset_values_length - 1; i++) {
			if (!obj_[preset_values[i + 1]][add_synth_1[preset_values[i]]]) {
				obj_[preset_values[i + 1]][add_synth_1[preset_values[i]]] = {};
			}
			obj_[preset_values[i + 1]][add_synth_1[preset_values[i]]][add_synth_1[preset_values[i + 1]]] = add_synth_1[preset_values[i + 1]];
		}
	}
	else {
		alert("The selected preset file is either invalid or incompatible with this randomizer. Please try a different preset file.");
		return false;
	}
}

function generate_and_save_files() {
	//Check if any preset values have been stored and stop if none have been stored
	if (document.getElementById('selectedpresets').innerHTML == '') {
		alert("No preset files have been selected.");
		return;
	}
	
	//Generate the number of files chosen with a min of 1 and max of 99
	var number_of_files = document.getElementById('number').value;
	if (number_of_files < 1 || number_of_files > 99) {
		number_of_files = 1;
	}
	for (i = 0; i < number_of_files; i++) {
		generate_and_save();
	}
}

function generate_and_save() {
	var keys1 = 0;
	var keys2 = 0;
	var randomkey1 = 0;
	var randomkey2 = 0;
	
	for (i2 = 0; i2 < preset_values_length; i2++){
		keys1 = Object.keys(obj_[preset_values[i2]]);
		randomkey1 = Math.floor(Math.random()*keys1.length);
		keys2 = Object.keys(obj_[preset_values[i2]][keys1[randomkey1]]);
		randomkey2 = Math.floor(Math.random()*keys2.length);
		var_[preset_values[i2]] = obj_[preset_values[i2]][keys1[randomkey1]][keys2[randomkey2]];
	}
	
	document.getElementById('code').innerHTML = '<?xml version="1.0"?>&#013;\
<!DOCTYPE lmms-project>&#013;\
<lmms-project version="1.0" creator="LMMS" creatorversion="1.1.90" type="instrumenttracksettings">&#013;\
  <head/>&#013;\
  <instrumenttracksettings muted="0" type="0" name="ZynAddSubFX" solo="0">&#013;\
    <instrumenttrack pan="0" fxch="0" usemasterpitch="1" pitchrange="1" pitch="0" basenote="57" vol="100">&#013;\
      <instrument name="zynaddsubfx">&#013;\
        <zynaddsubfx resbandwidth="64" fmgain="127" portamento="0" modifiedcontrollers="" filterfreq="64" bandwidth="64" forwardmidicc="1" filterq="64" rescenterfreq="64">&#013;\
          <ZynAddSubFX-data version-revision="1" version-minor="4" version-major="2" ZynAddSubFX-author="Nasca Octavian Paul">&#013;\
            <INFORMATION>&#013;\
              <par_bool value="no" name="PADsynth_used"/>&#013;\
            </INFORMATION>&#013;\
            <BASE_PARAMETERS>&#013;\
              <par value="16" name="max_midi_parts"/>&#013;\
              <par value="16" name="max_kit_items_per_instrument"/>&#013;\
              <par value="4" name="max_system_effects"/>&#013;\
              <par value="8" name="max_insertion_effects"/>&#013;\
              <par value="3" name="max_instrument_effects"/>&#013;\
              <par value="8" name="max_addsynth_voices"/>&#013;\
            </BASE_PARAMETERS>&#013;\
            <MASTER>&#013;\
              <par value="80" name="volume"/>&#013;\
              <par value="64" name="key_shift"/>&#013;\
              <par_bool value="yes" name="nrpn_receive"/>&#013;\
              <MICROTONAL>&#013;\
                <string name="name">12tET</string>&#013;\
                <string name="comment">Equal Temperament 12 notes per octave</string>&#013;\
                <par_bool value="no" name="invert_up_down"/>&#013;\
                <par value="60" name="invert_up_down_center"/>&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
                <par value="64" name="global_fine_detune"/>&#013;\
                <par value="69" name="a_note"/>&#013;\
                <par_real value="440" name="a_freq"/>&#013;\
              </MICROTONAL>&#013;\
              <PART id="0">&#013;\
                <par_bool value="yes" name="enabled"/>&#013;\
                <par value="96" name="volume"/>&#013;\
                <par value="64" name="panning"/>&#013;\
                <par value="0" name="min_key"/>&#013;\
                <par value="127" name="max_key"/>&#013;\
                <par value="64" name="key_shift"/>&#013;\
                <par value="0" name="rcv_chn"/>&#013;\
                <par value="64" name="velocity_sensing"/>&#013;\
                <par value="64" name="velocity_offset"/>&#013;\
                <par_bool value="yes" name="note_on"/>&#013;\
                <par_bool value="yes" name="poly_mode"/>&#013;\
                <par value="0" name="legato_mode"/>&#013;\
                <par value="15" name="key_limit"/>&#013;\
                <INSTRUMENT>&#013;\
                  <INFO>&#013;\
                    <string name="name"/>&#013;\
                    <string name="author">Produced by isaiah658\'s preset combiner.</string>&#013;\
                    <string name="comments"/>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </INFO>&#013;\
                  <INSTRUMENT_KIT>&#013;\
                    <par value="0" name="kit_mode"/>&#013;\
                    <par_bool value="no" name="drum_mode"/>&#013;\
                    <INSTRUMENT_KIT_ITEM id="0">&#013;\
                      <par_bool value="yes" name="enabled"/>&#013;\
                      <string name="name"/>&#013;\
                      <par_bool value="no" name="muted"/>&#013;\
                      <par value="0" name="min_key"/>&#013;\
                      <par value="127" name="max_key"/>&#013;\
                      <par value="0" name="send_to_instrument_effect"/>&#013;\
                      <par_bool value="yes" name="add_enabled"/>&#013;\
                      <ADD_SYNTH_PARAMETERS>&#013;\
                        <par_bool value="yes" name="stereo"/>&#013;\
                        <AMPLITUDE_PARAMETERS>&#013;\
                          <par value="100" name="volume"/>&#013;\
                          <par value="64" name="panning"/>&#013;\
                          <par value="64" name="velocity_sensing"/>&#013;\
                          <par value="'+var_["punch_strength"]+'" name="punch_strength"/>&#013;\
                          <par value="'+var_["punch_time"]+'" name="punch_time"/>&#013;\
                          <par value="'+var_["punch_stretch"]+'" name="punch_stretch"/>&#013;\
                          <par value="'+var_["punch_velocity_sensing"]+'" name="punch_velocity_sensing"/>&#013;\
                          <par value="'+var_["harmonic_randomness_grouping"]+'" name="harmonic_randomness_grouping"/>&#013;\
                          <AMPLITUDE_ENVELOPE>&#013;\
                            <par_bool value="no" name="free_mode"/>&#013;\
                            <par value="'+var_["amplitude_envelope_env_points"]+'" name="env_points"/>&#013;\
                            <par value="'+var_["amplitude_envelope_env_sustain"]+'" name="env_sustain"/>&#013;\
                            <par value="'+var_["amplitude_envelope_env_stretch"]+'" name="env_stretch"/>&#013;\
                            <par_bool value="yes" name="forced_release"/>&#013;\
                            <par_bool value="no" name="linear_envelope"/>&#013;\
                            <par value="'+var_["amplitude_envelope_A_dt"]+'" name="A_dt"/>&#013;\
                            <par value="'+var_["amplitude_envelope_D_dt"]+'" name="D_dt"/>&#013;\
                            <par value="'+var_["amplitude_envelope_R_dt"]+'" name="R_dt"/>&#013;\
                            <par value="'+var_["amplitude_envelope_A_val"]+'" name="A_val"/>&#013;\
                            <par value="'+var_["amplitude_envelope_D_val"]+'" name="D_val"/>&#013;\
                            <par value="'+var_["amplitude_envelope_S_val"]+'" name="S_val"/>&#013;\
                            <par value="'+var_["amplitude_envelope_R_val"]+'" name="R_val"/>&#013;\
                          </AMPLITUDE_ENVELOPE>&#013;\
                          <AMPLITUDE_LFO>&#013;\
                            <par_real value="'+var_["amplitude_lfo_freq"]+'" name="freq"/>&#013;\
                            <par value="'+var_["amplitude_lfo_intensity"]+'" name="intensity"/>&#013;\
                            <par value="'+var_["amplitude_lfo_start_phase"]+'" name="start_phase"/>&#013;\
                            <par value="'+var_["amplitude_lfo_lfo_type"]+'" name="lfo_type"/>&#013;\
                            <par value="'+var_["amplitude_lfo_randomness_amplitude"]+'" name="randomness_amplitude"/>&#013;\
                            <par value="'+var_["amplitude_lfo_randomness_frequency"]+'" name="randomness_frequency"/>&#013;\
                            <par value="'+var_["amplitude_lfo_delay"]+'" name="delay"/>&#013;\
                            <par value="'+var_["amplitude_lfo_stretch"]+'" name="stretch"/>&#013;\
                            <par_bool value="'+var_["amplitude_lfo_continous"]+'" name="continous"/>&#013;\
                          </AMPLITUDE_LFO>&#013;\
                        </AMPLITUDE_PARAMETERS>&#013;\
                        <FREQUENCY_PARAMETERS>&#013;\
                          <par value="'+var_["frequency_parameters_detune"]+'" name="detune"/>&#013;\
                          <par value="'+var_["frequency_parameters_coarse_detune"]+'" name="coarse_detune"/>&#013;\
                          <par value="'+var_["frequency_parameters_detune_type"]+'" name="detune_type"/>&#013;\
                          <par value="'+var_["frequency_parameters_bandwidth"]+'" name="bandwidth"/>&#013;\
                          <FREQUENCY_ENVELOPE>&#013;\
                            <par_bool value="'+var_["frequency_envelope_free_mode"]+'" name="free_mode"/>&#013;\
                            <par value="'+var_["frequency_envelope_env_points"]+'" name="env_points"/>&#013;\
                            <par value="'+var_["frequency_envelope_env_sustain"]+'" name="env_sustain"/>&#013;\
                            <par value="'+var_["frequency_envelope_env_stretch"]+'" name="env_stretch"/>&#013;\
                            <par_bool value="'+var_["frequency_envelope_forced_release"]+'" name="forced_release"/>&#013;\
                            <par_bool value="'+var_["frequency_envelope_linear_envelope"]+'" name="linear_envelope"/>&#013;\
                            <par value="'+var_["frequency_envelope_A_dt"]+'" name="A_dt"/>&#013;\
                            <par value="'+var_["frequency_envelope_D_dt"]+'" name="D_dt"/>&#013;\
                            <par value="'+var_["frequency_envelope_R_dt"]+'" name="R_dt"/>&#013;\
                            <par value="'+var_["frequency_envelope_A_val"]+'" name="A_val"/>&#013;\
                            <par value="'+var_["frequency_envelope_D_val"]+'" name="D_val"/>&#013;\
                            <par value="'+var_["frequency_envelope_S_val"]+'" name="S_val"/>&#013;\
                            <par value="'+var_["frequency_envelope_R_val"]+'" name="R_val"/>&#013;\
                          </FREQUENCY_ENVELOPE>&#013;\
                          <FREQUENCY_LFO>&#013;\
                            <par_real value="'+var_["frequency_lfo_freq"]+'" name="freq"/>&#013;\
                            <par value="'+var_["frequency_lfo_intensity"]+'" name="intensity"/>&#013;\
                            <par value="'+var_["frequency_lfo_start_phase"]+'" name="start_phase"/>&#013;\
                            <par value="'+var_["frequency_lfo_lfo_type"]+'" name="lfo_type"/>&#013;\
                            <par value="'+var_["frequency_lfo_randomness_amplitude"]+'" name="randomness_amplitude"/>&#013;\
                            <par value="'+var_["frequency_lfo_randomness_frequency"]+'" name="randomness_frequency"/>&#013;\
                            <par value="'+var_["frequency_lfo_delay"]+'" name="delay"/>&#013;\
                            <par value="'+var_["frequency_lfo_stretch"]+'" name="stretch"/>&#013;\
                            <par_bool value="'+var_["frequency_lfo_continous"]+'" name="continous"/>&#013;\
                          </FREQUENCY_LFO>&#013;\
                        </FREQUENCY_PARAMETERS>&#013;\
                        <FILTER_PARAMETERS>&#013;\
                          <par value="'+var_["filter_parameters_velocity_sensing_amplitude"]+'" name="velocity_sensing_amplitude"/>&#013;\
                          <par value="'+var_["filter_parameters_velocity_sensing"]+'" name="velocity_sensing"/>&#013;\
                          <FILTER>&#013;\
                            <par value="'+var_["filter_category"]+'" name="category"/>&#013;\
                            <par value="'+var_["filter_type"]+'" name="type"/>&#013;\
                            <par value="'+var_["filter_freq"]+'" name="freq"/>&#013;\
                            <par value="'+var_["filter_q"]+'" name="q"/>&#013;\
                            <par value="'+var_["filter_stages"]+'" name="stages"/>&#013;\
                            <par value="'+var_["filter_freq_track"]+'" name="freq_track"/>&#013;\
                            <par value="'+var_["filter_gain"]+'" name="gain"/>&#013;\
                          </FILTER>&#013;\
                          <FILTER_ENVELOPE>&#013;\
                            <par_bool value="'+var_["filter_envelope_free_mode"]+'" name="free_mode"/>&#013;\
                            <par value="'+var_["filter_envelope_env_points"]+'" name="env_points"/>&#013;\
                            <par value="'+var_["filter_envelope_env_sustain"]+'" name="env_sustain"/>&#013;\
                            <par value="'+var_["filter_envelope_env_stretch"]+'" name="env_stretch"/>&#013;\
                            <par_bool value="'+var_["filter_envelope_forced_release"]+'" name="forced_release"/>&#013;\
                            <par_bool value="'+var_["filter_envelope_linear_envelope"]+'" name="linear_envelope"/>&#013;\
                            <par value="'+var_["filter_envelope_A_dt"]+'" name="A_dt"/>&#013;\
                            <par value="'+var_["filter_envelope_D_dt"]+'" name="D_dt"/>&#013;\
                            <par value="'+var_["filter_envelope_R_dt"]+'" name="R_dt"/>&#013;\
                            <par value="'+var_["filter_envelope_A_val"]+'" name="A_val"/>&#013;\
                            <par value="'+var_["filter_envelope_D_val"]+'" name="D_val"/>&#013;\
                            <par value="'+var_["filter_envelope_S_val"]+'" name="S_val"/>&#013;\
                            <par value="'+var_["filter_envelope_R_val"]+'" name="R_val"/>&#013;\
                          </FILTER_ENVELOPE>&#013;\
                          <FILTER_LFO>&#013;\
                            <par_real value="'+var_["filter_lfo_freq"]+'" name="freq"/>&#013;\
                            <par value="'+var_["filter_lfo_intensity"]+'" name="intensity"/>&#013;\
                            <par value="'+var_["filter_lfo_start_phase"]+'" name="start_phase"/>&#013;\
                            <par value="'+var_["filter_lfo_lfo_type"]+'" name="lfo_type"/>&#013;\
                            <par value="'+var_["filter_lfo_randomness_amplitude"]+'" name="randomness_amplitude"/>&#013;\
                            <par value="'+var_["filter_lfo_randomness_frequency"]+'" name="randomness_frequency"/>&#013;\
                            <par value="'+var_["filter_lfo_delay"]+'" name="delay"/>&#013;\
                            <par value="'+var_["filter_lfo_stretch"]+'" name="stretch"/>&#013;\
                            <par_bool value="'+var_["filter_lfo_continous"]+'" name="continous"/>&#013;\
                          </FILTER_LFO>&#013;\
                        </FILTER_PARAMETERS>&#013;\
                        <RESONANCE>&#013;\
                          <par_bool value="no" name="enabled"/>&#013;\
                        </RESONANCE>&#013;\
                        <VOICE id="0">&#013;\
                          <par_bool value="yes" name="enabled"/>&#013;\
                          <par value="'+var_["voice0_type"]+'" name="type"/>&#013;\
                          <par value="'+var_["voice0_unison_size"]+'" name="unison_size"/>&#013;\
                          <par value="'+var_["voice0_unison_frequency_spread"]+'" name="unison_frequency_spread"/>&#013;\
                          <par value="'+var_["voice0_unison_stereo_spread"]+'" name="unison_stereo_spread"/>&#013;\
                          <par value="'+var_["voice0_unison_vibratto"]+'" name="unison_vibratto"/>&#013;\
                          <par value="'+var_["voice0_unison_vibratto_speed"]+'" name="unison_vibratto_speed"/>&#013;\
                          <par value="'+var_["voice0_unison_invert_phase"]+'" name="unison_invert_phase"/>&#013;\
                          <par value="'+var_["voice0_unison_phase_randomness"]+'" name="unison_phase_randomness"/>&#013;\
                          <par value="'+var_["voice0_delay"]+'" name="delay"/>&#013;\
                          <par_bool value="'+var_["voice0_resonance"]+'" name="resonance"/>&#013;\
                          <par value="'+var_["voice0_ext_oscil"]+'" name="ext_oscil"/>&#013;\
                          <par value="'+var_["voice0_ext_fm_oscil"]+'" name="ext_fm_oscil"/>&#013;\
                          <par value="'+var_["voice0_oscil_phase"]+'" name="oscil_phase"/>&#013;\
                          <par value="'+var_["voice0_oscil_fm_phase"]+'" name="oscil_fm_phase"/>&#013;\
                          <par_bool value="'+var_["voice0_filter_enabled"]+'" name="filter_enabled"/>&#013;\
                          <par_bool value="'+var_["voice0_filter_bypass"]+'" name="filter_bypass"/>&#013;\
                          <par value="'+var_["voice0_fm_enabled"]+'" name="fm_enabled"/>&#013;\
                          <OSCIL>&#013;\
                            <par value="'+var_["voice0_oscil_harmonic_mag_type"]+'" name="harmonic_mag_type"/>&#013;\
                            <par value="'+var_["voice0_oscil_base_function"]+'" name="base_function"/>&#013;\
                            <par value="'+var_["voice0_oscil_base_function_par"]+'" name="base_function_par"/>&#013;\
                            <par value="'+var_["voice0_oscil_base_function_modulation"]+'" name="base_function_modulation"/>&#013;\
                            <par value="'+var_["voice0_oscil_base_function_modulation_par1"]+'" name="base_function_modulation_par1"/>&#013;\
                            <par value="'+var_["voice0_oscil_base_function_modulation_par2"]+'" name="base_function_modulation_par2"/>&#013;\
                            <par value="'+var_["voice0_oscil_base_function_modulation_par3"]+'" name="base_function_modulation_par3"/>&#013;\
                            <par value="'+var_["voice0_oscil_modulation"]+'" name="modulation"/>&#013;\
                            <par value="'+var_["voice0_oscil_modulation_par1"]+'" name="modulation_par1"/>&#013;\
                            <par value="'+var_["voice0_oscil_modulation_par2"]+'" name="modulation_par2"/>&#013;\
                            <par value="'+var_["voice0_oscil_modulation_par3"]+'" name="modulation_par3"/>&#013;\
                            <par value="'+var_["voice0_oscil_wave_shaping"]+'" name="wave_shaping"/>&#013;\
                            <par value="'+var_["voice0_oscil_wave_shaping_function"]+'" name="wave_shaping_function"/>&#013;\
                            <par value="'+var_["voice0_oscil_filter_type"]+'" name="filter_type"/>&#013;\
                            <par value="'+var_["voice0_oscil_filter_par1"]+'" name="filter_par1"/>&#013;\
                            <par value="'+var_["voice0_oscil_filter_par2"]+'" name="filter_par2"/>&#013;\
                            <par value="'+var_["voice0_oscil_filter_before_wave_shaping"]+'" name="filter_before_wave_shaping"/>&#013;\
                            <par value="'+var_["voice0_oscil_spectrum_adjust_type"]+'" name="spectrum_adjust_type"/>&#013;\
                            <par value="'+var_["voice0_oscil_spectrum_adjust_par"]+'" name="spectrum_adjust_par"/>&#013;\
                            <par value="'+var_["voice0_oscil_rand"]+'" name="rand"/>&#013;\
                            <par value="'+var_["voice0_oscil_amp_rand_type"]+'" name="amp_rand_type"/>&#013;\
                            <par value="'+var_["voice0_oscil_amp_rand_power"]+'" name="amp_rand_power"/>&#013;\
                            <par value="'+var_["voice0_oscil_harmonic_shift"]+'" name="harmonic_shift"/>&#013;\
                            <par_bool value="'+var_["voice0_oscil_harmonic_shift_first"]+'" name="harmonic_shift_first"/>&#013;\
                            <par value="'+var_["voice0_oscil_adaptive_harmonics"]+'" name="adaptive_harmonics"/>&#013;\
                            <par value="'+var_["voice0_oscil_adaptive_harmonics_base_frequency"]+'" name="adaptive_harmonics_base_frequency"/>&#013;\
                            <par value="'+var_["voice0_oscil_adaptive_harmonics_power"]+'" name="adaptive_harmonics_power"/>&#013;\
                            <HARMONICS>&#013;\
                              <HARMONIC id="1">&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic1_mag"]+'" name="mag"/>&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic1_phase"]+'" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="2">&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic2_mag"]+'" name="mag"/>&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic2_phase"]+'" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="3">&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic3_mag"]+'" name="mag"/>&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic3_phase"]+'" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="4">&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic4_mag"]+'" name="mag"/>&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic4_phase"]+'" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="5">&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic5_mag"]+'" name="mag"/>&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic5_phase"]+'" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="6">&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic6_mag"]+'" name="mag"/>&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic6_phase"]+'" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="7">&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic7_mag"]+'" name="mag"/>&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic7_phase"]+'" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="8">&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic8_mag"]+'" name="mag"/>&#013;\
                                <par value="'+var_["voice0_oscil_harmonics_harmonic8_phase"]+'" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
                            </HARMONICS>&#013;\
                          </OSCIL>&#013;\
                          <AMPLITUDE_PARAMETERS>&#013;\
                            <par value="'+var_["voice0_amplitude_parameters_panning"]+'" name="panning"/>&#013;\
                            <par value="'+var_["voice0_amplitude_parameters_volume"]+'" name="volume"/>&#013;\
                            <par_bool value="'+var_["voice0_amplitude_parameters_volume_minus"]+'" name="volume_minus"/>&#013;\
                            <par value="'+var_["voice0_amplitude_parameters_velocity_sensing"]+'" name="velocity_sensing"/>&#013;\
                            <par_bool value="'+var_["voice0_amplitude_parameters_amp_envelope_enabled"]+'" name="amp_envelope_enabled"/>&#013;\
                            <par_bool value="'+var_["voice0_amplitude_parameters_amp_lfo_enabled"]+'" name="amp_lfo_enabled"/>&#013;\
                          </AMPLITUDE_PARAMETERS>&#013;\
                          <FREQUENCY_PARAMETERS>&#013;\
                            <par_bool value="'+var_["voice0_frequency_parameters_fixed_freq"]+'" name="fixed_freq"/>&#013;\
                            <par value="'+var_["voice0_frequency_parameters_fixed_freq_et"]+'" name="fixed_freq_et"/>&#013;\
                            <par value="'+var_["voice0_frequency_parameters_detune"]+'" name="detune"/>&#013;\
                            <par value="0" name="coarse_detune"/>&#013;\
                            <par value="'+var_["voice0_frequency_parameters_detune_type"]+'" name="detune_type"/>&#013;\
                            <par_bool value="'+var_["voice0_frequency_parameters_freq_envelope_enabled"]+'" name="freq_envelope_enabled"/>&#013;\
                            <par_bool value="'+var_["voice0_frequency_parameters_freq_lfo_enabled"]+'" name="freq_lfo_enabled"/>&#013;\
                          </FREQUENCY_PARAMETERS>&#013;\
                        </VOICE>&#013;\
                        <VOICE id="1">&#013;\
                          <par_bool value="no" name="enabled"/>&#013;\
                        </VOICE>&#013;\
                        <VOICE id="2">&#013;\
                          <par_bool value="no" name="enabled"/>&#013;\
                        </VOICE>&#013;\
                        <VOICE id="3">&#013;\
                          <par_bool value="no" name="enabled"/>&#013;\
                        </VOICE>&#013;\
                        <VOICE id="4">&#013;\
                          <par_bool value="no" name="enabled"/>&#013;\
                        </VOICE>&#013;\
                        <VOICE id="5">&#013;\
                          <par_bool value="no" name="enabled"/>&#013;\
                        </VOICE>&#013;\
                        <VOICE id="6">&#013;\
                          <par_bool value="no" name="enabled"/>&#013;\
                        </VOICE>&#013;\
                        <VOICE id="7">&#013;\
                          <par_bool value="no" name="enabled"/>&#013;\
                        </VOICE>&#013;\
                      </ADD_SYNTH_PARAMETERS>&#013;\
                      <par_bool value="no" name="sub_enabled"/>&#013;\
                      <par_bool value="no" name="pad_enabled"/>&#013;\
                      <PAD_SYNTH_PARAMETERS>&#013;\
                        <par_bool value="no" name="stereo"/>&#013;\
                        <par value="0" name="mode"/>&#013;\
                        <par value="500" name="bandwidth"/>&#013;\
                        <par value="0" name="bandwidth_scale"/>&#013;\
                        <HARMONIC_PROFILE>&#013;\
                          <par value="0" name="base_type"/>&#013;\
                          <par value="80" name="base_par1"/>&#013;\
                          <par value="0" name="frequency_multiplier"/>&#013;\
                          <par value="0" name="modulator_par1"/>&#013;\
                          <par value="30" name="modulator_frequency"/>&#013;\
                          <par value="127" name="width"/>&#013;\
                          <par value="0" name="amplitude_multiplier_type"/>&#013;\
                          <par value="0" name="amplitude_multiplier_mode"/>&#013;\
                          <par value="80" name="amplitude_multiplier_par1"/>&#013;\
                          <par value="64" name="amplitude_multiplier_par2"/>&#013;\
                          <par_bool value="yes" name="autoscale"/>&#013;\
                          <par value="0" name="one_half"/>&#013;\
                        </HARMONIC_PROFILE>&#013;\
                        <OSCIL>&#013;\
                          <par value="0" name="harmonic_mag_type"/>&#013;\
                            <par value="0" name="base_function"/>&#013;\
                            <par value="64" name="base_function_par"/>&#013;\
                            <par value="0" name="base_function_modulation"/>&#013;\
                            <par value="64" name="base_function_modulation_par1"/>&#013;\
                            <par value="64" name="base_function_modulation_par2"/>&#013;\
                            <par value="32" name="base_function_modulation_par3"/>&#013;\
                            <par value="0" name="modulation"/>&#013;\
                            <par value="64" name="modulation_par1"/>&#013;\
                            <par value="64" name="modulation_par2"/>&#013;\
                            <par value="32" name="modulation_par3"/>&#013;\
                            <par value="64" name="wave_shaping"/>&#013;\
                            <par value="0" name="wave_shaping_function"/>&#013;\
                            <par value="0" name="filter_type"/>&#013;\
                            <par value="64" name="filter_par1"/>&#013;\
                            <par value="64" name="filter_par2"/>&#013;\
                          <par value="0" name="filter_before_wave_shaping"/>&#013;\
                          <par value="0" name="spectrum_adjust_type"/>&#013;\
                          <par value="64" name="spectrum_adjust_par"/>&#013;\
                          <par value="127" name="rand"/>&#013;\
                          <par value="0" name="amp_rand_type"/>&#013;\
                          <par value="64" name="amp_rand_power"/>&#013;\
                          <par value="0" name="harmonic_shift"/>&#013;\
                          <par_bool value="no" name="harmonic_shift_first"/>&#013;\
                          <par value="0" name="adaptive_harmonics"/>&#013;\
                          <par value="128" name="adaptive_harmonics_base_frequency"/>&#013;\
                          <par value="100" name="adaptive_harmonics_power"/>&#013;\
                          <HARMONICS>&#013;\
                              <HARMONIC id="1">&#013;\
                                <par value="127" name="mag"/>&#013;\
                                <par value="64" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="2">&#013;\
                                <par value="127" name="mag"/>&#013;\
                                <par value="64" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="4">&#013;\
                                <par value="127" name="mag"/>&#013;\
                                <par value="64" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
							  <HARMONIC id="8">&#013;\
                                <par value="127" name="mag"/>&#013;\
                                <par value="64" name="phase"/>&#013;\
                              </HARMONIC>&#013;\
                            </HARMONICS>&#013;\
                        </OSCIL>&#013;\
                        <RESONANCE>&#013;\
                          <par_bool value="no" name="enabled"/>&#013;\
                        </RESONANCE>&#013;\
                        <HARMONIC_POSITION>&#013;\
                          <par value="0" name="type"/>&#013;\
                          <par value="64" name="parameter1"/>&#013;\
                          <par value="64" name="parameter2"/>&#013;\
                          <par value="0" name="parameter3"/>&#013;\
                        </HARMONIC_POSITION>&#013;\
                        <SAMPLE_QUALITY>&#013;\
                          <par value="3" name="samplesize"/>&#013;\
                          <par value="4" name="basenote"/>&#013;\
                          <par value="3" name="octaves"/>&#013;\
                          <par value="2" name="samples_per_octave"/>&#013;\
                        </SAMPLE_QUALITY>&#013;\
                        <AMPLITUDE_PARAMETERS>&#013;\
                          <par value="90" name="volume"/>&#013;\
                          <par value="64" name="panning"/>&#013;\
                          <par value="64" name="velocity_sensing"/>&#013;\
                          <par value="0" name="punch_strength"/>&#013;\
                          <par value="60" name="punch_time"/>&#013;\
                          <par value="64" name="punch_stretch"/>&#013;\
                          <par value="72" name="punch_velocity_sensing"/>&#013;\
                          <AMPLITUDE_ENVELOPE>&#013;\
                            <par_bool value="no" name="free_mode"/>&#013;\
                            <par value="4" name="env_points"/>&#013;\
                            <par value="2" name="env_sustain"/>&#013;\
                            <par value="64" name="env_stretch"/>&#013;\
                            <par_bool value="yes" name="forced_release"/>&#013;\
                            <par_bool value="no" name="linear_envelope"/>&#013;\
							<par value="0" name="A_dt"/>&#013;\
                            <par value="40" name="D_dt"/>&#013;\
                            <par value="25" name="R_dt"/>&#013;\
                            <par value="64" name="A_val"/>&#013;\
                            <par value="64" name="D_val"/>&#013;\
                            <par value="127" name="S_val"/>&#013;\
                            <par value="64" name="R_val"/>&#013;\
                          </AMPLITUDE_ENVELOPE>&#013;\
                          <AMPLITUDE_LFO>&#013;\
                            <par_real value="0.629921" name="freq"/>&#013;\
                            <par value="0" name="intensity"/>&#013;\
                            <par value="64" name="start_phase"/>&#013;\
                            <par value="0" name="lfo_type"/>&#013;\
                            <par value="0" name="randomness_amplitude"/>&#013;\
                            <par value="0" name="randomness_frequency"/>&#013;\
                            <par value="0" name="delay"/>&#013;\
                            <par value="64" name="stretch"/>&#013;\
                            <par_bool value="no" name="continous"/>&#013;\
                          </AMPLITUDE_LFO>&#013;\
                        </AMPLITUDE_PARAMETERS>&#013;\
                        <FREQUENCY_PARAMETERS>&#013;\
                          <par value="0" name="fixed_freq"/>&#013;\
                          <par value="0" name="fixed_freq_et"/>&#013;\
                          <par value="8192" name="detune"/>&#013;\
                          <par value="0" name="coarse_detune"/>&#013;\
                          <par value="1" name="detune_type"/>&#013;\
                          <FREQUENCY_ENVELOPE>&#013;\
                            <par_bool value="no" name="free_mode"/>&#013;\
                            <par value="3" name="env_points"/>&#013;\
                            <par value="1" name="env_sustain"/>&#013;\
                            <par value="0" name="env_stretch"/>&#013;\
                            <par_bool value="no" name="forced_release"/>&#013;\
                            <par_bool value="no" name="linear_envelope"/>&#013;\
                            <par value="50" name="A_dt"/>&#013;\
                            <par value="10" name="D_dt"/>&#013;\
                            <par value="60" name="R_dt"/>&#013;\
                            <par value="64" name="A_val"/>&#013;\
                            <par value="64" name="D_val"/>&#013;\
                            <par value="64" name="S_val"/>&#013;\
                            <par value="64" name="R_val"/>&#013;\
                          </FREQUENCY_ENVELOPE>&#013;\
                          <FREQUENCY_LFO>&#013;\
                            <par_real value="0.551181" name="freq"/>&#013;\
                            <par value="0" name="intensity"/>&#013;\
                            <par value="64" name="start_phase"/>&#013;\
                            <par value="0" name="lfo_type"/>&#013;\
                            <par value="0" name="randomness_amplitude"/>&#013;\
                            <par value="0" name="randomness_frequency"/>&#013;\
                            <par value="0" name="delay"/>&#013;\
                            <par value="64" name="stretch"/>&#013;\
                            <par_bool value="no" name="continous"/>&#013;\
                          </FREQUENCY_LFO>&#013;\
                        </FREQUENCY_PARAMETERS>&#013;\
                        <FILTER_PARAMETERS>&#013;\
                          <par value="64" name="velocity_sensing_amplitude"/>&#013;\
                          <par value="64" name="velocity_sensing"/>&#013;\
                          <FILTER>&#013;\
                            <par value="0" name="category"/>&#013;\
                            <par value="2" name="type"/>&#013;\
                            <par value="94" name="freq"/>&#013;\
                            <par value="40" name="q"/>&#013;\
                            <par value="0" name="stages"/>&#013;\
                            <par value="64" name="freq_track"/>&#013;\
                            <par value="64" name="gain"/>&#013;\
                          </FILTER>&#013;\
                          <FILTER_ENVELOPE>&#013;\
                            <par_bool value="no" name="free_mode"/>&#013;\
                            <par value="4" name="env_points"/>&#013;\
                            <par value="2" name="env_sustain"/>&#013;\
                            <par value="0" name="env_stretch"/>&#013;\
                            <par_bool value="yes" name="forced_release"/>&#013;\
                            <par_bool value="no" name="linear_envelope"/>&#013;\
                            <par value="40" name="A_dt"/>&#013;\
                            <par value="70" name="D_dt"/>&#013;\
                            <par value="60" name="R_dt"/>&#013;\
                            <par value="64" name="A_val"/>&#013;\
                            <par value="64" name="D_val"/>&#013;\
                            <par value="64" name="S_val"/>&#013;\
                            <par value="64" name="R_val"/>&#013;\
                          </FILTER_ENVELOPE>&#013;\
                          <FILTER_LFO>&#013;\
                            <par_real value="0.629921" name="freq"/>&#013;\
                            <par value="0" name="intensity"/>&#013;\
                            <par value="64" name="start_phase"/>&#013;\
                            <par value="0" name="lfo_type"/>&#013;\
                            <par value="0" name="randomness_amplitude"/>&#013;\
                            <par value="0" name="randomness_frequency"/>&#013;\
                            <par value="0" name="delay"/>&#013;\
                            <par value="64" name="stretch"/>&#013;\
                            <par_bool value="no" name="continous"/>&#013;\
                          </FILTER_LFO>&#013;\
                        </FILTER_PARAMETERS>&#013;\
                      </PAD_SYNTH_PARAMETERS>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="1">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="2">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="3">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="4">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="5">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="6">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="7">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="8">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="9">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="10">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="11">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="12">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="13">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="14">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                    <INSTRUMENT_KIT_ITEM id="15">&#013;\
                      <par_bool value="no" name="enabled"/>&#013;\
                    </INSTRUMENT_KIT_ITEM>&#013;\
                  </INSTRUMENT_KIT>&#013;\
                  <INSTRUMENT_EFFECTS>&#013;\
                    <INSTRUMENT_EFFECT id="0">&#013;\
                      <EFFECT>&#013;\
						<par value="'+var_["instrument_effects_1_type"]+'" name="type"/>&#013;\
                        <par value="'+var_["instrument_effects_1_preset"]+'" name="preset"/>&#013;\
                        <EFFECT_PARAMETERS>&#013;\
                            '+var_["instrument_effects_1_effect_parameters_par_no_0"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_1"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_2"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_3"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_4"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_5"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_6"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_7"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_8"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_9"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_10"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_11"]+'&#013;\
							'+var_["instrument_effects_1_effect_parameters_par_no_12"]+'&#013;\
                        </EFFECT_PARAMETERS>&#013;\
                      </EFFECT>&#013;\
                      <par value="0" name="route"/>&#013;\
                      <par_bool value="no" name="bypass"/>&#013;\
                    </INSTRUMENT_EFFECT>&#013;\
					<INSTRUMENT_EFFECT id="1">&#013;\
                      <EFFECT>&#013;\
						<par value="'+var_["instrument_effects_2_type"]+'" name="type"/>&#013;\
                        <par value="'+var_["instrument_effects_2_preset"]+'" name="preset"/>&#013;\
                        <EFFECT_PARAMETERS>&#013;\
                          '+var_["instrument_effects_2_effect_parameters_par_no_0"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_1"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_2"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_3"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_4"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_5"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_6"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_7"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_8"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_9"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_10"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_11"]+'&#013;\
							'+var_["instrument_effects_2_effect_parameters_par_no_12"]+'&#013;\
                        </EFFECT_PARAMETERS>&#013;\
                      </EFFECT>&#013;\
                      <par value="0" name="route"/>&#013;\
                      <par_bool value="no" name="bypass"/>&#013;\
                    </INSTRUMENT_EFFECT>&#013;\
                    <INSTRUMENT_EFFECT id="2">&#013;\
                      <EFFECT>&#013;\
                        <par value="0" name="type"/>&#013;\
                      </EFFECT>&#013;\
                      <par value="0" name="route"/>&#013;\
                      <par_bool value="no" name="bypass"/>&#013;\
                    </INSTRUMENT_EFFECT>&#013;\
                  </INSTRUMENT_EFFECTS>&#013;\
                </INSTRUMENT>&#013;\
                <CONTROLLER>&#013;\
                  <par value="100" name="pitchwheel_bendrange"/>&#013;\
                  <par_bool value="yes" name="expression_receive"/>&#013;\
                  <par value="64" name="panning_depth"/>&#013;\
                  <par value="64" name="filter_cutoff_depth"/>&#013;\
                  <par value="64" name="filter_q_depth"/>&#013;\
                  <par value="64" name="bandwidth_depth"/>&#013;\
                  <par value="80" name="mod_wheel_depth"/>&#013;\
                  <par_bool value="no" name="mod_wheel_exponential"/>&#013;\
                  <par_bool value="yes" name="fm_amp_receive"/>&#013;\
                  <par_bool value="yes" name="volume_receive"/>&#013;\
                  <par_bool value="yes" name="sustain_receive"/>&#013;\
                  <par_bool value="yes" name="portamento_receive"/>&#013;\
                  <par value="64" name="portamento_time"/>&#013;\
                  <par value="3" name="portamento_pitchthresh"/>&#013;\
                  <par value="1" name="portamento_pitchthreshtype"/>&#013;\
                  <par value="0" name="portamento_portamento"/>&#013;\
                  <par value="64" name="portamento_updowntimestretch"/>&#013;\
                  <par value="0" name="portamento_proportional"/>&#013;\
                  <par value="80" name="portamento_proprate"/>&#013;\
                  <par value="90" name="portamento_propdepth"/>&#013;\
                  <par value="64" name="resonance_center_depth"/>&#013;\
                  <par value="64" name="resonance_bandwidth_depth"/>&#013;\
                </CONTROLLER>&#013;\
              </PART>&#013;\
              <PART id="1">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="2">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="3">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="4">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="5">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="6">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="7">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="8">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="9">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="10">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="11">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="12">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="13">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="14">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <PART id="15">&#013;\
                <par_bool value="no" name="enabled"/>&#013;\
              </PART>&#013;\
              <SYSTEM_EFFECTS>&#013;\
                <SYSTEM_EFFECT id="0">&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                  <VOLUME id="0">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="1">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="2">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="3">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="4">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="5">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="6">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="7">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="8">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="9">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="10">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="11">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="12">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="13">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="14">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="15">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <SENDTO id="1">&#013;\
                    <par value="0" name="send_vol"/>&#013;\
                  </SENDTO>&#013;\
                  <SENDTO id="2">&#013;\
                    <par value="0" name="send_vol"/>&#013;\
                  </SENDTO>&#013;\
                  <SENDTO id="3">&#013;\
                    <par value="0" name="send_vol"/>&#013;\
                  </SENDTO>&#013;\
                </SYSTEM_EFFECT>&#013;\
                <SYSTEM_EFFECT id="1">&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                  <VOLUME id="0">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="1">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="2">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="3">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="4">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="5">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="6">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="7">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="8">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="9">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="10">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="11">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="12">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="13">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="14">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="15">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <SENDTO id="2">&#013;\
                    <par value="0" name="send_vol"/>&#013;\
                  </SENDTO>&#013;\
                  <SENDTO id="3">&#013;\
                    <par value="0" name="send_vol"/>&#013;\
                  </SENDTO>&#013;\
                </SYSTEM_EFFECT>&#013;\
                <SYSTEM_EFFECT id="2">&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                  <VOLUME id="0">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="1">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="2">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="3">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="4">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="5">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="6">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="7">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="8">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="9">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="10">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="11">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="12">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="13">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="14">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="15">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <SENDTO id="3">&#013;\
                    <par value="0" name="send_vol"/>&#013;\
                  </SENDTO>&#013;\
                </SYSTEM_EFFECT>&#013;\
                <SYSTEM_EFFECT id="3">&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                  <VOLUME id="0">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="1">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="2">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="3">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="4">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="5">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="6">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="7">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="8">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="9">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="10">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="11">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="12">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="13">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="14">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                  <VOLUME id="15">&#013;\
                    <par value="0" name="vol"/>&#013;\
                  </VOLUME>&#013;\
                </SYSTEM_EFFECT>&#013;\
              </SYSTEM_EFFECTS>&#013;\
              <INSERTION_EFFECTS>&#013;\
                <INSERTION_EFFECT id="0">&#013;\
                  <par value="-1" name="part"/>&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                </INSERTION_EFFECT>&#013;\
                <INSERTION_EFFECT id="1">&#013;\
                  <par value="-1" name="part"/>&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                </INSERTION_EFFECT>&#013;\
                <INSERTION_EFFECT id="2">&#013;\
                  <par value="-1" name="part"/>&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                </INSERTION_EFFECT>&#013;\
                <INSERTION_EFFECT id="3">&#013;\
                  <par value="-1" name="part"/>&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                </INSERTION_EFFECT>&#013;\
                <INSERTION_EFFECT id="4">&#013;\
                  <par value="-1" name="part"/>&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                </INSERTION_EFFECT>&#013;\
                <INSERTION_EFFECT id="5">&#013;\
                  <par value="-1" name="part"/>&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                </INSERTION_EFFECT>&#013;\
                <INSERTION_EFFECT id="6">&#013;\
                  <par value="-1" name="part"/>&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                </INSERTION_EFFECT>&#013;\
                <INSERTION_EFFECT id="7">&#013;\
                  <par value="-1" name="part"/>&#013;\
                  <EFFECT>&#013;\
                    <par value="0" name="type"/>&#013;\
                  </EFFECT>&#013;\
                </INSERTION_EFFECT>&#013;\
              </INSERTION_EFFECTS>&#013;\
            </MASTER>&#013;\
          </ZynAddSubFX-data>&#013;\
        </zynaddsubfx>&#013;\
      </instrument>&#013;\
      <eldata fres="0.5" ftype="0" fcut="14000" fwet="0">&#013;\
        <elvol lspd_denominator="4" sustain="0.5" pdel="0" userwavefile="" dec="0.5" lamt="0" syncmode="0" latt="0" rel="0.1" amt="0" x100="0" att="0" lpdel="0" hold="0.5" lshp="0" lspd="0.1" ctlenvamt="0" lspd_numerator="4"/>&#013;\
        <elcut lspd_denominator="4" sustain="0.5" pdel="0" userwavefile="" dec="0.5" lamt="0" syncmode="0" latt="0" rel="0.1" amt="0" x100="0" att="0" lpdel="0" hold="0.5" lshp="0" lspd="0.1" ctlenvamt="0" lspd_numerator="4"/>&#013;\
        <elres lspd_denominator="4" sustain="0.5" pdel="0" userwavefile="" dec="0.5" lamt="0" syncmode="0" latt="0" rel="0.1" amt="0" x100="0" att="0" lpdel="0" hold="0.5" lshp="0" lspd="0.1" ctlenvamt="0" lspd_numerator="4"/>&#013;\
      </eldata>&#013;\
      <chordcreator chord="0" chordrange="1" chord-enabled="0"/>&#013;\
      <arpeggiator arptime="100" arprange="1" arptime_denominator="4" syncmode="0" arpmode="0" arp-enabled="0" arp="0" arptime_numerator="4" arpdir="0" arpgate="100"/>&#013;\
      <midiport inputcontroller="0" fixedoutputvelocity="-1" inputchannel="0" outputcontroller="0" writable="0" outputchannel="1" fixedinputvelocity="-1" fixedoutputnote="-1" outputprogram="1" basevelocity="63" readable="0"/>&#013;\
      <fxchain numofeffects="0" enabled="0">&#013;\
      </fxchain>&#013;\
    </instrumenttrack>&#013;\
  </instrumenttracksettings>&#013;\
</lmms-project>&#013;\
';	

	//Used to save the generated file using filesaver.js
	var code = document.getElementById('code').value;
	var blob = new Blob([code], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "Randomized.xpf");
}




