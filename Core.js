
var incrementer = 0.1;

let scale = 20;
let cols, rows;


let frames;

function setup(){
	createCanvas(720, 480);
	cols = floor(width / scale);
	rows = floor(height / scale);

	frames = createP('');
}


function draw(){


	let yoff = 0;
	for(let y = 0; y < rows; y++){
		let xoff = 0;
		for(let x = 0; x < cols; x++){

			let i = (x + y * width) * 4;
			let r = noise(xoff, yoff) * 255;

			fill(r);
			rect(x * scale, y * scale, scale, scale);


			xoff+= 0.01;
		}
		yoff+= 0.01;
	}

	frames.html(floor(frameRate()));


}
