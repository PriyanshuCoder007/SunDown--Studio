const elemC = document.querySelector("#elem-container");
const fix = document.querySelector("#fixed-image");
const elems = document.querySelectorAll(".elem");
const tabs = document.querySelectorAll("#tabs");
const changeImage = document.querySelector("#container img");
const tabsH2 = document.querySelectorAll("#tabs h2");
const menu = document.querySelector("nav h3");
const fullScr = document.querySelector("#full-src");
const navImg = document.querySelector("nav img");
const loader = document.querySelector("#loader");

function locomotiveScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function starSvgAnimation() {
  gsap.to("#gola #spinner", {
    duration: 2.5,
    delay: 0.2,
    ease: "linear",
    repeat: -1,
    rotation: 360,
    transformOrigin: "center",
  });
}

function page2StarSvgAnimation() {
  gsap.to("#gooey #spinner", {
    duration: 3.8,
    delay: 1,
    ease: "linear",
    repeat: -1,
    rotation: 360,
    transformOrigin: "center",
  });
}

function page3ImageAnimation() {
  elemC.addEventListener("mouseenter", function () {
    fix.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fix.style.display = "none";
  });

  elems.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      const image = e.getAttribute("data-image");
      fix.style.backgroundImage = `url(${image})`;
    });
  });
}

function page4() {
  const content = {
    content1:
      "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
    content2:
      "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need",
    content3:
      "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
  };

  tabsH2.forEach((e) => {
    e.addEventListener("click", function () {
      // Reset color for all elements
      tabsH2.forEach((el) => {
        el.classList.remove("active");
      });

      // Change color of the clicked element
      this.classList.add("active");

      // Get the content ID from the clicked h2's data attribute
      const contentId = this.getAttribute("data-content");

      // Update the #desc div with the corresponding content
      const descDiv = document.getElementById("desc");
      if (content[contentId]) {
        descDiv.textContent = content[contentId];
      }

      const img = this.getAttribute("data-img");
      changeImage.src = img;
      console.log(changeImage.src);
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 53,
    freeMode: true,
    slidesPerView: 3,
    loop: false,
  });
}

function menuAnimation() {
  let flag = 0;

  menu.addEventListener("click", function () {
    console.log("Menu clicked!"); // To check if click event works

    if (flag == 0) {
      fullScr.style.top = "0"; // Set to 0% to show it
      navImg.style.opacity = 0; // Hide image
      flag = 1;
    } else {
      fullScr.style.top = "-100%"; // Hide it by moving it up
      navImg.style.opacity = 1; // Show image again
      flag = 0;
    }
  });
}

function loaderAnimation() {
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

locomotiveScroll();
loaderAnimation();
starSvgAnimation();
page2StarSvgAnimation();
page3ImageAnimation();
page4();
swiperAnimation();
menuAnimation();
