const removeFromArray = function (array, ...removeFromArray) {
    removeFromArray.forEach((element) => {
        array = array.filter((e) => {
            return e !== element;
        })
    });
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
