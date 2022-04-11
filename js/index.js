const hamburger = document.querySelector('#menu-click');
const nav = document.querySelector('#nav-bar')
let i = 0;

function openClick(){
    nav.classList.toggle('appear');
}

document.addEventListener('click',  function handleClickOutsideBox(event){
    const container = document.getElementById('nav-bar');
    const container2 = document.getElementById('menu-click')
    
    if (!container.contains(event.target) && !container2.contains(event.target)){
        nav.classList.remove('appear')
    }
})
