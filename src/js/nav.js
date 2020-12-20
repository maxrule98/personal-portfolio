const btnNav = document.querySelector('#btnNav');
const nav = document.querySelector('.nav__links');
const close__overlay = document.querySelector('.close__overlay');
const header = document.querySelector('header');
const lockScroll = document.querySelector('html');

window.onscroll = function(e) {
    if (this.oldScroll < this.scrollY && window.scrollY >= 68) {
        header.style.top = 'calc(var(--header-height) * -1)'
    } else {
        header.style.top = '0'
    }
    this.oldScroll = this.scrollY;
}

btnNav.addEventListener('click', () => {
    if (!nav.classList.contains('change')) {
        nav.classList.add('change');
        close__overlay.classList.add('change');
        lockScroll.style.overflow = 'hidden';
    } else {
        nav.classList.remove('change');
        close__overlay.classList.remove('change');
        lockScroll.style.overflow = 'scroll';
    }
    
})

close__overlay.addEventListener('click', () => {
    nav.classList.remove('change');
    close__overlay.classList.remove('change');
    body.style.overflow = 'scroll';
})