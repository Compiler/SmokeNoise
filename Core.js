

function setup(){
	createCanvas(720, 480);

}


function draw(){

	background(50);
	stroke(255);
	noFill();
	beginShape();
	var xoff = 0;
	for(let x = 0; x < width; x++){
		stroke(255);
		vertex(x, noise(xoff+=0.01) * height);
	}
	endShape();

}
