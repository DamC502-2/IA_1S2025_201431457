// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
	if (state=="DIRTY") return "CLEAN";
	else if (location=="A") return "RIGHT";
	else if (location=="B") return "LEFT";
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function  test(states){

	var location = states[0];
	var state = states[0] == "A" ? states[1] : states[2];
	var action_result = reflex_agent(location, state);
	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
	if (states[1] == "CLEAN" && states[2] == "CLEAN"){ return; }

	if (action_result == "CLEAN"){
		if (location == "A") states[1] = "CLEAN";
		else if (location == "B") states[2] = "CLEAN";
	}
	else if (action_result == "RIGHT") states[0] = "B";
	else if (action_result == "LEFT") states[0] = "A";

	sleep(500);
	test(states);
}

var states = ["A","DIRTY","DIRTY"];
document.getElementById("log").innerHTML+="<br> <strong>".concat("Inicio: " ).concat("  [\"A\",\"DIRTY\",\"DIRTY\"] ").concat("</strong>");
test(states);
states = ["B", "DIRTY","DIRTY"];
document.getElementById("log").innerHTML+="<br> <strong>".concat("Inicio: " ).concat("  ['B', \"DIRTY\",\"DIRTY\"] ").concat("</strong>");
test(states);
states = ["A","CLEAN","DIRTY"];
document.getElementById("log").innerHTML+="<br> <strong>".concat("Inicio: " ).concat("  ['A',\"CLEAN\",\"DIRTY\"]").concat("</strong>");
test(states);
states = ["B","CLEAN","DIRTY"];
document.getElementById("log").innerHTML+="<br> <strong>".concat("Inicio: " ).concat("  ['B',\"CLEAN\",\"DIRTY\"]").concat("</strong>");
test(states);
states = ["A","DIRTY","CLEAN"];
document.getElementById("log").innerHTML+="<br> <strong>".concat("Inicio: " ).concat("  ['A',\"DIRTY\",\"CLEAN\"]").concat("</strong>");
test(states);
states = ["B","DIRTY","CLEAN"];
document.getElementById("log").innerHTML+="<br><strong>".concat("Inicio: " ).concat("  ['B',\"DIRTY\",\"CLEAN\"]").concat("</strong>");
test(states);