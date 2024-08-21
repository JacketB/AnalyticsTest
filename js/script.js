function menuWorker() {
    let element = document.getElementById("burger_menu");
    let buttonImage = document.getElementById("burger_button");

    if (element.style.top == "-100%") {
        element.style.top = "0";
        element.style.position = "sticky"
        buttonImage.src = "assets/icons/close.svg";
    } else {
        element.style.top = "-100%";
        element.style.position = "absolute"
        buttonImage.src = "assets/icons/burger.svg";
    }
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: false,                 // Бесконечный цикл
      margin: 10,                 // Отступы между слайдами
      center: true,               // Центрирование активного слайда
      responsiveClass: true,
      startPosition: 1,
      responsive: {
        0: {
          items: 1,               // Показывать 1 слайд на маленьких экранах
          center: true,
        },
        768: {
          items: 3,               // Показывать 2 слайда на средних экранах
          center: false,    // Убираем центрирование
        },
        1024: {
          items: 3,               // Показывать 3 слайда на больших экранах
          center: false,
        }
      }
    });
  });