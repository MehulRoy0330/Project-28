class Launcher{
    constructor(bodyA, PointB){
        var options={
            bodyA: bodyA,
            pointB: PointB,
            stiffness: 0.04,
            length: 10
        }
        this.PointB=PointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly() {
        this.launcher.bodyA=null;
    }

    attach(bodyA){
        this.launcher.bodyA=bodyA;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.PointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}