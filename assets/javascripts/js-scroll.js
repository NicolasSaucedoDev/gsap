gsap.registerPlugin(ScrollTrigger);

var tl = tl

gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.from(card ,{
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "90% top",
            toggleActions: "play reverse play reverse"
        },
        duration: 1,
        opacity: 0,
    });

});
