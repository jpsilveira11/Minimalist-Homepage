const hideWatch=false;
const timeFormat='12' 


const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const twelveHoursFormat=document.getElementById('twelve-hours-format');
const am=document.getElementById('am');
const pm=document.getElementById('pm');
if (hideWatch==true) {
    const watch=document.querySelector('.watch');
    watch.style.display="none";
}
else {
    if (timeFormat==24) {
    twelveHoursFormat.style.display="none";
    const watch=setInterval(function time() {
        let CurrentTime = new Date;
        let h=CurrentTime.getHours();
        let m=CurrentTime.getMinutes();
        let s=CurrentTime.getSeconds();
        if (h < 10) h ='0'+h;
        if (m < 10) m ='0'+m;
        if (s < 10) s ='0'+s;
        hours.textContent=h;
        minutes.textContent=m;
        seconds.textContent=s;
    });
}
if (timeFormat==12){
    const watch=setInterval(function time() {
        let CurrentTime = new Date;
        let h=CurrentTime.getHours();
        if (h>12){
            h-=12;
            am.style.display='none';
        }
        else pm.style.display='none';
        let m=CurrentTime.getMinutes();
        let s=CurrentTime.getSeconds();
        if (h < 10) h ='0'+h;
        if (m < 10) m ='0'+m;
        if (s < 10) s ='0'+s;
        hours.textContent=h;
        minutes.textContent=m;
        seconds.textContent=s;
    });
    
}
    
}