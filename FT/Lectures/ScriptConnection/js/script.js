'use strict';

const p = document.querySelectorAll('p');
console.log(p);

// const script = document.createElement('script');
// script.src = 'js/test.js';
// script.async = false; // По умолчанию такие элементы создаются, как async
// document.body.append(script); 

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // По умолчанию такие элементы создаются, как async
    document.body.append(script); 
}

loadScript('js/test.js');
loadScript('js/test2.js');