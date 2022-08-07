'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColorRectanglewithText extends Rectangle { // наследует
    constructor(height, width, text, bgColor) {
        super(height, width); // вызывает супер-конструктор родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

const div = new ColorRectanglewithText(25, 10, 'Hello World!', 'red');

div.showMyProps();
console.log(div.calcArea());