function coutExist(output,input){
    if (input in output) {
        output[input]++;
      }
      else {
        output[input] = 1;
      }
      return output;     
}

function countWords(inputWords) {
   return inputWords.reduce(coutExist,{});
  }

  module.exports = countWords