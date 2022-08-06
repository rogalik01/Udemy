// RequestAnimationFrame подстраивает анимацию под частоту обновлений браузера

const btn = document.querySelectorAll('.btn')[0],
      canselBtn = document.querySelectorAll('.btn')[1],
      elem = document.querySelector('.box');  
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

let id, stop = false;

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300 && !stop) {
        requestAnimationFrame(myAnimation);
    }
}

// btn.addEventListener('click', () => requestAnimationFrame(myAnimation));
btn.addEventListener('click', () => {
    pos = 0;
    stop = false;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';
    id = requestAnimationFrame(myAnimation);
    console.log(id);
});

canselBtn.addEventListener('click', () => {
    stop = true;
});

