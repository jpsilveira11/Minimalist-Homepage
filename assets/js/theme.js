const theme='dark';

const body=document.body;
const searchBar=document.querySelector('.search');
const inputBar=document.getElementById('Search');
const searchBtn=document.querySelector('.button');
const items=body.querySelectorAll('.watch div');

if (theme=='light'){
    body.style.color='#000';
    body.style.background='#eee';
    /*inputBar.style.background='#fff';*/
    searchBar.style.background='#fff';
    searchBtn.style.background='#fff';
    searchBtn.style.color='#000';
    items.forEach(item=>item.style.backgroundColor='#fff');    
}
else{
    body.style.color='#fff';
    body.style.background='#222';
    searchBar.style.background='#fff';
    searchBtn.style.background='#fff';
    searchBtn.style.color='#000';
    /*inputBar.style.background='magenta';
    searchBar.style.background='#000';
    searchBtn.style.background='#000';
    searchBtn.style.color='#fff';*/
    items.forEach(item=>item.style.backgroundColor='#000');

}
/*var darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  console.log('currently using dark theme');
} else {
  console.log('corrently not using dark theme');
}*/