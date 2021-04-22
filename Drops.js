class Drops{
    constructor(x,y,radius){

        var options = {
            stiffness: 0.04,
            length: 10
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x, y,radius, options);
        this.trajectory=[];
        this.Drops = Bodies.circle(x,y,5,options);
        this.radius = 5; 
        World.add(world, this.body);
    }

    display(){

        if(this.body.velocity.x > 10 && this.body.position.x > 1000){
            var position = [this.body.position.x, this.body.position.y]; 
            this.trajectory.push(position); 
          }
         
          var maxDrops=100;
          for(var i=0; i<maxDrops; i++){
            Drops.push(new createDrop(random(0,400), random(0,400)));
          }
          
          function createDrop(){
              ellipse(this.Drops.position.x, this.Drops.position.y);

          }
    }
}