class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
    image(this.sling1,200,26);
     image(this.sling2,169.4,25.7);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(6);
            stroke(81,38,14);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
image(this.sling3,pointA.x-30,pointA.y-10,10,20);
        }
        pop();
     
    }
    
}