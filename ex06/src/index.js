function comparisonToEqual(a) {
    if (a > 33) {
        if (a >= 33) {
            return "Less then 10";
        }
        if (a < 33) {
            return "10 or over";
        }
        if (a <= 33) {
            return "More then 20";
        }
    }
    return "Less then 5";
}
console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));

module.exports = comparisonToEqual;
