  $(document).ready(function(){
var burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  // console.log("клик по кнопке меню");
  document.querySelector(".navbar-right").classList.toggle("navbar-right--visible");
});

// модальное окно
var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__overlay");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible")
  modalDialog.addClass("modal__dialog--visible")
  $("body").addClass("modal-open");
}
function closeModal(event) {
  event.preventDefault()
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible")
  modalDialog.removeClass("modal__dialog--visible")
  $("body").removeClass("modal-open");
}
$(document).keydown(function (e) {
  if (e.keyCode === 27 ) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  });

  
  // обработка форм
  $('.form').each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Ваше полное имя",
        minlength: "Имя должно состоять не менее чем из двух букв",
      },
      email: {
        required: "Ваша почта",
        email: "Формат почты: name@domain.com"
      },
      phone: {
        required: "Ваш номер телефона",
        phone: "Формат телефона: +7-(999)-999-99-99",
        minlength: "Введите не менее 11 символов",
        },
      },
    });
  });
  $(".phone").mask("+7(999) 999-99-99");
  
  //Слайдер 1
  var categoriesSlider = new Swiper(".slider-categories__container", {
    
    slidesPerColumnFill: 'row',
    loop: false,
    navigation: {
      nextEl: ".slide-button--next",
      prevEl: ".slide-button--prev"
    },  
    
    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    
    breakpoints: {
      320: {slidesPerView: 2, slidesPerColumn: 2},
      560: {slidesPerView: 2, slidesPerColumn: 2},      
      767: {slidesPerView: 3, slidesPerColumn: 1, spaceBetween: 0},
      1200: {slidesPerView: 4, slidesPerColumn: 1, spaceBetween: 27}
    },
});

//Слайдер 2
var reviewsSlider = new Swiper(".slider-unreleased__container", {
  
  loop: false,
  navigation: {
    nextEl: '.unreleased__button--next',
    prevEl: '.unreleased__button--prev',
  },
  slidesPerView: 5,
    spaceBetween: 30,
    
    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    
    breakpoints: {
      200: {slidesPerView: 1},
      520: {slidesPerView: 2, spaceBetween: 20},
      767: {slidesPerView: 3},
      993: {slidesPerView: 4},
      1200: {slidesPerView: 5}
    },
});

//красное сердце
var menuButton = $(".card__like");
  menuButton.on("click", function () {  
    $(this).toggleClass("card__like--active");
}); 

// видео
var player;
$('.history__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-1', {
    height: '380',
    width: '100%',
    videoId: '2lqNY6dTTXs',
    events: {
      'onReady': videoPlay,
    }
  });
 })

 function videoPlay(event) {
   event.target.playVideo();
 }

// видео-1
var player;
$('.history__button--first').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-2', {
    height: '200',
    width: '100%',
    videoId: 'yRfSJldRx44',
    events: {
      'onReady': videoPlay,
    }
  });
 })

 function videoPlay(event) {
   event.target.playVideo();
 }

// видео-2
var player;
$('.history__button--two').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-3', {
    height: '200',
    width: '100%',
    videoId: 'UtoeksSypEk',
    events: {
      'onReady': videoPlay,
    }
  });
 })

 function videoPlay(event) {
   event.target.playVideo();
 }
 
// видео-3
var player;
$('.history__button--three').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-4', {
    height: '200',
    width: '100%',
    videoId: 'jlTaR7tHGiI',
    events: {
      'onReady': videoPlay,
    }
  });
})

function videoPlay(event) {
   event.target.playVideo();
 }
  
});