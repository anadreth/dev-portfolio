
gsap.fromTo("body", {opacity: 0}, {opacity: 1, duration: 30, ease: "elastic"});

let logo = document.getElementById('logo');


logo.addEventListener('click', function() {
    gsap.to("#logo", {rotation: '+=90', duration: 1, ease: "elastic"});
    console.log('rotate');
});

