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
  item.addEventListener("click", function() {
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
    itemSelectText: 'Выбрать',
    position: 'bottom',
  });


