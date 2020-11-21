class Block{
    constructor(x, y, width, height,) {
        var options = {
          restitution :0.4,
          friction :1.2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2); 
        stroke("blue")
        fill("red");
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        pop();
        }
        //console.log(this.body.speed);
      }

    
}