let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

var rectangle = function(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dir = 0;
};


rectangle.prototype.move = function(dx, dy){
    this.x += dx;
    this.y += dy;
};

rectangle.prototype.draw = function(){
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
};

var circle = function(x, y, radius, color){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
}

circle.prototype.draw = function(){
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
	ctx.lineWidth = 3;
	ctx.strokeStyle = this.color;
	ctx.stroke();
}

function drawNoose(){
	var noose = new rectangle(210, 10, 10, "#000000");
}

var head = new circle(200, 120, 40, "#FF0000");
head.draw();
var body = new rectangle();
var leftArm = new rectangle();
var rightArm = new rectangle();
var leftLeg = new rectangle();
var rightLieg = new rectangle();

