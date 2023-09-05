const theme='dark';

const body=document.body;
const searchBar=document.querySelector('.search');
const inputBar=document.getElementById('content');
const searchBtn=document.querySelector('.button');
const items=body.querySelectorAll('.watch div');

if (theme=='light'){
    body.style.color='#000';
    searchBar.style.background='#fff';
    searchBtn.style.background='#fff';
    searchBtn.style.color='#000';
    items.forEach(item=>item.style.backgroundColor='#fff');    
}
else{
    body.style.color='#fff';
    searchBar.style.background='#444';
    searchBtn.style.background='#444';
    inputBar.style.background='#444';
    inputBar.style.color='#fff';
    searchBtn.style.color='#fff';
    items.forEach(item=>item.style.backgroundColor='#000');

}
