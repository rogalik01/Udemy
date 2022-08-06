'use strict';

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const discount = normalizePrice(divide100(multiply20(200)));
console.log(discount);

//

function compose(...functionArray) {
    return functionArray.reduceRight((previousValue, currentValue) => currentValue(previousValue));
}
const res = compose(normalizePrice, divide100, multiply20, 200);
console.log(res);



function composeWithArgs(...fns) {
    return fns.reduceRight((previousValue, currentValue) => (...args) => currentValue(previousValue(...args)));
}




const add1 = function(a){return a + 1;};
const addAll3 = function(a,b,c){return a + b + c;};
console.log(composeWithArgs(add1,addAll3)(1,2,3));