const theme='light';

const body=document.body;
const items=body.querySelector('.watch div');
var watchDivs=[];

if (theme=='dark'){
    body.style.color='#fff';    
}
else{
    body.style.color='#000';
    items.style.backgroundColor='magenta';

}
/*var darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  console.log('currently using dark theme');
} else {
  console.log('corrently not using dark theme');
}*/