const leftOffsetRect = document.getElementById("left-offset-rect");
const rightOffsetRect = document.getElementById("right-offset-rect");

/* animate the offset rectangles down the screen */
gsap.to(leftOffsetRect, {
    attr: {
        y: "800"
    },
    duration: 5,
    repeat: -1,
    ease: "none"
})

gsap.to(rightOffsetRect, {
    attr: {
        y: "800"
    },
    duration: 5,
    repeat: -1,
    ease: "none",
    delay: 2.5
});