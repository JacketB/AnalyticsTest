function checkScreenSizeAndScroll() {
  var overflowContainer = document.getElementById('plans');

  if (window.matchMedia("(max-width: 768px)").matches) {
      overflowContainer.scrollTo((overflowContainer.offsetWidth * 0.07), 0);
  }
}

checkScreenSizeAndScroll();

window.addEventListener('resize', checkScreenSizeAndScroll);

function toggleMenu() {
  let element = document.getElementById("burger_menu");
  let buttonImage = document.getElementById("burger_button");
  
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let isOpen = element.classList.contains("open");

  if (isOpen) {
    element.classList.remove("open");
    element.style.top = "-100%";
    element.style.position = "absolute";
    buttonImage.src = "assets/icons/burger.svg";

    if (window.matchMedia("(max-width: 768px)").matches) {
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      window.scrollTo(0, parseInt(document.body.dataset.scrollY || '0'));
    }
  } else {
    element.classList.add("open");
    element.style.top = "0";
    element.style.position = "sticky";
    buttonImage.src = "assets/icons/close.svg";

    if (window.matchMedia("(max-width: 768px)").matches) {
      document.body.dataset.scrollY = scrollTop;

      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.top = `-${scrollTop}px`;
    }
  }
}



$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    center: true,
    responsiveClass: true,
    startPosition: 1,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      768: {
        items: 3,
        center: false,
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var selects = document.getElementsByClassName("custom-select");
  for (var i = 0; i < selects.length; i++) {
    var select = selects[i].querySelector(".select-selected");
    var items = selects[i].querySelector(".select-items");

    select.addEventListener("click", function() {
      this.classList.toggle("select-arrow-active");
      this.classList.toggle("select-active");
      items.classList.toggle("select-hide");
    });

    var options = items.getElementsByTagName("div");
    for (var j = 0; j < options.length; j++) {
      options[j].addEventListener("click", function() {
        var currentSelect = this.closest('.custom-select');
        var selected = currentSelect.querySelector(".select-selected");
        selected.innerHTML = this.innerHTML;
        items.classList.add("select-hide");
        select.classList.remove("select-arrow-active");

        select.classList.add("select-active");
      });
    }
  }

  document.addEventListener("click", function(e) {
    if (!e.target.matches('.select-selected')) {
      var selectItems = document.getElementsByClassName("select-items");
      var selectSelected = document.getElementsByClassName("select-selected");
      for (var i = 0; i < selectItems.length; i++) {
        selectItems[i].classList.add("select-hide");
      }
      for (var i = 0; i < selectSelected.length; i++) {
        selectSelected[i].classList.remove("select-arrow-active");

        if (selectSelected[i].innerHTML.trim() === "Please Select") {
          selectSelected[i].classList.remove("select-active");
        }
      }
    }
  });
});


