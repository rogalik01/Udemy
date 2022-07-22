const str = 'abcdefghijklmnopqrstuvwxyz';
console.log(str.length);
for (let i = 0; i < str.length; i++) {
    console.log(` ${str[i]} =  ${str[i].charCodeAt(0)}`);
}