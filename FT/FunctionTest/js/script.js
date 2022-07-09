"use strict";

function progression(a, b) {
    let res =`${a}`;
    for (let i = 2; i <= b; i++) {
        if (b != 1 && i != b + 1) {
            res +=`---`;
        }
        res += a*i;
    }
    console.log(res);
}

progression(5, -3);