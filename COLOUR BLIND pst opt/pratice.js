// console.log("hhds")









// // var x = 100;
// // var y = 100;
// // function drawBall(x,y){
// //     ctx.beginPath();
// //     ctx.arc(x,y,25,0,2 * Math.PI);
  
 
// //     ctx.stroke();
// // }


// // function board (){

// //     for (var i = 0; i < 3;){
       
// //         drawBall(x,y);
// //         x=x+50;
// //         i++;
// //     }
// //     x=100;
// //     for (var i = 0; i < 3;){
       
// //         drawBall(x,150);
// //         x=x+50;
// //         i++;
// //     }
// //     x=100;
// //     for (var i = 0; i < 3;){
       
// //         drawBall(x,200);
// //         x=x+50;
// //         i++;
// //     }

    
  
// // }

// // board(x,y);


//     var x=100;
//    var  y=100;

// var canvasObject = canvas.getContext("2d");
// var numberOfBalls = 9;
// class Ball {
//     constructor(pos) {
//       this.pos = pos;
//       this.radius = 25;
      
//     }
  
//     drawBall() {
  
//       canvasObject.beginPath();
//       canvasObject.arc(x, y, this.radius, 0, 2 * Math.PI);
//       canvasObject.fillStyle = this.color;
//       canvasObject.fill();
//       canvasObject.closePath();
//     }

  
 
//   }
//   var balls = [];
// function drawrow(){
//   for (let index = 0; index < 3; index++) {
//     balls.push(new Ball(x,y));
//     balls[index].drawBall();
//     x=x+50;
//   }
// }



// // for (let index = 0; index < 3; index++) {
// //     drawrow();
// //     y=y+50
// //   }
// function drawboard(){
//     x=100;
//     drawrow();
//     y=y+50;
//     x=100;
//     drawrow();
//     x=100;
//     y=y+50;
//     drawrow();
// }

// drawboard();



// function onclick(){
//   onclick
// }
// var ctx = ctx.getContext("2d");

class circles{
  constructor(xpoint,ypoint,radius,color){
    this.xpoint=xpoint;
    this.ypoint=ypoint;
    this.radius=radius;
    this.color=color;

    
  }


    
  draw(ctx){
    
    ctx.beginPath();
    ctx.arc(this.xpoint,this.ypoint,this.radius,0,Math.PI*2,false);
    ctx.strokeStyle="black";
    ctx.linewidth = 3;
    ctx.stroke();
    ctx.closePath();
  }

 
}

let circle= new circles(100,100,25,"red");
circle.draw(ctx);


  

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function drwaboard(ctx){
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 100, 25, 0, 2 * Math.PI);
  ctx.stroke();

}

drwaboard();