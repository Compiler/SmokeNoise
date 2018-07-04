
var incrementer = 0.01;
function setup(){
	createCanvas(720, 480);

}


function draw(){
	loadPixels();

	for(let x = 0; x < width; x++){
		for(let y = 0; y < height; y++){
			let i = (x + y * width) * 4;
			let r = random(255);
			pixels[i] = r;
			pixels[i+1] = r;
			pixels[i+2] = r;
			pixels[i+3] = 255;
		}
	}


	updatePixels();

}
