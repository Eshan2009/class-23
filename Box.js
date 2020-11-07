class Box {

    constructor(x,y,width,height) {
    
        var options = {
            restitution : 1,
            density : 2.5,
            friction : 0.1
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }

    display() {

    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
       

    }





}