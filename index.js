var fs = require('fs');
fs.readFile('data.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var tokens = JSON.parse(data);
  var result = tokens
    .map(token => token.symbol);
  console.log(result)
  return result;
});