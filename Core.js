
var incrementer = 0.01;
function setup(){
	createCanvas(720, 480);

}


function draw(){


	let yoff = 0;
	loadPixels();

	for(let x = 0; x < width; x++){
		let xoff = 0;
		for(let y = 0; y < height; y++){
			let i = (x + y * width) * 4;
			let r = noise(xoff, yoff) * 255;
			pixels[i] = r;
			pixels[i+1] = r;
			pixels[i+2] = r;
			pixels[i+3] = 255;
			xoff+= 0.01;
		}
		yoff+= 0.01;
	}


	updatePixels();

}
