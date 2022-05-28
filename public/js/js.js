window.onscroll = function() {
    const header = document.querySelector('header')
    const navFixed = header.offsetTop
    const toTop = document.querySelector('#toTop')

    if(window.scrollY > navFixed) {
        header.classList.add('nav-fixed')
        toTop.classList.add('flex')
        toTop.classList.remove('hidden')
    } else {
        header.classList.remove('nav-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
}


const navToggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('#nav')

navToggle.addEventListener('click', function(){
    navToggle.classList.toggle('nav-toggle-1');
    nav.classList.toggle('hidden');
});

window.addEventListener('click', function(e){
    if(e.target != nav && e.target != navToggle){
    navToggle.classList.remove('nav-toggle-1');
    nav.classList.add('hidden');
    }
})

const darkToggle = document.querySelector('#dark-toggle');
const dark = document.querySelector('html')

darkToggle.addEventListener('click', function() {
    darkToggle.checked ? dark.classList.add('dark') : dark.classList.remove('dark')
})