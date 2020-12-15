const header = document.querySelector('header')

window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up

    
    if (this.oldScroll < this.scrollY && window.scrollY >= 68) {
        header.style.top = 'calc(var(--header-height) * -1)'
    } else {
        header.style.top = '0'
    }
    this.oldScroll = this.scrollY;
  }