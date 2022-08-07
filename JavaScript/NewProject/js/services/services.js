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

const getResource = async (url) => { // настраивает запрос, посылает его на сервер, получает ответ и трансформирует его в json
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
    }

    return await res.json(); // promise
};

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

export {postData, getResource, getZero};