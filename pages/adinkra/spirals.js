let initialAngle;
let n; //Number of segments
let a; //Size
let coil; //'Coiliness' of the log spiral
let theta;
let radius;
let x, y; //Coordinates
let ctx, canvasWidth, canvasCenter; //Canvas

let canvas = document.querySelector("#adinkraSpiral");
let spiralAnswer = document.querySelector("#spirals-answer");
let coilInput = document.querySelector("#coilVal");
let cAlert = document.querySelector("#spierr");
let spiralBtn = document.querySelector(".spiralBtn");

function initCanvas() {
	ctx = canvas.getContext("2d");
	canvasWidth = canvas.width;
	canvasCenter = canvasWidth / 2;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvasWidth, canvasWidth); // cleaning canvas
}

function createLogSpiral() {
	initialAngle = Math.PI / 180;
	n = 90;
	a = 2.0;

	coil = coilInput.value;
	coil = Number(coil);

	let size = 2 * (60 / Math.exp(coil * ((720 * Math.PI) / 180)));

	if (coil < 0.1 || coil > 2.1) {
		cAlert.hidden = false;
		return;
	}

	cAlert.hidden = true;

	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvasWidth, canvasWidth);
	ctx.strokeStyle = "darkblue";
	ctx.lineWidth = 5;

	// *** The Logarithmic Spiral ***
	ctx.beginPath();
	for (var i = 0; i < n; i++) {
		theta = initialAngle * i * 10;
		radius = size * Math.exp(coil * theta);
		x = radius * Math.cos(theta) + canvasCenter;
		y = radius * Math.sin(theta) + canvasCenter;
		ctx.lineTo(x, y);
	}

	ctx.stroke();
}

spiralAnswer.addEventListener("click", () => {
	spiralAnswer.innerHTML = "Log spirals are common in Adinkra because they are common in Nature";
});

// coilInput.addEventListener("input", () => {
// 	createLogSpiral();
// });

spiralBtn.addEventListener("click", () => {
	createLogSpiral();
	if (spiralBtn.classList.contains("notransition")) return;
	spiralBtn.classList.add("notransition");
});

initCanvas();
createLogSpiral();
