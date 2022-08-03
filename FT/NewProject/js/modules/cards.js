function cards() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price  = price;
            this.classes = classes; // устаревший метод задания по умолчанию не сработает, т.к. пустой массив не превращается в логический false
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer; 
        }

        render() { // классическое название для метода, формирующего вёрстку
            const element = document.createElement('div');
            if (this.classes.length == 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
                `;
            this.parent.append(element);
        }
    }

    const getResource = async (url) => { // настраивает запрос, посылает его на сервер, получает ответ и трансформирует его в json
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }

        return await res.json(); // promise
    };

    // Получение даннх с сервера обычным способом
    getResource('http://localhost:3000/menu') // возвращает обычный объект
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => { // деструктуризация
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
}

module.exports = cards;