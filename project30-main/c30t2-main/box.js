class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        if (this.body.speed < 3) {
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 25;
            tint(255, this.visibility);
            //rect(pos.x, pos.y, this.width, this.height);
            pop();

        }
        
    }
     got()
    {
        if(this.visibility<0 &&this.visibility>-105)
            score++;
    }
}