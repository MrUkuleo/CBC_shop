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

function scrollSlider(direction) 
{
    alert('Хуй');
}

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
