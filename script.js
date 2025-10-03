const leftArrow = document.querySelector('.arrows .left');
const rightArrow = document.querySelector('.arrows .right');
const items = document.querySelectorAll('.slider .item');
const indicators = document.querySelectorAll('.indicators ul li');

let currentIndex = 0;

function showItem(index) {
    items.forEach(item => item.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    items[index].classList.add('active');
    indicators[index].classList.add('active');
}

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentIndex = i;
        showItem(currentIndex);
    });
});

showItem(currentIndex);
