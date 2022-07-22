const body = document.querySelector('body');
body.addEventListener('click', (event)=> {
    start();
}
);

function start() {
    
let choice, res;

while (true) {
    showMenu();
    choice = null;
    choice = intInput(choice, 'Choose a Task');

    switch (choice) {
        case 1:
            while (res != -1) {
                res = null;
                res = amountOfPages(intInput(res, "Enter a number of Page"));
            }
            break;
        case 2:
            while (res != -1) {
                res = null;
                res = prompt("Enter a Pangram");
                alert(`It is${isPangram(res) ? '' : 'not'} a pangram`);
            }
            break;
        case 0:
            alert('The program is finished');
            return 0;
        default:
            alert(`There is no task with number ${choice}`);
    }
}
}
function showMenu() {
    alert('Task0: exit\n' +
    'Task1: amountOfPages\n' +
    'Task2: isPangram');
}
function intInput(str, question) {
    while (!str) {
        str = prompt(question, '');
        if (str === '0') {
            return 0;
        } else if(!+str) {
            alert('Wrong inpurt... Try again');
        }
    } 
    return +str;
}
function isPangram(string) {
    let strSet = new Set(string.toLowerCase().replace(/\s/g, ''));
    return (strSet.size == 26) ? true : false;
}
function amountOfPages(number) {
    if (number == -1) {
        return -1;
    }

    let res = '';
    for(let i = 1; i <= number; i++) {
        res += i; 
    }
    alert(res.length + ' ' + res);
    return res.length;
}



