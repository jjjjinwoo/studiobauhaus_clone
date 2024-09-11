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

// 사이드바

const sidebarBtn = document.querySelectorAll(".sidebar button");
let sec2Top = document.querySelector(".sec2").offsetTop;
let sec3Top = document.querySelector(".sec3").offsetTop;
let sec4Top = sec3Top + document.querySelector(".sec3 .up").offsetHeight;
let sec5Top = sec4Top + document.querySelector(".sec3 .middle").offsetHeight;
let sec6BlackHeight = document.querySelector(".sec4 .black_box").offsetHeight;
let sec6Top =
  sec4Top + document.querySelector(".sec4").offsetHeight + sec6BlackHeight;

for (var i = 0; i < sidebarBtn.length; i++) {
  sidebarBtn[i].addEventListener("click", function () {
    for (var i = 0; i < sidebarBtn.length; i++) {
      sidebarBtn[i].classList.remove("on");
    }
    this.classList.add("on");
  });
}

// 배열에 스크롤 위치를 담습니다.
const scrollPositions = [0, sec2Top, sec3Top, sec4Top, sec5Top, sec6Top];

// 각 버튼에 클릭 이벤트 리스너를 추가합니다.
sidebarBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    window.scroll({
      top: scrollPositions[index],
      behavior: "smooth",
    });
  });
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

// 섹션2

const sec2ImgBox = document.querySelectorAll(".sec2 .img_box");
const sec2RB = document.querySelectorAll(".sec2 .text_box .rb");
const sec2Video = document.querySelectorAll(".sec2 video");

sec2ImgBox.forEach((box, index) => {
  box.addEventListener("mouseover", () => {
    sec2Video[index].play();
    sec2RB[index].classList.add("under_line");
  });

  box.addEventListener("mouseout", () => {
    sec2Video[index].load();
    sec2RB[index].classList.remove("under_line");
  });
});

// 섹션3

const sec3UpCard = document.querySelectorAll(".sec3 .up .card");

for (let i = 0; i < sec3UpCard.length; i++) {
  sec3UpCard[i].addEventListener("mouseenter", function () {
    if (this != sec3UpCard[2]) {
      this.classList.add("hover");
      sec3UpCard[2].classList.add("hover");
    }
  });
  sec3UpCard[i].addEventListener("mouseleave", function () {
    this.classList.remove("hover");
    sec3UpCard[2].classList.remove("hover");
  });
}

const sec3DownCard = document.querySelectorAll(".sec3 .down .card");
const sec3DownText = document.querySelectorAll(".sec3 .down .body_text p");

for (let i = 0; i < sec3DownCard.length; i++) {
  sec3DownCard[i].addEventListener("mouseenter", function () {
    for (let i = 0; i < sec3DownCard.length; i++) {
      sec3DownCard[i].classList.remove("on");
    }
    this.classList.add("on");

    sec3DownCard[0].addEventListener("mouseenter", function () {
      for (let i = 0; i < sec3DownCard.length; i++) {
        sec3DownText[i].classList.remove("on");
      }
      sec3DownText[0].classList.add("on");
    });

    sec3DownCard[1].addEventListener("mouseenter", function () {
      for (let i = 0; i < sec3DownCard.length; i++) {
        sec3DownText[i].classList.remove("on");
      }
      sec3DownText[1].classList.add("on");
    });

    sec3DownCard[2].addEventListener("mouseenter", function () {
      for (let i = 0; i < sec3DownCard.length; i++) {
        sec3DownText[i].classList.remove("on");
      }
      sec3DownText[2].classList.add("on");
    });
  });
}

// 섹션4

ScrollTrigger.create({
  trigger: ".sec4",
  start: "-100px top",
  end: "bottom bottom",
  pin: ".sec4 .title",
  // markers: true,
});

gsap.to(".sec4 .title .up .hello", {
  scrollTrigger: {
    trigger: ".sec4 .white_box",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 1,
    // markers: true,
  },
  transform: "translateX(0vw)",
});

gsap.to(".sec4 .title .up .studio", {
  scrollTrigger: {
    trigger: ".sec4 .white_box",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 1,
    // markers: true,
  },
  transform: "translateX(0vw)",
});

gsap.to(".sec4 .title .down", {
  scrollTrigger: {
    trigger: ".sec4 .white_box",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 1,
    // markers: true,
  },
  transform: "scale(1)",
});

gsap.to(".sec4 .title", {
  scrollTrigger: {
    trigger: ".sec4 .black_box",
    start: "0% 100%",
    end: "100% 100%",
    scrub: 1,
    // markers: true,
  },
  transform: "translateY(160px)",
});
