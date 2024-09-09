"use strict";

// 헤더 스크롤 내릴시 이벤트

const header = document.querySelector("header");
const headerLogoT = document.querySelector("header .logo h1");
const headerLogoS = document.querySelector("header .logo svg");
const sidebarBlank = document.querySelector(".sidebar .blank");

document.addEventListener("scroll", function () {
  if (scrollY == 0) {
    header.style.height = "82px";
    headerLogoT.style.display = "block";
    headerLogoS.style.display = "none";
    sidebarBlank.style.height = "82px";
  } else {
    header.style.height = "50px";
    headerLogoT.style.display = "none";
    headerLogoS.style.display = "block";
    sidebarBlank.style.height = "50px";
  }
});

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
  "border-radius": "0%",
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
