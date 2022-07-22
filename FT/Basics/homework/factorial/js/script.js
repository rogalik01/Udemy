function factorial(a) {
    if (a == 0) {
        return 1;
    } else {
        return a * factorial(a-1);
    }
}

for (let i = 0; i <= 20; i++) {
    console.log(`${i}! = ${factorial(i)}`);
}