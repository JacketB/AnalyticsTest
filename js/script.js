var overflowContainer = document.getElementById('plans');
overflowContainer.scrollTo((overflowContainer.offsetWidth * 1.05),0);

function menuWorker() {
    let element = document.getElementById("burger_menu");
    let buttonImage = document.getElementById("burger_button");

    if (element.style.top == "-100%") {
        element.style.top = "0";
        buttonImage.src = "assets/icons/close.svg";
    } else {
        element.style.top = "-100%";
        buttonImage.src = "assets/icons/burger.svg";
    }
}