function modal() {
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
}