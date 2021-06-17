class Tower{
    constructor(x,y,width,height){
        var op={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,op)
        this.width=width;
        this.height=height;
        this.img = loadImage("tower.png")
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img,0,0,this.width,this.height);
        pop()
    }
}