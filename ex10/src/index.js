function logicOrder(num) {
    if (num < 5) {
        return "Less then 50";
    } else if (num < 10) {
        return "Less then 100";
    } else {
        return "Greater than or equal to 100";
    }
}
console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));

module.exports = logicOrder;
