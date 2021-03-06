class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(100, 50, 52.5, options);
        this.radius = 25;
        this.image = loadImage("imgs/ooga.png");
        World.add(world, this.body);
    }
    display(){
        
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
       
    }
}