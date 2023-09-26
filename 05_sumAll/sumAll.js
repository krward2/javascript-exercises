const sumAll = function (num1, num2) {
    if (typeof (num1 + num2) !== "number" || num1 * num2 < 0) return "ERROR";
    let start;
    let end;
    let sum = 0;
    if (num1 > num2) {
        start = num2;
        end = num1;
    } else if (num2 > num1) {
        start = num1;
        end = num2;
    } else {
        return num1;
    }
    while (start <= end) {
        sum += start;
        start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
