const leapYears = function(year) {
    const yes = true;
    const no = false;


    if(year % 4 == 0 ){
        if (year == 400){
            return  yes;
        }
        else if(year<400 && year % 100 == 0){
            return true;
        }
         
        
        else if (year % 100 == 0){
            if(year % 400 == 0){
                return true;
            }
            else{
                return no;
            }
        }
        else {
            return yes;
        }

    }
    else if (year % 4 !=0){
        return no;
    }



}


// Do not edit below this line
module.exports = leapYears;
