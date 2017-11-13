function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(elementA){
        return goodUsers.some(function(elementB){
          console.log(elementA.id , elementB.id)
          return elementA.id === elementB.id; 
         })
      })  
    } 
}

  //testAllValid(simplearray);
  module.exports = checkUsersValid