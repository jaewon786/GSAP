
const sec1 = gsap.timeline();
sec1.from(".section-every", {
  autoAlpha: 0,
  y: -100,
  stagger: {
    amount: 0.2,
    from: "random"
  }
});

ScrollTrigger.create({
  animation: sec1,
  trigger: "#section1",
  start: "top 10%",
});

const sec2 = gsap.timeline();
sec2.from(".section-recommend", {
  autoAlpha: 0,
  x: -100,
  duration: 1
});

ScrollTrigger.create({
  animation: sec2,
  trigger: "#section2",
  start: "top 30%",
});

const sec3 = gsap.timeline();
sec3.from(".section-mix", {
  autoAlpha: 0,
  x: 100,
  duration: 1
});

ScrollTrigger.create({
  animation: sec3,
  trigger: "#section3",
  start: "top 60%",
});