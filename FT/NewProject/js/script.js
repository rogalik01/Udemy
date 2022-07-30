'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none'; прямое обращение к inline стилям (не используются)
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { // = 0 - Значение по умолчанию
        // tabsContent[i].style.display = 'block'; // Чаще обращаются не напрямую к стилям, а используют классы
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) { // попали точно по классу
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    

    // Timer
    const deadline = '2022-07-28';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()), // разница между дедлайном и нынешним временем
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock(); // запускаем сначала здесь, чтобы не ждать 1000мс

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            }
        }
    }
    setClock('.timer', deadline);





    // Модальные окна
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        //modal.classList.toggle('show');
        document.body.style.overflow = 'hidden'; // при открытии модального окна запрещаем прокручивание страницы
        clearInterval(modalTimerId); // очищаем Интервал, если пользователь уже открывал модальное окно
    }

    modalTrigger.forEach((item) => {
        item.addEventListener('click', openModal);
    });

    function closeModal(item) {
        modal.classList.add('hide');
        modal.classList.remove('show'); 
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') { // именно модальное окно, а не modal__dialog
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')) { // код нажатой клавиши (гуглим http://keycode.info) 
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 150000000); // спустя 15 секунд после открытия сайта окно открывается самостоятельно

    function showModalByScroll() {
        if (window.pageYOffset /* прокрученная часть */ + document.documentElement.clientHeight/* видимая часть без прокрутки */ >= document.
        documentElement.scrollHeight - 1) { // высота с учётом прокрутки
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // сделали отдельную функцию, чтобы было возможно удалить обработчик
        }
    }

    window.addEventListener('scroll', showModalByScroll); // {once: true} в arg3, чтобы не открывалось каждый раз после прокрутки
    





    // Наше меню на день
    // class MenuCard {
    //     constructor(subtitle, description, price) {
    //         this.subtitle = subtitle;
    //         this.description = description;
    //         this.price = price;
    //     }

    //     createMenuElement(element) {
    //         element.querySelector('.menu__item-subtitle').innerHTML = this.subtitle;
    //         element.querySelector('.menu__item-descr').innerHTML = this.description;
    //         element.querySelector('.menu__item-total span').innerHTML = this.price;
    //     }
    // }
    // const menu = document.querySelectorAll('.menu__item');
    // const firstMenuItem = new MenuCard('Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '229'),
    // secondMenuItem = new MenuCard('Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '550'),
    // thirdMenuItem = new MenuCard('Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ', '430');

    // firstMenuItem.createMenuElement(menu[0]);
    // secondMenuItem.createMenuElement(menu[1]);
    // thirdMenuItem.createMenuElement(menu[2]);
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
    // getResource('http://localhost:3000/menu') // возвращает обычный объект
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => { // деструктуризация
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });
    // const div = new MenuCard(...);
    // div.render();
   
    // Получение данных с сервера с помощью библиотеки axios
    axios.get('http://localhost:3000/menu')
    .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => { // деструктуризация
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });


    // Forms        Shift+F5 - сбросить кэш страницы
    const forms = document.querySelectorAll('form') ;

    const message = {
        loading: 'img/form/spinner.svg',
        success: "Thanks! We'll contact with you soon!",
        failure: 'Something went wrong...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    // выносим функционал по общению с сервером в отдельную функцию
    const postData = async (url, data) => { // настраивает запрос, посылает его на сервер, получает ответ и трансформирует его в json
        const res = await fetch(url, { // await позволяет дождаться окончания действия функции
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json(); // promise
    }; 

    function bindPostData(form) { // отвечает за привязку постинга
        // form.addEventListener('submit', (e) => { // срабатывает каждый раз, когда пытаемся отправить какую-нибудь форму
        //     e.preventDefault();                  // enter или клик мыши по button

        //     const statusMessage = document.createElement('div');
        //     statusMessage.classList.add('status');
        //     statusMessage.textContent = message.loading;
        //     form.append(statusMessage);

        //     const request = new XMLHttpRequest();
        //     request.open('POST', 'server.php');

        //     request.setRequestHeader('undefined', 'multipart/form-data'); // заголовок при работе не с JSON устанавливать не нужно
        //     const formData = new FormData(form); // в вёртске у каждого инпута (input, checkbox и т.д.) обязательно должен указываться атрибут name

        //     request.send(formData);

        //     request.addEventListener('load', () => {
        //         if (request.status === 200) {
        //             console.log(request.response);
        //             statusMessage.textContent = message.success;
        //             form.reset(); // сбрасываем форму
        //             setTimeout(() => {
        //                 statusMessage.remove();
        //             }, 5000);
        //         } else {
        //             statusMessage.textContent = message.failure;
        //         }
        //     });

        // });


        // вариант через JSON
        // form.addEventListener('submit', (e) => { // срабатывает каждый раз, когда пытаемся отправить какую-нибудь форму
        //     e.preventDefault();                  // enter или клик мыши по button

        //     const statusMessage = document.createElement('img');
        //     statusMessage.src = message.loading;
        //     statusMessage.style.cssText =`
        //         display: block;
        //         margin: 0 auto; 
        //     `; // располагаем по центру
        //     form.insertAdjacentElement("afterend", statusMessage); // arg1 - куда, arg2 - что

        //     const request = new XMLHttpRequest();
        //     request.open('POST', 'server.php');

        //     request.setRequestHeader('Content-type', 'application/json'); // заголовок при работе не с JSON устанавливать не нужно
        //     const formData = new FormData(form); // в вёртске у каждого инпута (input, checkbox и т.д.) обязательно должен указываться атрибут name

        //     const object = {};
        //     formData.forEach(function(value,key){
        //         object[key] = value;
        //     });

        //     const json = JSON.stringify(object);

        //     request.send(json);

        //     request.addEventListener('load', () => {
        //         if (request.status === 200) {
        //             console.log(request.response);
        //             showThanksModal(message.success);
        //             form.reset(); // сбрасываем форму
        //             statusMessage.remove();
        //         } else {
        //             showThanksModal(message.failure);
        //         }
        //     });

        // });
    // }


        // Вариант через fetch
        form.addEventListener('submit', (e) => { // срабатывает каждый раз, когда пытаемся отправить какую-нибудь форму
            e.preventDefault();                  // enter или клик мыши по button

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText =`
                display: block;
                margin: 0 auto; 
            `; // располагаем по центру
            form.insertAdjacentElement("afterend", statusMessage); // arg1 - куда, arg2 - что

            const formData = new FormData(form); // в вёртске у каждого инпута (input, checkbox и т.д.) обязательно должен указываться атрибут name
            const json = JSON.stringify(Object.fromEntries(formData.entries())); // formData -> массив массивов -> объект -> JSON

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset(); // сбрасываем форму
            });

            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.success);
            //         form.reset(); // сбрасываем форму
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });

        });
    }

    function showThanksModal(message) {
        const previousModalDialog = document.querySelector('.modal__dialog');
        
        previousModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            previousModalDialog.classList.add('show');
            previousModalDialog.classList.remove('hide');
            closeModal();
        }, 5000);
    }


    // npm init
    // npm i json-server (-g/l) (--save-dev для разработки/--save для работы) --save-dev
    // json-server позволяет использовать json файлы, как маленькую БД 

    // в дальнейшем любой пользователь, скачавший проект с гита, может установить все пакеты командой npm i
    // благодаря файлу package.json
    // npx json-server db.json  запускает json сервер и отображает несколько endpoint'ов, к которым в дальнейшем можно обращаться, т.е.
    // путей, куда можем делать запросы




    // slider (первый простой вариант)
    // const slides = document.querySelectorAll('.offer__slide'),
    //       pointerLeft = document.querySelector('.offer__slider-prev'),
    //       pointerRight = document.querySelector('.offer__slider-next');

    // const totalAmountOfSlidePics = document.querySelector('#total');
    // totalAmountOfSlidePics.innerHTML = getZero(slides.length);

    // const currentNumberOfSlidePic = document.querySelector('#current');
    // currentNumberOfSlidePic.innerHTML = '01';
    // let slideIndex = 1;

    // function showSlideContent(i = 0) {
    //     slideIndex += i;
    //     if (slideIndex < 1) {
    //         slideIndex = slides.length;
    //     } else if (slideIndex == slides.length + 1) {
    //         slideIndex = 1;
    //     }
    //     currentNumberOfSlidePic.innerHTML = getZero(slideIndex);
    //     slides.forEach(item => item.classList.add('hide'));
    //     slides[slideIndex - 1].classList.add('show', 'fade');
    //     slides[slideIndex - 1].classList.remove('hide');
    // }
    
    // showSlideContent();

    // pointerLeft.addEventListener('click', (e) => {
    //     showSlideContent(-1);
    // });

    // pointerRight.addEventListener('click', (e) => {
    //     showSlideContent(1);
    // });

    // slider (вариант карусели)
    const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width; // получаем объект с вычисленными стилями и извлекаем ширину
    
    // Точки в слайдере
    const slider = document.querySelector('.offer__slider');

    let slideIndex = 1;
    let offset = 0; // сколько уже отступили 

    total.textContent = getZero(slides.length);
    current.textContent = getZero(slideIndex);

    slidesField.style.width = 100 * slides.length + '%'; // проценты ширины родителя
    slidesField.style.display = 'flex';
    slidesField.style.transition = "0.5s all";

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    // Обёртка для точек
    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, -2) * (slides.length - 1)) { // последний слайд
            offset = 0;
        } else {
            offset += +width.slice(0, -2); // с помощью slice вырезаем 'px'
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        current.textContent = getZero(slideIndex);

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, -2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, -2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        current.textContent = getZero(slideIndex);

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset =  offset = +width.slice(0, -2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            current.textContent = getZero(slideIndex);
            
            dots.forEach(dot => dot.style.opacity = '0.5');
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
});