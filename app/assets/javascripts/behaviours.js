// Page level data.
var page;

// Page initialisation
function initialise() {
	try {
		var data = {
			show: ["q1","q5"],
			hide: ["q2","q3","q4","q6","q7","q8"],
			questions: [
				{id: "q1", type: "text", active: "false", answers: [
						{id: "q1_a1", value: "Diabetes", show: ["q2"], hide: []}
					]
				}, 
				{id: "q2", type: "text", active: "false", answers: [
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
						{id: "q6_a1", value: "car", show: [], hide: []},
						{id: "q6_a2", value: "", show: [], hide: []},
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
		show(document.getElementById(page.show[i]));
	}
	// Hide hidden elements from the initial setup.
	for(var i=0; i < page.hide.length; i++) {
		hide(document.getElementById(page.hide[i]));
	}
	// Pre-populate any answers we have already given.
	for(var q=0; q < page.questions.length; q++) {
		var question = page.questions[q];
		for(var a=0; a < question.answers.length; a++) {
			var answer = question.answers[a];
			if(answer.value.length > 0) {
				eval("set_"+question.type+"(answer)");
			}
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

			if(extend == null) {
				eval(page.questions[i].type+"(element)");
			} else {
				var proxy = document.getElementById(lookup);
				eval(page.questions[i].type+"(proxy)");
			}

			for(var x=0; x < page.questions[i].answers.length; x++) {
				if(page.questions[i].answers[x].id == lookup) {
					for(var s=0; s < page.questions[i].answers[x].show.length; s++) {
						show(document.getElementById(page.questions[i].answers[x].show[s]));
					}
					for(var h=0; h < page.questions[i].answers[x].hide.length; h++) {
						hide(document.getElementById(page.questions[i].answers[x].hide[h]));
					}
				}
			}
		}
	}
}

function text(element) {
	//alert('Input Text: '+element.value);
}

function set_text(answer) {
	document.getElementById(answer.id).value = answer.value;
}

function radio(element) {
	//alert('Radio Button: '+element.id);
}

function set_radio(answer) {
	var element = document.getElementById(answer.id);
	element.value = answer.value;
	element.checked = true;
}

function checkbox(element) {
	//alert('Checkbox Button: '+element.id);
}

function set_checkbox(answer) {
	var element = document.getElementById(answer.id);
	element.value = answer.value;
	element.checked = true;
}

// HTML helper functions
function show(element) {
	element.style.display = 'block';
}

function hide(element) {
	element.style.display = 'none';
}