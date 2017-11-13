function getDoubleValue(multiply,number) {
    return number * multiply;
 }
 
function doubleAll(numbers) {
     var multi = 5;
     var result = numbers.map(getDoubleValue.bind(this,multi));
     return result
   }

module.exports = doubleAll