window.onload = init;

function init() {
	solveQuadratic();
	document.querySelector("#aValue").oninput = solveQuadratic;
	document.querySelector("#bValue").oninput = solveQuadratic;
	document.querySelector("#cValue").oninput = solveQuadratic;
}
function solveQuadratic() {
	var a = document.querySelector("#aValue").value;
	var b = document.querySelector("#bValue").value;
	var c = document.querySelector("#cValue").value;

	var delta = Math.pow(b, 2) - 4 * a * c;
	console.log('delta: ' + delta);

	var x1, x2;
	if (delta > 0) {
		x1 = (-b - Math.sqrt(delta)) / (2*a);
		x2 = (-b + Math.sqrt(delta)) / (2*a);
	}
	else if (delta === 0) {
		x1 = -b / (2*a)
		x2 = x1;
	}
	else {
		console.log('no solution');
	}
	//console.log('x = ' + x1 + ', x = ' + x2);

	var resultsSection = document.querySelector("#results");
	resultsSection.innerHTML = "";
	if (x1 !== x2) resultsSection.innerHTML += '<label>x = ' + x1 + '</label> <label>x = ' + x2;
	else resultsSection.innerHTML += '<label>x = ' + x1;

	plotQuadraticFunction(a, b, c);

	var equationLabel = document.querySelector("#exampleEquation");
	equationLabel.innerHTML = "";
	equationLabel.innerHTML += a + "x^2+" + b + "x+" + c;
}

function plotQuadraticFunction(a, b, c) {
	var parameters = {
		target: '#functionPlot',
		data: [{
			fn: a + 'x^2+' + b + 'x+' + c,
			//fn: 'x^2',
			color: 'green'
		}],
		grid: true,
		yAxis: {domain: [-10, 10]},
		xAxis: {domain: [-10, 10]}
	};
	functionPlot(parameters);
}