import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector) ;

    const message = {
        loading: 'img/form/spinner.svg',
        success: "Thanks! We'll contact with you soon!",
        failure: 'Something went wrong...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });
    

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
                showThanksModal(message.success, modalTimerId);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure, modalTimerId);
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

    function showThanksModal(message, modalTimerId) {
        const previousModalDialog = document.querySelector('.modal__dialog');
        
        previousModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

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
            closeModal('.modal');
        }, 5000);
    }
}

export default forms;