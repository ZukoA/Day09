function functionElse(num) {
    if (num > 5) {
        return "Bigger then 5";
    } else {
        return "5 or smaller";
    }
}
console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));

module.exports = functionElse;
