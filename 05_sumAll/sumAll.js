const sumAll = function(x,y) {
    if (x<0||y<0){
        return "ERROR"
    }
    if (typeof(x)!= "number" || typeof(y)!= "number" ){
        return "ERROR"
    }
    if(Number.isInteger(x)== false ||Number.isInteger(y)== false ){
        return "ERROR"
    }
    
        if (x>y){
        let temp = x;
        x=y;
        y=temp;
    }
    let number = x;
    while (x<y){
        number = number + (x+1);
        x++;
    }

    return number;

};

// Do not edit below this line
module.exports = sumAll;
