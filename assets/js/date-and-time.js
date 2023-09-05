const hideWatch=false;
const hideDate=false;
const dateFormat='mm/dd/yyyy';
const timeFormat='12' 
const date=document.getElementById('today');
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
if (hideDate==true) {
    const dateDiv=document.querySelector('.date');
    dateDiv.style.display="none";
}

const currentDate=new Date();
const dayOfWeek=currentDate.toLocaleString(undefined,{weekday:'short'});
const dayOfMonth=currentDate.getDate();
const month=currentDate.toLocaleString(undefined,{month:'long'});
const year=currentDate.getFullYear();
if (dateFormat == 'mm/dd/yyyy') date.textContent=(dayOfWeek+', '+month+' '+dayOfMonth+' '+year);
if (dateFormat == 'dd/mm/yyyy') date.textContent=(dayOfWeek+', '+dayOfMonth+' '+month+' '+year);
if (dateFormat == 'yyyy/dd/mm') date.textContent=(dayOfWeek+', '+year+' '+dayOfMonth+' '+month);
if (dateFormat == 'yyyy/mm/dd') date.textContent=(dayOfWeek+', '+year+' '+month+' '+dayOfMonth);


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
        if (h==0) h=12;
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