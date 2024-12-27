// Конструктор слайд-шоу
let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);
startSlideTimer();

function plusSlides(n) 
{
    resetSlideTimer();
    showSlides(slideIndex += n);
}

function currentSlide(n) 
{
    resetSlideTimer();
    showSlides(slideIndex = n);
}

function showSlides(n) 
{
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

function startSlideTimer() 
{
    slideTimer = setInterval(() => plusSlides(1), 5000);
}

function resetSlideTimer() 
{
    clearInterval(slideTimer);
    startSlideTimer();
}

// Прокрутка товаров
// let scrollHorizontal = document.querySelector('.slider-container')
// let rightBytton = document.getElementById('right-btn')
// let leftBytton = document.getElementById('left-btn')

// rightBytton.addEventListener('click', ()=> {
//     scrollHorizontal.scrollLeft += 1000;
// });

// leftBytton.addEventListener('click', ()=> {
//     scrollHorizontal.scrollLeft -= 1000;
// });

// JavaScript для управления слайдером
const slider = document.querySelector('.slider'); // Контейнер с карточками
let currentScrollPosition = 0; // Текущая позиция прокрутки
const cardWidth = document.querySelector('.product-card').offsetWidth + 20; // Ширина карточки + отступ

function scrollSlider(direction) {
    const visibleWidth = document.querySelector('.slider-container').offsetWidth; // Ширина видимой области
    const maxScrollPosition = Math.max(slider.scrollWidth - visibleWidth, 0); // Максимальная позиция прокрутки

    // Обновляем текущую позицию прокрутки
    currentScrollPosition += direction * cardWidth;

    // Проверяем границы
    currentScrollPosition = Math.max(0, Math.min(currentScrollPosition, maxScrollPosition));

    // Прокручиваем слайдер
    slider.style.transform = `translateX(-${currentScrollPosition}px)`;

    // Лог для отладки
    console.log({ currentScrollPosition, visibleWidth, maxScrollPosition });
}

document.addEventListener('DOMContentLoaded', () => {
    // Убедитесь, что код работает после загрузки DOM
    console.log('Скрипт подключен и работает');
});



// Проверка корректности ввода данных
var inputs = ['name', 'phone-number', 'question'];

function consult_submition(event) 
{
    event.preventDefault();

    let hasEmptyFields = false;

    for (let i = 0; i < inputs.length; i++) 
    {
        var input = document.getElementById(inputs[i]);

        if (input.value.trim() === "") 
        {
            input.style.borderColor = "red"; 
            hasEmptyFields = true;
        } 
        else input.style.borderColor = ""; 
    }

    if (hasEmptyFields) alert("Заполните все поля!");
    else document.getElementById("registration-form").submit();
}
