const reverseString = function(string) {
    if(string.length === 0) return '';
    return string[string.length-1] + reverseString(string.substring(0, string.length-1))
};

// Do not edit below this line
module.exports = reverseString;
