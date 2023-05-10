// слайдер и смена изображений
const doctors = {
  therapy: [
    './assets/jpg/doct.jpg',
    './assets/jpg/doct-1.jpg',
    './assets/jpg/doct-2.jpg',
    './assets/jpg/doct-3.jpg',
    './assets/jpg/doct-4.jpg',
    './assets/jpg/doct-5.jpg',
    './assets/jpg/doct-6.jpg'
  ],
  hirurgy: [
      './assets/jpg/hir.jpg',
      './assets/jpg/hir-1.jpg',
      './assets/jpg/hir-2.jpg',
      './assets/jpg/hir-3.jpg',
      './assets/jpg/hir-4.jpg',
      './assets/jpg/hir-5.jpg',
      './assets/jpg/hir-6.jpg'
    ],
  derma: [
      './assets/jpg/der.jpg',
      './assets/jpg/der-1.jpg',
      './assets/jpg/der-2.jpg',
      './assets/jpg/der-3.jpg',
      './assets/jpg/der-4.jpg',
      './assets/jpg/der-5.jpg',
      './assets/jpg/der-6.jpg'
    ],
}

const imagesLeft = Array.from(document.querySelector('.slider_left').children);
const imagesCenter = Array.from(document.querySelector('.slider_center').children);
const imagesRight = Array.from(document.querySelector('.slider_right').children);

let doct = 'therapy';

function redrawPhoto(arr) {
  arr.forEach((image, index) => image.src = doctors[doct][index]);
}

function changeImage (event) {
  doct = event.target.dataset.doctor;
  redrawPhoto(imagesCenter);
  const buttons = document.querySelector('.portfolio-btns').children;
  Array.from(buttons).forEach(button => {
    if (button.dataset.doctor == doct) {
      button.classList.add('btn-color');
    } else {
      button.classList.remove('btn-color');
    };
  });
  
};

function buttonClick (event) {
  if (event.target.classList.contains('acbutton')) {
    changeImage (event);
  };
};

document.querySelector('.portfolio-btns').addEventListener('click', buttonClick);

function shiftPhoto(arrow) {
  var el = '';
  const w = window.innerWidth >= 768 ? 2 : 1;
  if (arrow == 'left') {
    doctors[doct] =  doctors[doct].slice(w).concat( doctors[doct].slice(0, w));
  } else if (arrow == 'right') {
    doctors[doct] =  doctors[doct].slice(-w).concat( doctors[doct].slice(0, -w));
  }
}

const slider = document.querySelector('.slider');

const buttonLeft = document.querySelector('.button_slider_left');
const buttonRight = document.querySelector('.button_slider_right');

function sliderLeft() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_left');
  shiftPhoto('left');
  redrawPhoto(imagesRight);
};

function sliderRight() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_right');
  shiftPhoto('right');
  redrawPhoto(imagesLeft);
};

slider.addEventListener('animationend', () => {
  redrawPhoto(imagesCenter);
  slider.classList.remove('move_left');
  slider.classList.remove('move_right');
  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);
});


buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);

//переход на калькулятор

            var zap4 = document.getElementById("zap4");
            if (zap4) {
              zap4.addEventListener("click", function (e) {
                window.location.href = 'calc.html';
              });
            }
            
            var zap3 = document.getElementById("zap3");
            if (zap3) {
              zap3.addEventListener("click", function (e) {
                window.location.href = 'calc.html';
              });
            }
            
            var zap2 = document.getElementById("zap2");
            if (zap2) {
              zap2.addEventListener("click", function (e) {
                window.location.href = 'calc.html';
              });
            }
            
            var zap1 = document.getElementById("zap1");
            if (zap1) {
              zap1.addEventListener("click", function (e) {
                window.location.href = 'calc.html';
              });
            }

            var zap = document.getElementById("zap");
            if (zap) {
              zap.addEventListener("click", function (e) {
                window.location.href = 'calc.html';
              });
            }



//скроллинг

     function loadPage() {
      window.scrollTo(0,0);
      }


      var text29 = document.getElementById("text29");
      if (text29) {
        text29.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='contContainer']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var text30 = document.getElementById("text30");
      if (text30) {
        text30.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='specContainer']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var text31 = document.getElementById("text31");
      if (text31) {
        text31.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='uslugiContainer']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var text32 = document.getElementById("text32");
      if (text32) {
        text32.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='priceContainer']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }

      //пуш уведомление

      var pus = document.querySelector('.sendd');
      if (pus) {
        pus.addEventListener("click", function (e) {
          alert("Ваше сообщение отправлено!");
        });
      }

      
//бургер меню

      (function () {
        const burgerItem = document.querySelector('.burger');
        const crest = document.querySelector('.header_nav_close');
        const menu = document.querySelector('.nav');
        burgerItem.addEventListener('click', () => {
          crest.classList.add('close_active');
        });
        burgerItem.addEventListener('click', () => {
          menu.classList.add('nav_active');
        });
        crest.addEventListener('click', () => {
          menu.classList.remove('nav_active');
        });
        crest.addEventListener('click', () => {
          crest.classList.remove('close_active');
        });
      }());

      (function () {
        const usl = document.querySelector('.div28');
        const spec = document.querySelector('.div27');
        const ceni = document.querySelector('.div29');
        const svaz = document.querySelector('.div26');
        const menu = document.querySelector('.nav');
        const crest = document.querySelector('.header_nav_close');
        usl.addEventListener('click', () => {
          menu.classList.remove('nav_active');
        });
        spec.addEventListener('click', () => {
          menu.classList.remove('nav_active');
        });
        ceni.addEventListener('click', () => {
          menu.classList.remove('nav_active');
        });
        svaz.addEventListener('click', () => {
          menu.classList.remove('nav_active');
        });
        usl.addEventListener('click', () => {
          crest.classList.remove('close_active');
        });
        spec.addEventListener('click', () => {
          crest.classList.remove('close_active');
        });
        ceni.addEventListener('click', () => {
          crest.classList.remove('close_active');
        });
        svaz.addEventListener('click', () => {
          crest.classList.remove('close_active');
        });
      }());