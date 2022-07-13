function anOldTask() {
    let arr = [5, 5, "Строка", 9, 8, "Строка побольше", 13];
    let result = [];
    for (let i = 0; result.length != arr.length; i++) {
        if(typeof(arr[i]) == "string") {
            result[i] = arr[i] + " done";
        } else {
            result[i] = +arr[i] * 2;
        }
    }
    console.log(arr);
    console.log(result);
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[arr.length - i - 1];
    }
    console.log(result);
}

function calculateVolumeAndArea(a) {
    let res;
    res = `Area of cube equils ` + a*6;
    res += `\nVolume equils ` +  a*a*a;

    if (isNaN(+a)) {
        return(`An error occured during the calculations`);
    } else {
        return res;
    }
}
function task7(a) {
    console.log(calculateVolumeAndArea(a));
}

function getCoupeNumber(spot) {
    if (isNaN(+spot) || spot < 0 || Math.round(spot) - spot != 0) {
        return `Error. Check the validity of entered number`;
    } else if (spot == 0 || spot > 36) {
        return `There is no spots with such number in the train`;
    } else {
        return `Your coupe number is ${Math.round(spot / 4)}`;
    }
}
function task8(spot) {
    console.log(getCoupeNumber(spot));
}


function getHoursAndMinutes(minutes) {
    if (isNaN(minutes) || minutes < 0) {
        return `Error. Check the validity of entered number`;
    } else if (minutes / 60 > 24) {
        return(`Unfortunately, there is only 24 hours in one day.\nYou should enter a smaller number...`);
    } else {
        let hours, hh, mm, T;
        hours = minutes / 60;
        hh = Math.floor(hours);
        mm = Math.round((hours - Math.floor(hours)) * 60);
        if (hh > 12) {
            hh -= 12;
            T = `PM`;
        } else {
            T = `AM`;
        }
        if (mm < 10) {
            mm = `0` + mm;
        }
        return(hh.toString() + `:` +  mm + ` ` + T);
    }
}
function task9(minutes) {
    console.log(getHoursAndMinutes(+minutes));
}




function FibonacciSequence(length) {
    let tmp1 = 0, tmp2 = 1, res = "";
    for (let i = 0; i < length; i++) {
        res += tmp1 + " ";
        let tmp = tmp2;
        tmp2 += tmp1;
        tmp1 = tmp;
    }
    return (res);
}

function task10(length) {
    console.log(FibonacciSequence(+length));
}








function task11(plan) {
    showExperience(plan);
    showProgrammingLangs(plan);
    plan.showAgeAndLangs();
}

function showExperience(plan) {
    let { exp } = plan;
    console.log("Experiens equils " + exp + " " + (exp == 1 ? "month" : "months"));
}

function showProgrammingLangs(plan) {
    for (let i in plan.langs) {
        console.log(`Language ${i} is studied by ${plan.langs[i]}`);
    }
}

 const personalPlanPeter = {
    age: 29,
    exp: 10,
    langs: {
        Php: '20%',
        Phyton: '98%',
        Pascal: '10%'
    },
    showAgeAndLangs: function() {
        let res = "", count = 0;
        for (let i in this.langs) {
            count++;
            if (count != 1) {
                res += ", ";
            }
            res += i;
        }
        console.log(`I'm ${this.age} years old and I'm studing ${res}`);
    }
 };


 
 function showFamily(arrOfStrings) {
    if (arrOfStrings.length == 0) {
        console.log("This family is empty.");
        return;
    }
    console.log(`This family includes ${[...arrOfStrings].join(", ")}`);
 }

 function task12(arr) {
    showFamily(arr);
    standartizeStrings(arr);
 }

 function standartizeStrings(arr) {
    arr.forEach(function (item) {
        console.log(item.toLowerCase());
    });
 }


function reverseStr(someString) {
    if (typeof(someString) !== "string") {
        console.log("Error!");
    }
    console.log(someString.split("").reverse().join(""));
}



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function avaiableCurr(arr, missingCurrencies) {
    console.log(arr.length);
    if (arr.length == 0) {
        console.log("There is no avaiable currencies.");
        return;
    }
    let res = "Avaiable Currencies: \n";
    for (let i = 0; i < arr.length; i++) {
        let check = true;
        for(let j = 0; j < missingCurrencies.length; j++)
        {
            console.log(`${arr[i]} == ${missingCurrencies[j]}`);
            if(arr[i] == missingCurrencies[j]) {
                check = false;
            }
        }
        if (check) {
            res += arr[i] + "\n";
        }
    }
    console.log(res);
}

function task13(firstPar, Curr1, Curr2) {
    reverseStr(firstPar);
    avaiableCurr([...Curr1, ...Curr2], ["CNY"]);
}


function task14() {
    sortStudentsByGroups(['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam']);
}

function sortStudentsByGroups(strArr) {
    let res = [];
    let tmp = [];
    strArr.sort();
    strArr.forEach( (value, index) => {
        tmp.push(value);
        if((index + 1) % 3 == 0) {
            res.push(tmp);
            tmp = [];
        }
    });
    res.push(`The rest of the students: ${tmp.join(", ")}`);
    console.log(`Our teams:\n${res.join("\n")}`);
}

task14();