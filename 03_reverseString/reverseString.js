const reverseString = function(x) {
    var slice = x.split("");
    var rev = slice.reverse();
    var jrev = rev.join("");
    return jrev;
};

// Do not edit below this line
module.exports = reverseString;
