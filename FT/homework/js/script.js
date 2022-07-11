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
task10(10);