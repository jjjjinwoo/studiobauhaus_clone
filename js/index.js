"use strict";

// 섹션1

gsap.to(".sec1 .bg_box .first", {
  scrollTrigger: {
    trigger: ".sec1",
    start: "0% 0%",
    end: "400% 0%",
    scrub: 1,
    markers: false,
  },
  transform: "translateY(90vw) rotate(90deg)",
});

gsap.to(".sec1 .bg_box .first", {
  scrollTrigger: {
    trigger: ".sec1",
    start: "0% 0%",
    end: "100% 0%",
    scrub: 1,
    markers: false,
  },
  "clip-path":
    "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
});

gsap.to(".sec1 .bg_box .third", {
  scrollTrigger: {
    trigger: ".sec1",
    start: "0% 0%",
    end: "400% 0%",
    scrub: 1,
    markers: false,
  },
  transform: "translateY(-90vw)",
});
