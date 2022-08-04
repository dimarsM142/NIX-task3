function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function AddSquare(){
        this.square = document.getElementById('square');
        if (this.square.getContext) {
            this.square.getContext('2d').fillRect(getRandomInt(0, 250),getRandomInt(0,100),50,50);
        }
}

function AddTriangle(){
    this.triangle = document.getElementById('triangle');
    if (this.triangle.getContext) {
        this.ctx = this.triangle.getContext('2d');
        this.ctx.beginPath();
        this.ctx.moveTo(150,100);
        this.ctx.lineTo(200,50);
        this.ctx.lineTo(200,100);
        this.ctx.fill();
    }

}

let fistsquare = new AddSquare();
let secondsquare = new AddSquare();
let thirdsquare = new AddSquare();
let triangle = new AddTriangle();
