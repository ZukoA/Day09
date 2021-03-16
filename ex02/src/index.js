function myFuntion(myParameter) {
    if (myParameter) {
        return "The parameter is true!";
    }
    return "The parameter is false!";
}
console.log(myFuntion(true));
console.log(myFuntion(false));
module.exports = myFuntion;