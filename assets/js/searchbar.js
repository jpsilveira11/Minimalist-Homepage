var searchEngine=document.getElementById('searchbar');

//searchEngine.setAttribute('action,'link.to.search');

const button=document.querySelector('.button');
const search=document.querySelector('.search');
const firstIcon=document.querySelector('.button i:first-child');
const lastIcon=document.querySelector('.button i:last-child');
firstIcon.style.display = 'block';
lastIcon.style.display="none";
button.onclick=function() {
    search.classList.toggle('active');
    firstIcon.style.display="none";
    lastIcon.style.display="block";
}