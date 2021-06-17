class Ground {
    constructor(x,y,w,h){
        var op = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,op)
        this.width = w
        this.height = h
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("brown")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}