const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modalScreen');
const closeModal = document.querySelector('.modal__close');
const Songs = document.querySelector('.actionSong');
const tipsModal = document.querySelector('.actionTips');
const dressCodeModal = document.querySelector('.actionDress');
const inviBtn = document.querySelector('.inviBtn');
const modalTitle = document.getElementById('modalTitle');
const formContent = document.getElementById('formSong');
const dias = document.querySelectorAll("#dias .number");
const horas = document.querySelectorAll("#horas .number");
const minutos = document.querySelectorAll("#minutos .number");
const segundos = document.querySelectorAll("#segundos .number");



var countDownDate = new Date('05/25/2024 20:37:55').getTime();

// Update the count down every 1 second
var eventCountDownDays = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dias[0].innerHTML = days;
    horas[0].innerHTML = hours;
    minutos[0].innerHTML = minutes;
    segundos[0].innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("reloj").innerHTML = '<p class="fin-cuenta">' +
        lang_textoFinalCuentaRegresiva + '</p>';
        $('.falta').text('');
    }
}, 1000);

// Songs.addEventListener('click', (e)=>{
//     e.preventDefault();
//     modal.classList.add('modal--show');
//     formContent.style.display = 'block';
//     paragraph.style.display = 'none';
//     modalTitle.innerHTML = '¡Sugerir Canción!';
// });

inviBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('first')
    modal.classList.add('modal--show');
    formContent.style.display = 'flex';
    formContent.style.flexDirection = 'column';
    modalTitle.innerHTML = 'Invitación';
});


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    formContent.style.display = 'none';
    modal.classList.remove('modal--show');
});



const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const autoSlide = () => {
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);