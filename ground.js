class ground{
    constructor(x, y, width, height){
        var options = {
            isStatic : true
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);    
    }
    display(){
        fill("purple");
        var pos = this.body.position;
        var angle = this.body.angle;
        rect(pos.x, pos.y, this.width, this.height);
    }
}