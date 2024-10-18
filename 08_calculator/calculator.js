const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(l) {
  var a = 0;
  for (let i=0; i<l.length;i++){
    a= a + l[i]
  }
  return a;
};

const multiply = function() {
   
};

const power = function(a,b) {
	var c = a
  for (i=b;i=>0;i--){
    c = c*a;
    }
    return c;
};

const factorial = function(a) {
  if (a == 1 || a == 0){
    return 1;
  }
  var c = 0;
  var b = a;
	for (i=a-1;i>0;i--){
    if(i!=0){
    b = b*i;
    
    }
  }
  return b;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
