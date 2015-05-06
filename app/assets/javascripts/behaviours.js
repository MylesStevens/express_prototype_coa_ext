// Page level data.
var page;

// Page initialisation
function initialise() {
	try {
		var data = {
			show: ["q2"],
			hide: ["q1","q3","q4","q5"],
			questions: [
				{id: "q1", type: "text", answers: []}, 
				{id: "q2", type: "radio", answers: [
						{id: "q2_a1", value: "Y", show: ["q4","q5"], hide: ["q3"]},
						{id: "q2_a2", value: "N", show: ["q3"], hide: ["q4","q5"]}
					]
				},
				{id: "q3", type: "checkbox", answers: [
						{id: "q3_a1", value: "1", show: ["q1","q2"], hide: ["q4","q5"]},
						{id: "q3_a2", value: "2", show: ["q4","q5"], hide: ["q1","q2"]},
						{id: "q3_a3", value: "3", show: ["q1","q5"], hide: ["q2","q4"]}
					]
				},
				{id: "q4", type: "", answers: []},
				{id: "q5", type: "", answers: []}
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
	for(var i=0; i < page.show.length; i++) {
		show(document.getElementById(page.show[i]+'_div'));
	}
	for(var i=0; i < page.hide.length; i++) {
		hide(document.getElementById(page.hide[i]+'_div'));
	}
}

// Page interaction
function answer(element) {
	var items = element.id.split("_");
	var question = items[0];
	var answer = items[1];

	for(var i=0; i < page.questions.length; i++) {
		if(page.questions[i].id == question) {

			eval(page.questions[i].type+"()");

			for(var x=0; x < page.questions[i].answers.length; x++) {
				if(page.questions[i].answers[x].id == element.id) {
					for(var s=0; s < page.questions[i].answers[x].show.length; s++) {
						show(document.getElementById(page.questions[i].answers[x].show[s]+"_div"));
					}
					for(var h=0; h < page.questions[i].answers[x].hide.length; h++) {
						hide(document.getElementById(page.questions[i].answers[x].hide[h]+"_div"));
					}
				}
			}
		}
	}
}

function radio() {
	//alert('This is a RADIO button!');
}

function checkbox() {
	//alert('This is a CHECKBOX button!');
}

// HTML helper functions
function show(element) {
	element.style.display = 'block';
}

function hide(element) {
	element.style.display = 'none';
}