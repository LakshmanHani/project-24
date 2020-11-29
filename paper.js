class Paper{
    constructor(x,y,radius){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.3,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius)
        this.radius = radius;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        PushManager();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        rect(0,0,this.radius)
    }
}