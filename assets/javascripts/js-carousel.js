var slide = 0;

let arr_cards = document.querySelectorAll('.card');
console.log(arr_cards.length);

function slideSiguiente() {
    if ((arr_cards.length / 3) - 1 > slide){
        slide++;
        let pos = slide * -342;
        gsap.to('.track-cards', {y:pos})
    }
}

function slideAnterior() {
    if (slide > 0) {
        slide--;
        let pos = slide * -342;
        gsap.to('.track-cards', {y:pos})
    }
    
}