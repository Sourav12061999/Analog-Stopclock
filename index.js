var minute = document.getElementById("minute");
var second = document.getElementById("second");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var button = document.getElementById("start");
var minset;
var secset;
var minclock;
var secclock;
var audio = new Audio('alarm.mp3');
var alarmstarted = false;
var alarmcount = 0;
function start(){
 if(min.value == "" || null){
     minset = 0;
 }
 else{
     minset = parseInt(min.value);
 }
 if(sec.value == "" || null){
     secset = 0;
 }
 else{
     secset = parseInt(sec.value);
 }
 minclock = 0;
 secclock = 0;
 alarmstarted = true;
 alarmcount = 0;
} 
button.addEventListener("click",start);
setInterval(() => {
   if((minset * 60 + secset)>(minclock * 60 +secclock)){
    
       secclock +=1;
       if(secclock > 59){
           secclock = 0;
           minclock +=1;
        }

       minrotation = minclock * 6;
       secrotation = secclock * 6;
       minute.style.transform = `rotate(${minrotation}deg)`;
       second.style.transform = `rotate(${secrotation}deg)`;
       
   }
   else{
       if(alarmstarted ===true && alarmcount ===0){
           alarmcount = 1;
            audio.play();
       }
       
       
       
       

   }
    
}, 1000);


