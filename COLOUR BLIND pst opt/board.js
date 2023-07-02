console.log("hhihih")

   var circl_color="black";

   
    var life = 3;
    var width= 400;
    var height = 400;
    var level = 0;
var points = 0;
    function gamespace(){
        titte();
        
        }
let time = 5;    
var level = 0;


var interval = 600;
var timeleft = 10;
function count(){
    
countdown = setInterval(function count(){
  if(timeleft <= 0){
    clearInterval(countdown);
    Alert.render("GAME OVER!");
               
  } else {
    document.getElementById("countdown").innerHTML = " TIME:"+timeleft ;
  }
  timeleft -= 1;
},  interval = 600);
}

var text_color = "#FFFFFF";
    function titte(){

        var c = canvas.getContext("2d");
  
      
        c.fillStyle="#FFFFFF";
      c.font="20px Verdana";

      c.textAlign = "center";
  
      c.fillText("LIFE",(canvas.width-350), (canvas.height-350));
    
      c.fillText(life, (canvas.width-280), (canvas.height-350));
     
      c.fillText("SCORE",(canvas.width-230), (canvas.height-100));
      c.fillText(points, (canvas.width-130), (canvas.height-100));
    
      c.fillText("LEVEL",(canvas.width-130), (canvas.height-350));
      c.fillText(level, (canvas.width-30), (canvas.height-350));
        console.log(text_color);
        
       
        }



        function CustomAlert(){
            this.render = function(dialog){
                var winW = window.innerWidth;
                var winH = window.innerHeight;
                var dialogoverlay = document.getElementById('dialogoverlay');
                var dialogbox = document.getElementById('dialogbox');
                dialogoverlay.style.display = "block";
                dialogoverlay.style.height = winH+"px";
                dialogbox.style.left = (winW/2) - (550 * .5)+"px";
                dialogbox.style.top = "100px"; 
                dialogbox.style.display = "block";
                document.getElementById('dialogboxhead').innerHTML = "<p class =b1>OOPS!!!</p>";
                document.getElementById('dialogboxbody').innerHTML = dialog;
                document.getElementById('dialogboxbody2').innerHTML = "HIGH SCORE:  "+points;
                document.getElementById('dialogboxfoot').innerHTML = '<button class="b1" onclick="Alert.ok()" >TRY AGAIN</button>';
                document.getElementById('dialogboxfoot2').innerHTML = '<button class="b1"onclick="Alert.Home()">HOME</button>';
    
            }
            this.ok = function(){
                document.getElementById('dialogbox').style.display = "none";
                document.getElementById('dialogoverlay').style.display = "none";
                points=0;
                level=0;
                timeleft=10;
            
                life=3;
                ctx.clearRect(0, 0, 400, 400);
                play();
                location.reload();
                
               
                

            }

            this.Home = function(){
                document.getElementById('dialogbox').style.display = "none";
                document.getElementById('dialogoverlay').style.display = "none";
                window.location.href = "main.html";
            }

        }
        var Alert = new CustomAlert();

var c = document.getElementById("canvas");
var pos_x=80;
var pos_y=100;
var ctx = c.getContext("2d");


var xpoint=100;
var ypoint=100;

var x_list=[100,150,200];
var y_list = [100,150,200];
var rand_x = 0;
var rand_y = 0;
var color="";


function randomColor() {
    const rc1 = Math.random() * 16777215;
    const rc2 = Math.floor(rc1);
    const rc3 = rc2.toString(16);
    color="#" + rc3;
  }
  



//   function restart_allret(msg, myYes) {
//     var confirmBox = $("#confirm");
//     confirmBox.find("GAME OVER").text(msg);
//     confirmBox.find(".TRY AGAIN").unbind().click(function() {
//        confirmBox.hide();
//     });
//     confirmBox.find(".EXIT").click(myYes);
//     confirmBox.show();
//  }


  


    class circles{
        constructor(xpoint,ypoint,radius){
        
          this.xpoint=xpoint;
          this.ypoint=ypoint;
          this.radius=radius;
      
          
        }
        
      
      
          
        draw(ctx){
          
          ctx.beginPath();
        
          ctx.fillStyle=color;
          ctx.arc(this.xpoint,this.ypoint,this.radius,0,Math.PI*2,false);
          ctx.fill();
          ctx.stroke();
        
          ctx.closePath();
     
        }
      
       
      }


      function drawboard(){
        
        let circle= new circles(100,100,25);
        circle.draw(ctx);
  
        let circle2= new circles(100,150,25);
        circle2.draw(ctx);
  
        let circle3= new circles(100,200,25);
        circle3.draw(ctx);
  
  
        let circle4= new circles(150,100,25);
        circle4.draw(ctx);
  
        let circle5= new circles(150,150,25);
        circle5.draw(ctx);
  
        let circle6= new circles(150,200,25);
        circle6.draw(ctx);
  
        let circle7= new circles(200,100,25);
        circle7.draw(ctx);
  
        let circle8= new circles(200,150,25);
        circle8.draw(ctx);
  
        let circle9= new circles(200,200,25);
        circle9.draw(ctx);

        gamespace();
      


     


     
   


    }
      

    function rand_point(){
        
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        rand_x= x_list[Math.floor(Math.random()*x_list.length)];
        rand_y= x_list[Math.floor(Math.random()*x_list.length)];
        console.log(rand_x);
        console.log(rand_y);
        
        ctx.beginPath();
       
        ctx.globalAlpha = 0.4;
        ctx.arc(rand_x,rand_y,25,0,Math.PI*2,false);
  
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

  }



function play(){
  
    
    drawboard();
    rand_point();
    
}
    play();
  



var points = 0;


function click_circle(){
  
     function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        console.log("x: " + x + " y: " + y)
       


        if (x  >= rand_x-25 && x <= rand_x+25){
            if (y  >= rand_y-25 && y <= rand_y+25){
                points+=1;
                console.log("correct");
               
                console.log("score:",points);
                timeleft = 10;
          randomColor();
                ctx.clearRect(0, 0, 400, 400);
                play();
            
            }
            else{
               
                randomColor();
                console.log("incorrect");
                life=life-1;
            ctx.clearRect(0, 0, 400, 400);
                play();
            
            }

        }

        else{
            life=life-1;
            ctx.clearRect(0, 0, 400, 400);
                play();
            if( timeleft<=0){
                Alert.render("GAME OVER!" );
             
            }
            if(life <= 0){
                Alert.render("GAME OVER!");
             
                
            }
           
          
            
        }
        if(points < 10){
            level=1;
         
        }

        if(points <20 && points>10){
            level=2;
            timeleft=8;
          

        }

        if(points <30 && points>20){
            level=3;
            timeleft=7;
            interval=interval-50;
            
        }

        if (points <40 && points>30){
            level=4;
            timeleft=6;
           
        }
         if (points <50 && points>40){
             level=5;
             timeleft=5;
             
         }
         if (points <60 && points>50){
            level=6;
            timeleft=4;
            
        }
        if (points > 60){
            level=7
            timeleft=3;
        }
         if (points > 70){
             level=8;
             interval=interval-50;
         }

         if (points > 90){
            level=9;
            interval=interval-50;
        }
        

    }
    
    const canvas = document.querySelector('canvas')
    canvas.addEventListener('mousedown', function(e) {
        getCursorPosition(canvas, e)
    })


    
}
window.addEventListener("DOMContentLoaded", event => {

    
    const audio = document.querySelector("audio");
    audio.volume = 0.02;
    audio.play();
    
  });


count();
    click_circle();
    
 
    


    







  
     
      
