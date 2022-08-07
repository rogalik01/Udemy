// Rest-оператор противоположен spread (spread раскладывал сущность на отдельные элементы)
// Он позволяет складывать отдельные элементы в один массив

const log = function(a, b, ...rest) { // непоределённое кол-во эл-в
    console.log(a, b, ...rest);
};

log('basic', 'rest', 'operator', 'usage'); 




// Параметры по умолчанию

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; // раньше делали так
    console.log(number * basis);
}

calcOrDouble(3);