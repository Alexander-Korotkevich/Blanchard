// simplebar
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {

    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
  });
})

// dropdown
const btns = document.querySelectorAll(".menu-styles__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

// select
const element = document.querySelector('#custom-select');
const choices = new Choices(element, {
  searchEnabled: false,
  position: 'bottom',
  renderSelectedChoices: 'auto-always',
  itemSelectText: '',
});

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,

  spaceBetween: 10,
  loop: false,

  breakpoints: {

    1600: {
      slidesPerView: 3,
      spaceBetween: 45,
      slidesPerGroup: 3,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    }

  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// accordion
$(".accordion").accordion({
  heightStyle: "content"
});

// tabs
document.querySelectorAll('.accordion__list-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.accordion__list-btn').forEach(function (btn) {
      btn.classList.remove('accordion__list-btn_active')
    });
    e.currentTarget.classList.toggle('accordion__list-btn_active');
    document.querySelectorAll('.tabs-content').forEach(function (tabsBtn) {
      document.querySelectorAll('.tabs-content').forEach(el => {
        el.classList.remove('tabs-content_active');
      })
      tabsBtn.classList.remove('accordion__list-btn_active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content_active');
  });

});

// swiper events
const eventsSwiper = new Swiper('.events__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 27,
  loop: false,
  breakpoints: {

    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesPerGroup: 3,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },

  },

  // Navigation arrows
  navigation: {
    nextEl: '.events__swiper-next',
    prevEl: '.events__swiper-prev',
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
  },
});

// tooltips
document.querySelectorAll('.projects__descr-tooltip').forEach((tooltipBtn) => {
  tooltipBtn.addEventListener('click', (e) => {
    document.querySelectorAll('.projects__descr-tooltip').forEach((tooltip) => {
      tooltip.classList.remove('active');
    })
    e.currentTarget.classList.add('active');
    let timeoutID;
    timeoutID = window.setTimeout(closeTooltip, 1500);
    function closeTooltip() {
      document.querySelectorAll('.projects__descr-tooltip').forEach((el) => {
        el.classList.remove('active');
      })
    }
  })
})

// swiper projects
const projectsSwiper = new Swiper('.projects__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  loop: false,
  breakpoints: {

    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 21,
      slidesPerGroup: 1,
    },

  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper__next-btn',
    prevEl: '.swiper__prev-btn',
  },
});

// input mask
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999 99 99");

im.mask(selector);

// validation
const validate = new window.JustValidate('#form');

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorContainer: 'form__input-wrapper',
},
);

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для заполнения'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Как Вас зовут?',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно для заполнения'
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()

        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Укажите Ваш телефон',
    },
  ]);


// map
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.75, 37.60],
    zoom: 13,
  },
    {
      searchControlProvider: 'yandex#search'
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'г. Москва, Леонтьевский переулок, дом 5/1',
    }, {

      iconLayout: 'default#image',

      iconImageHref: 'img/map__object.svg',

      iconImageSize: [20, 20],

      iconImageOffset: [-5, -38]
    });

  myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent);
});

// smooth scroll
$('a[href*="#"]').on('click', function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});


// burgerMenu
const burgerBtn = document.querySelector('.header__burger-btn');
const burgerMenu = document.querySelector('.header__burger-menu');
const burgerCloseBtn = document.querySelector('.burger-menu__close-btn');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
})

burgerCloseBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
})

document.querySelectorAll('.nav__link_burger-menu').forEach((el) => {
  el.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
  })
})

// search
const searchBtn = document.querySelector('.header__search-open-btn');
const search = document.querySelector('.header__search-form');
const searchCloseBtn = document.querySelector('.search-form__close-btn');

searchBtn.addEventListener('click', () => {
  search.classList.toggle('active');
  searchBtn.classList.add('remove');
});

searchCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();

  search.classList.remove('active');
  searchBtn.classList.remove('remove');
})
