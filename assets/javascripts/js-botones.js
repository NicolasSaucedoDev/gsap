gsap.from(".nav-item", {
    duration: 1,
    y: 30,
    scale: 0.2,
    opacity: 0,
    ease: "elastic",
    stagger:{amount: 0.25, from: "edges"}
})


let nav = document.querySelectorAll('.nav-item');
let targetAnterior;
let direction = -1;

nav.forEach(element => {
    element.addEventListener('click', function(){
    let target = '#' + element.getAttribute('data-target');
    let tl = gsap.timeline();
   

    if (targetAnterior != target) {
        tl.set(targetAnterior, {display: 'none'});
    }
    tl.set(target, {
        display: 'block', 
        opacity: 0,
        x: direction * 100
    });
    tl.to(target, {
        duration: 1,
        opacity: 1,
        x: 0
    });

    targetAnterior = target;
    direction = direction * -1;
   })

});

