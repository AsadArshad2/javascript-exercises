const removeFromArray = function(ary, ...targets) {
    // Iterate through the array backwards to avoid index issues when splicing
    for (let i = ary.length - 1; i >= 0; i--) {
        // Check if the current item is included in the targets using loose equality
        if (targets.includes(ary[i])) {
            ary.splice(i, 1);
        }
    }
    
    return ary;
}

// Do not edit below this line
module.exports = removeFromArray;
