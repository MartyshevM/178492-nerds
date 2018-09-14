// слайдер
var slider_controls = document.querySelectorAll(".slider-indicator-item-btn");
var slider_1 = document.querySelector(".slider-item-1");
var slider_2 = document.querySelector(".slider-item-2");
var slider_3 = document.querySelector(".slider-item-3");


slider_controls.forEach(function (slider_control) {
  slider_control.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (!this.classList.contains("active")) {
      try {
        document.querySelector(".slider-item.active").classList.remove('active');
      } catch (e) {}
      try {
        document.querySelector(".slider-indicator-item-btn.active").classList.remove('active');
      } catch (e) {}
    }

    if (this.classList.contains("slider-item-1")) {
      this.classList.add("active");
      slider_1.classList.add('active');
    }
    else if (this.classList.contains("slider-item-2")) {
      this.classList.add("active");
      slider_2.classList.add('active');
    }
    else if (this.classList.contains("slider-item-3")) {
      this.classList.add("active");
      slider_3.classList.add('active');
    }
  });
});


// модальное окно
var btn_modal_show = document.querySelector(".contacts-box-write-us");
var modal = document.querySelector(".modal-write-us");
var btn_modal_close = document.querySelector(".modal-close");

btn_modal_show.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!modal.classList.contains("modal-show")) {
    modal.classList.add("modal-show");
  }
});

btn_modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  try {
    modal.classList.remove("modal-error");
  } catch (e) {}
  if (modal.classList.contains("modal-show")) {
    modal.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    evt.preventDefault();
    try {
      modal.classList.remove("modal-error");
    } catch (e) {}
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});

// проверка формы
var btn_modal_submit = document.querySelector(".btn-modal-write-us");
var modal_input_name = document.querySelector(".modal-write-us-form [name=name]");
var modal_input_email = document.querySelector(".modal-write-us-form [name=email]");
var modal_input_text = document.querySelector(".modal-write-us-form [name=mail_text]");

btn_modal_submit.addEventListener("click", function (evt) {
  try {
    modal.classList.remove("modal-error");
  } catch (e) {}
  try {
    modal_input_name.classList.remove("error");
  } catch (e) {}
  try {
    modal_input_email.classList.remove("error");
  } catch (e) {}
  try {
    modal_input_text.classList.remove("error");
  } catch (e) {}



  if (!modal_input_name.value ||
    !modal_input_email.value ||
    !modal_input_text.value) {
    evt.preventDefault();
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }

  if (!modal_input_name.value) {
    modal_input_name.classList.add("error");
  }
  if (!modal_input_email.value) {
    modal_input_email.classList.add("error");
  }
  if (!modal_input_text.value) {
    modal_input_text.classList.add("error");
  }
});
