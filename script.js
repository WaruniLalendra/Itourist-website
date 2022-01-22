let searchBtn = document.querySelector('#seacrh-btn');
let searchBar = document.querySelector('.search-bar-container');


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});