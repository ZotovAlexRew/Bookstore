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
      576: {slidesPerView: 2, slidesPerRow: 2},      
      767: {slidesPerView: 3, slidesPerColumn: 1, spaceBetween: 0},
      1200: {slidesPerView: 4, slidesPerColumn: 1, spaceBetween: 27}
    },
});

//Слайдер 2
var reviewsSlider = new Swiper(".unreleased-slider", {
  
  loop: false,
  navigation: {
    nextEl: '.unreleased-slider__button--next',
    prevEl: '.unreleased-slider__button--prev',
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
      480: {slidesPerView: 2, spaceBetween: 25},
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