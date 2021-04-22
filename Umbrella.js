class Umbrella{
    constructor(x, y){

        var options = {
            stiffness: 0.04,
            length: 10,
            isStatic: true
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x, y, options);
        this.image=loadImage("umbrella.jpg");
        World.add(world, this.body);
    }

    display(){
       
       var pos=this.body.position;
       push();
       translate(pos.x, pos.y);
       ImageMode(CENTER);
       pop();
    }
    
};