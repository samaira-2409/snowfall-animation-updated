class Snow{
    constructor(x,y,r){
        var options={
           'friction':0,
           'density':0.5,
           'isStatic':false
        }
        this.x = x;
        this.y = y;
        this.r = r/2;
        
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage('snow5.webp');
        //this.image.scale = 0.2;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}