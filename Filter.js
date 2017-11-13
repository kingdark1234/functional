function getShortMessages(messages) {
  var resultFristFilter;
  resultFristFilter = messages.filter(function(m){
      return m.message.length < 50;
  })
  return resultFristFilter.map((resultFristFilter) => resultFristFilter.message);
}

  module.exports = getShortMessages