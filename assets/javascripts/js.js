gsap.from("header", {y:-100, duration: 1});



//Seccion de Cards

let tl_cards = gsap.timeline();
tl_cards.from('.card', {opacity: 0, duration: 0.5, scale:0.5, stagger: 0.2});
tl_cards.from('.card img', {opacity: 0, scale: 3});
tl_cards.from('.card h3', {xPercent:-100, duration: 0.4, stagger:0.2}, "unidos");
tl_cards.from('.card p', {opacity: 0, duration: 0.5}, "unidos");
tl_cards.from('.card .btn', {opacity:0 , duration: 0.5});

