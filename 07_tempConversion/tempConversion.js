const convertToCelsius = function(far) {
  cel = ((far - 32) * 5/9);
  if (typeof(cel)== "integer"){
  return cel;}
  else{
    return parseFloat(cel.toFixed(1))22;
  }

};

const convertToFahrenheit = function(cel) {
  far = ((cel * 9/5) + 32);
    if (typeof(far)== "integer"){
      return far;}
    else{
      return parseFloat(far.toFixed(1));
    }
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
