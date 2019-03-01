var song;

function preload() {
	// Heart of Nowhere - Air Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 3.0 License http://creativecommons.org/licenses/by/3.0/
	song = loadSound('assets/Heart-of-Nowhere.mp3');
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	// song loaded during preload(), ready to play in setup()
	song.play();
}

function draw() {

	// TODO: make this a gradiation
	background(149, 85, 13);

	// kamucha mama
	// TODO: make this a gradiation
	// TODO: animation starts at top and slowly sinks down
	noStroke(); // no outline
	fill(202, 117, 24); // yellow
	ellipse(windowWidth / 2, windowHeight / 1, windowWidth / 1.3, windowHeight / 1.3);

	// scoby
	// TODO: make this a gradiation
	noStroke(); // no outline
	fill(255, 100, 20); // yellow
	ellipse(mouseX, mouseY, 50, 50);

	// border
	strokeWeight(50);
	stroke(101, 58, 7);
	noFill();
	rect(0, 0, windowWidth, windowHeight);
}