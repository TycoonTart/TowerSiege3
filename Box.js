class Box{
  constructor(x,y,width,height){
    var options={
      restitution:0.5,
      friction:1,
      density:0.5,
      isStatic:false,
     }
     this.x=x
     this.y=y
     this.width=width
     this.height=height
     this.body=Bodies.rectangle(x,y,width,height,options)
     World.add(world,this.body);
}
display(){
var pos=this.body.position;


  
  if(this.body.speed<3){
    rect(this.body.position.x , this.body.position.y, this.width,this.height);
  }
  else{
  World.remove(world,this.body)
}
if(this.body.speed>3){
  score=score+1
}

}
}


