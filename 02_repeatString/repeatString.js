const repeatString = function(word, number) {
    if (number<0){
        return "ERROR"
    }
    let multiplyer = number;
    let final = word.repeat(number);
    return final;
};

// Do not edit below this line
module.exports = repeatString;
