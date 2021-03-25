class Monster{

    constructor(x,y,r){
    var options={
    frictionAir:0.3,
    density:5

    }
    this.y=y;
    this.x=x;
    this.r=r;
    this.image=loadImage("monster1.png");
    this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y-100);
    imageMode(CENTER);
    fill("white");
    image(this.image,0,0,this.r,this.r);
    pop();
    
    
    
    
    
    
    }
    
    
    
    
    
    }