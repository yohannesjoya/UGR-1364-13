// burger button collapse

const burgerBtn = document.querySelector(".burger-menu");
burgerBtn.addEventListener("click", () => {
  const navLinksUl = document.querySelector("#nav> ul");
  const closer = document.createElement("li");
  closer.innerHTML = "X";
  closer.className = "closer";
  if (navLinksUl) navLinksUl.appendChild(closer);
  navLinksUl.className = "collapsed";
  closer.addEventListener("click", () => {
    navLinksUl.removeChild(closer);
    navLinksUl.className = "unCollapsed";
  });
});

// scroller

const leftSlider = document.querySelector(".slider-left");
const rightSlider = document.querySelector(".slider-right");

rightSlider &&
  rightSlider.addEventListener("click", () => {
    const scrollableDivImgs = document.querySelectorAll("#scroll-flex > *");
    const array = document.querySelector("#scroll-flex");
    const last = scrollableDivImgs[scrollableDivImgs.length - 1];

    scrollableDivImgs.forEach((el) => {
      let x = Number(el.style.width) + 60;
      el.style.transform = `translateX(${x}px)`;
    });
    setTimeout(() => {
      scrollableDivImgs.forEach((el) => {
        el.style.transform = "translateX(-30px)";
      });
      array.removeChild(last);
      array.prepend(last);
    }, 100);
  });
leftSlider &&
  leftSlider.addEventListener("click", () => {
    const scrollableDivImgs = document.querySelectorAll("#scroll-flex > *");
    const array = document.querySelector("#scroll-flex");
    const first = scrollableDivImgs[0];

    scrollableDivImgs.forEach((el) => {
      let x = Number(el.style.width) + 60;
      el.style.transform = `translateX(-${x}px)`;
    });
    setTimeout(() => {
      scrollableDivImgs.forEach((el) => {
        el.style.transform = "translateX(20px)";
      });
      array.removeChild(first);
      array.appendChild(first);
    }, 100);
  });

let footerHeaders = document.querySelectorAll(".footer-col > h1");
let footerColumns = document.querySelectorAll(".footer-col > ul");
// let footerOpener = window.getComputedStyle(footerHeaders[0], "::after");
footerHeaders.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.parentElement
      .querySelector("ul")
      .classList.toggle("unCollapsedFooterUl");
  });
});

// contact form VALIDATOR

let contactForm = document.querySelector(".Contact__form");
//email validator function
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

contactForm &&
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector(".Contact__form #name");
    let email = document.querySelector(".Contact__form #Email");
    let message = document.querySelector(".Contact__form #comment");
    if (
      name.value === "" ||
      name.value === null ||
      /\d/.test(name.value) ||
      /[^a-zA-Z0-9 ]/.test(name.value)
    ) {
      name.value = "invalid name";
      name.style.border = "1px solid red";
    } else {
      name.style.border = "1px solid black";

      if (validateEmail(email.value)) {
        email.style.border = "1px solid black";

        if (message.value === null || message.value === "") {
          message.value = "Please place your comment";
          message.style.border = "1px solid red";
        } else {
          message.style.border = "1px solid black";

          let btn = contactForm.querySelector(".Contact__form-btn");
          btn.innerHTML = "SENT";
          btn.style.backgroundColor = "green";
          // form cleared
          setTimeout(() => {
            email.value = "";
            name.value = "";
            message.value = "";
            btn.value = "Send";
            btn.style.backgroundColor = "black";
          }, 2500);
        }
      } else {
        email.value = "invalid email";
        email.style.border = "1px solid red";
      }
    }

    // name === null || name == ""
    //   ? (name.style.placeholder = "enter name")
    //   : console.log(name, email, message);
  });

//news subscription validator

let subForm = document.querySelector(".newsletter__subscription");
subForm &&
  subForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);

    let mail = document.querySelector(".newsletter__subscription  form input");
    if (validateEmail(mail.value)) {
      mail.style.border = "1px solid black";
    } else {
      mail.value = "invalid email";
      mail.style.border = "1px solid red";
    }
    // form cleared
    setTimeout(() => {
      mail.value = "";
    }, 2500);
  });
