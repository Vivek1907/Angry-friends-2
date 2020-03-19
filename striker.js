class Striker extends ParentClass{
    constructor(x,y){
       super(x,y,50,50);
       this.image = loadImage("2.png.png");
       this.position;
       this.trajectory = [];
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,200,100);
        this.position = {
            'x':this.body.position.x,
            'y':this.body.position.y
        }
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
         
      
          for(var i=0; i<this.trajectory.length; i++){
           fill(255);
           ellipse(this.trajectory[i][0], this.trajectory[i][1],20,20);
          }
    }
}