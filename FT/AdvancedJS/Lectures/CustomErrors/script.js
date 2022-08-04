'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '3',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        // if (!blockObj.id) throw 'error';
        if (!blockObj.id) throw new SyntaxError(`Id is missing in data under the number ${i+1}.`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    if (e.name === "SyntaxError") {
        console.error(e.name);
        console.log(e.message);
        console.log(e.stack);
    } else {
        throw e;
    }
}

 
// const err = new Error('1');
// console.log(err.name, err.message, err.stack);

// const syntaxErr = new SyntaxError('2');
// console.log(syntaxErr.name, syntaxErr.message, syntaxErr.stack);

// const refErr = new ReferenceError('3');
// console.log(refErr.name, refErr.message, refErr.stack);

// const typeErr = new TypeError('3');
// console.log(typeErr.name, typeErr.message, typeErr.stack);