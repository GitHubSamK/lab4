const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const guitars = ['guitar1.jpg', 'guitar2.jpg', 'guitar3.jpg', 'guitar4.jpg'];
const baseURL = '../images/';
let index = 1;


nxt.onclick = function (e) {
    e.preventDefault();
    slide.classList.add('fade-out');
    setTimeout(() => {
        slide.src = baseURL + guitars[index];
        slide.classList.remove('fade-out');
    }, 1000);
    index = (index + 1) % guitars.length;
    if (index >= guitars.length) {
        index = 0;
    }
};

prev.onclick = function (b) {
    b.preventDefault();
    index = (index - 1 + guitars.length) % guitars.length;
    slide.classList.add('fade-out');
    setTimeout(() => {
        slide.src = baseURL + guitars[index];
        slide.classList.remove('fade-out');
    }, 1000);
};

