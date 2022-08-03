function forms() {
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
}

module.exports = forms;