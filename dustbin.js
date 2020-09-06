class Dustbin{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("imgs/heo.png");
    }
    display(){
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        imageMode("CENTER");
        image(this.image, 0, 0, 50, 100);
    }
}