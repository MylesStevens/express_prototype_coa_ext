// Page level data.
var page;

// Page initialisation
function initialise(data) {
	try {
		page = JSON.parse(JSON.stringify(data));

		execute();

	} catch(e) {
		alert(e.message);
	}
}

// This is now deprecated.
function init() {
	try {
		var data = {
			show: ["q1","q5"],
			hide: ["q2","q3","q4","q6","q7","q8"],
			questions: [
				{id: "q1", type: "text", active: "true", answers: [
						{id: "q1_a1", value: "Diabetes", show: ["q2"], hide: []}
					]
				}, 
				{id: "q2", type: "text", active: "true", answers: [
						{id: "q2_a1", value: "Epilepsy", show: ["q3"], hide: []}
					]
				}, 
				{id: "q3", type: "text", active: "false", answers: [
						{id: "q3_a1", value: "", show: ["q4"], hide: []}
					]
				}, 
				{id: "q4", type: "text", active: "false", answers: [
						{id: "q4_a1", value: "", show: [], hide: []}
					]
				}, 
				{id: "q5", type: "radio", active: "false", answers: [
						{id: "q5_a1", value: "", show: ["q6"], hide: []},
						{id: "q5_a2", value: "", show: ["q7"], hide: ["q6"]}
					]
				},
				{id: "q6", type: "checkbox", active: "false", answers: [
						{id: "q6_a1", value: "car", show: ["q7"], hide: ["q8"]},
						{id: "q6_a2", value: "", show: ["q8"], hide: ["q7"]},
						{id: "q6_a3", value: "trike", show: [], hide: []}
					]
				},
				{id: "q7", type: "", active: "false", answers: []},
				{id: "q8", type: "", active: "false", answers: []}
			]
		};

		page = JSON.parse(JSON.stringify(data));

		execute();

	} catch(e) {
		alert(e.message);
	}
}

// Page instruction
function execute() {
	// Show visible elements from the initial setup.
	for(var i=0; i < page.show.length; i++) {
		show(page.show[i]);
	}
	// Hide hidden elements from the initial setup.
	for(var i=0; i < page.hide.length; i++) {
		hide(page.hide[i]);
	}
	
	// Pre-populate any answers we have already given, as
	// the customer may have already filled in previously.
	for(var q=0; q < page.questions.length; q++) {
		var question = page.questions[q];

		// Pre-populate any answers we have already been
		// given by the customer, and are still relevant.
		for(var a=0; a < question.answers.length; a++) {
			var answer = question.answers[a];
			if(answer.value.length > 0) {
				eval("set_"+question.type+"(answer)");
			}
		}

		// If we have already answered questions, then
		// we should check if they were relevant and show.
		if(question.active == "true") {
			show(question.id);
		}
	}
}

// Page interaction
function answer(element) {
	var items = element.id.split("_");
	var question = items[0];
	var answer = items[1];
	var extend = (items.length == 3) ? items[2] : null;

	var lookup = (question+'_'+answer);

	for(var i=0; i < page.questions.length; i++) {
		if(page.questions[i].id == question) {

			// Are we using an dual-event element (button and text box)?
			if(extend == null) {
				eval("click_"+page.questions[i].type+"(element)");
			} else {
				var proxy = document.getElementById(lookup);
				eval("click_"+page.questions[i].type+"(proxy)");
			}

			for(var x=0; x < page.questions[i].answers.length; x++) {
				if(page.questions[i].answers[x].id == lookup) {

					page.state = page.questions[i].answers[x].decision;

					for(var s=0; s < page.questions[i].answers[x].show.length; s++) {
						show(page.questions[i].answers[x].show[s]);
					}
					for(var h=0; h < page.questions[i].answers[x].hide.length; h++) {
						hide(page.questions[i].answers[x].hide[h]);
					}
				}
			}
		}
	}
}

function decision(element) {
	for(var i=0; i < page.decisions.length; i++) {
		var decision = page.decisions[i];
		if(decision.id == page.state) {
			if((decision.message.length > 0) && (decision.redirect.length > 0)) {
				if(confirm('Decision Point: ['+decision.message+']')) {
					window.location.href = decision.redirect;
				}
			} else if(decision.message.length > 0) {
				alert('Decision Point: ['+decision.message+']');
			} else {
				if(decision.redirect.length > 0) {
					window.location.href = decision.redirect;
				}
			}
		}
	}
}

// JSON helper functions
function find(answer) {
	for(var q=0; q < page.questions.length; q++) {
		var question = page.questions[q];
		for(var a=0; a < question.answers.length; a++) {
			if(question.answers[a].id == answer.id) {
				return [question, answer];
			}
		}
	}
	return null;
}

function click_text(element) {
	//alert('Click Text: '+element.id+', Checked: '+element.checked);
}

function set_text(answer) {
	document.getElementById(answer.id).value = answer.value;
}

function click_radio(element) {
	//alert('Click Radio: '+element.id+', Checked: '+element.checked);
}

function set_radio(answer) {
	var element = document.getElementById(answer.id);
	element.value = answer.value;
	element.checked = true;
}

function click_checkbox(element) {
	//alert('Click Checkbox: '+element.id+', Checked: '+element.checked);
}

function set_checkbox(answer) {
	var element = document.getElementById(answer.id);
	element.value = answer.value;
	element.checked = true;
}

