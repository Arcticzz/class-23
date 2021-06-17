class Canon {
    constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    }
    display(){
        push()
        translate(this.x, this.y)
        rotate(this.angle)
        fill("green")
        rect(-10, -20, this.width, this.height)
        pop()
        arc(this.x -40, this.y +80, 180, 220, PI,TWO_PI)
        noFill
    }
}