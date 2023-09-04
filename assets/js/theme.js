const theme='light';

const body=document.body;
const items=body.querySelectorAll('.watch div');

if (theme=='dark'){
    body.style.color='#fff';
    items.forEach(item=>item.style.backgroundColor='#000');    
}
else{
    body.style.color='#000';
    items.forEach(item=>item.style.backgroundColor='#fff');

}
/*var darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  console.log('currently using dark theme');
} else {
  console.log('corrently not using dark theme');
}*/