class Particle{

    constructor(x,y){

        var options = {
            restitution:0.4
        }
        //this.x=body.position.x;
        //this.y=body.position.y
        //this.radius=radius;
        this.body = Bodies.circle(x,y,5/2,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        //this.image = loadImage("sprites/paper1.png");
        //this.x= body.position.x;
        //this.y=body.position.y;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y ); 
      
      noStroke();
      //strokeWeight(3);
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y, 5,5);
      pop();
    }
}
