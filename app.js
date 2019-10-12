const screenPos = window.innerHeight / 0.95;
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');

function fade1() {
    img1Pos = img1.getBoundingClientRect().top;
    if (img1Pos < screenPos) {
        img1.classList.add('img1-visible');
    }
}
function fade2() {
    img2Pos = img2.getBoundingClientRect().top;
    if (img2Pos < screenPos) {
        img2.classList.add('img2-visible');
    }
}
function fade3() {
    img3Pos = img3.getBoundingClientRect().top;
    if (img3Pos < screenPos) {
        img3.classList.add('img3-visible');
    }
}
function fade4() {
    img4Pos = img4.getBoundingClientRect().top;
    if (img4Pos < screenPos) {
        img4.classList.add('img4-visible');
    }
}

window.addEventListener('scroll', () => {
    fade1();
    fade2();
    fade3();
    fade4();
});
