const fadeIn = document.querySelectorAll(".fade-in");
const slideIn = document.querySelectorAll(".slide-in");

const appearOptions = {
    treshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeIn.forEach(fader => {
    appearOnScroll.observe(fader);
})

slideIn.forEach(slide => {
    appearOnScroll.observe(slide);
})