"use strict";

gsap.registerPlugin(ScrollTrigger);

// 스크롤 최상단으로

function toTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

// 헤더 스크롤 내릴시 이벤트

const header = document.querySelector("header");
const headerLogoT = document.querySelector("header .logo h1");
const headerLogoS = document.querySelector("header .logo svg");
const sidebarBlank = document.querySelector(".sidebar .blank");

document.addEventListener("scroll", function () {
  if (window.innerWidth >= 768) {
    var isScrollAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (scrollY == 0) {
      header.style.filter = "invert(0)";
      header.style.height = "82px";
      headerLogoT.style.display = "block";
      headerLogoS.style.display = "none";
      sidebarBlank.style.height = "82px";
    } else if (isScrollAtBottom) {
      header.style.filter = "invert(1)";
    } else {
      header.style.filter = "invert(0)";
      header.style.height = "50px";
      headerLogoT.style.display = "none";
      headerLogoS.style.display = "block";
      sidebarBlank.style.height = "50px";
    }
  }
});

const menuBtnM = document.querySelector("header .menu_mob");
const headerMenuM = document.querySelector("header .mobile_box");
const closeBtnM = document.querySelector("header .mobile_box .top > button");

menuBtnM.addEventListener("click", function () {
  header.classList.add("menu");
  headerMenuM.classList.add("on");
});

closeBtnM.addEventListener("click", function () {
  header.classList.remove("menu");
  headerMenuM.classList.remove("on");
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

window.addEventListener("scroll", function () {
  if (scrollY > 0 && scrollY < sec2Top) {
    for (var i = 0; i < sidebarBtn.length; i++) {
      sidebarBtn[i].classList.remove("on");
    }
    sidebarBtn[0].classList.add("on");
  } else if (scrollY >= sec2Top && scrollY < sec3Top) {
    for (var i = 0; i < sidebarBtn.length; i++) {
      sidebarBtn[i].classList.remove("on");
    }
    sidebarBtn[1].classList.add("on");
  } else if (scrollY >= sec3Top && scrollY < sec4Top) {
    for (var i = 0; i < sidebarBtn.length; i++) {
      sidebarBtn[i].classList.remove("on");
    }
    sidebarBtn[2].classList.add("on");
  } else if (scrollY >= sec4Top && scrollY < sec5Top) {
    for (var i = 0; i < sidebarBtn.length; i++) {
      sidebarBtn[i].classList.remove("on");
    }
    sidebarBtn[3].classList.add("on");
  } else if (scrollY >= sec5Top && scrollY < sec6Top) {
    for (var i = 0; i < sidebarBtn.length; i++) {
      sidebarBtn[i].classList.remove("on");
    }
    sidebarBtn[4].classList.add("on");
  } else if (scrollY >= sec6Top) {
    for (var i = 0; i < sidebarBtn.length; i++) {
      sidebarBtn[i].classList.remove("on");
    }
    sidebarBtn[5].classList.add("on");
  }
});

// 섹션1

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
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
  },
  "(max-width: 767px)": function () {
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
    // gsap.to(".sec1 .bg_box .first", {
    //   scrollTrigger: {
    //     trigger: ".sec1",
    //     start: "0% 0%",
    //     end: "400% 0%",
    //     scrub: 1,
    //     markers: false,
    //   },
    //   transform: "translateY(230%)",
    // });
    // gsap.to(".sec1 .bg_box .second", {
    //   scrollTrigger: {
    //     trigger: ".sec1",
    //     start: "0% 0%",
    //     end: "400% 0%",
    //     scrub: 1,
    //     markers: false,
    //   },
    //   transform: "translateY(20%)",
    // });
    // gsap.to(".sec1 .bg_box .third", {
    //   scrollTrigger: {
    //     trigger: ".sec1",
    //     start: "0% 0%",
    //     end: "400% 0%",
    //     scrub: 1,
    //     markers: false,
    //   },
    //   transform: "translateY(100%)",
    // });
  },
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

// 섹션3 - 호버박스

const sec3UpCard = document.querySelectorAll(".sec3 .up .card");

for (let i = 0; i < sec3UpCard.length; i++) {
  sec3UpCard[i].addEventListener("mouseenter", function () {
    if (this == sec3UpCard[0]) {
      this.classList.add("hover");
      sec3UpCard[2].classList.add("hover");
      setTimeout(() => {
        sec3UpCard[2].style.borderRight = "none";
      }, 500);
    } else if (this != sec3UpCard[2]) {
      this.classList.add("hover");
      sec3UpCard[2].classList.add("hover");
    }
  });
  sec3UpCard[i].addEventListener("mouseleave", function () {
    if (this == sec3UpCard[0]) {
      this.classList.remove("hover");
      sec3UpCard[2].classList.remove("hover");
      sec3UpCard[2].style.borderRight = "1px solid black";
    }
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
      bodyText[i].classList.remove("rm");
      moreButton.classList.remove("rm");
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

// 섹션3 - READ MORE

const moreButton = document.querySelector(".sec3 .body_text .more");
const bodyText = document.querySelectorAll(".sec3 .body_text p");
const bodyTextBg = document.querySelector(".sec3 .body_text .bg");

moreButton.addEventListener("click", function () {
  for (var i = 0; i < bodyText.length; i++) {
    bodyText[i].classList.add("rm");
    moreButton.classList.add("rm");
    bodyTextBg.classList.add("rm");
  }
});

const sec3Card = document.querySelectorAll(".sec3 .down .card");

for (var i = 0; i < sec3Card.length; i++) {
  sec3Card[i].addEventListener("click", function () {
    bodyTextBg.classList.remove("rm");
  });
}

// 섹션3 - READ MORE 모바일

const moreButtonM = document.querySelectorAll(".sec3 .mobile_box .tab .icon ");
const bodyTextM = document.querySelectorAll(
  ".sec3 .mobile_box .tab .body_text"
);

let sum1 = 0;

moreButtonM[0].addEventListener("click", function () {
  if (sum1 == 0) {
    bodyTextM[0].classList.add("on");
    sum1++;
  } else {
    bodyTextM[0].classList.remove("on");
    sum1--;
  }
});

let sum2 = 0;

moreButtonM[1].addEventListener("click", function () {
  if (sum2 == 0) {
    bodyTextM[1].classList.add("on");
    sum2++;
  } else {
    bodyTextM[1].classList.remove("on");
    sum2--;
  }
});

let sum3 = 0;

moreButtonM[2].addEventListener("click", function () {
  if (sum3 == 0) {
    bodyTextM[2].classList.add("on");
    sum3++;
  } else {
    bodyTextM[2].classList.remove("on");
    sum3--;
  }
});

// 섹션3 모바일 - slick

$(document).ready(function () {
  $(".sec3 .mobile_box .card_list").slick({
    slidesToShow: 2,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrow: false,
  });
});

$(".sec3 .mobile_box .btn_box .rb").click(function () {
  $(".sec3 .mobile_box .card_list").slick("slickNext");
});
$(".sec3 .mobile_box .btn_box .lb").click(function () {
  $(".sec3 .mobile_box .card_list").slick("slickPrev");
});

// 섹션4

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    ScrollTrigger.create({
      trigger: ".sec4",
      start: "top top",
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
  },
  "(max-width: 767px)": function () {
    ScrollTrigger.create({
      trigger: ".sec4",
      start: "top top",
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
  },
});
