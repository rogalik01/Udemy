function Task1() {
    const films = [
        {
            name: 'Titanic',
            rating: 9
        },
        {
            name: 'Die hard 5',
            rating: 5
        },
        {
            name: 'Matrix',
            rating: 8
        },
        {
            name: 'Some bad film',
            rating: 4
        }
    ];

    function showGoodFilms() {
        return films.filter(item => (item.rating >= 8));
    }

    console.log(showGoodFilms());






    function showListOfFilms() {
        return films.map(item => item.name).reduce((sum, current) => sum + ', ' + current);
    }

    console.log();

    console.log(showListOfFilms());

    function setFilmsIds() {
        return films.map((item, index) => {
            item.id = index + 1;
            return item;
        });
    }

    console.log();

    console.log(setFilmsIds());






    const tranformedArray = setFilmsIds();

    function checkFilms(tranformedArray) {
        return !tranformedArray.some(item => item.id === 'undefined');
    }

    console.log(checkFilms(tranformedArray));
}

// Task1();


function Task2() {
    const funds = [
        {amount: -1400},
        {amount: 2400},
        {amount: -1000},
        {amount: 500},
        {amount: 10400},
        {amount: -11400}
    ];

    function getPositiveIncomeAmount() {
        return funds.filter(item => item.amount > 0).reduce((sum, current) => sum + current.amount, 0);
    }

    console.log(getPositiveIncomeAmount());
    console.log();




    function getTotalIncomeAmount() {
        if (funds.some(item => item.amount < 0)) {
            return funds.reduce((sum, current) => sum + current.amount, 0);
        } else {
            getPositiveIncomeAmount();
        }
    }
    console.log(getTotalIncomeAmount());
}

Task2();