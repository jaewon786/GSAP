
const ani = gsap.timeline();
ani.from(".section-every", {
  autoAlpha: 0,
  y: -100,
  stagger: {
    amount: 0.3,
    from: "random"
  }
})

ScrollTrigger.create({
  animation: ani,
  trigger: "#section1",
  start: "top 10%",
  anticipatePin: 1,
  markers: true
});