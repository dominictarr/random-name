
var names = require('./names.json')

var random = module.exports = function () {
  return names[~~(Math.random()*names.length)]
}

if(!module.parent) {
  var l = process.argv[2] || 10
  while (l--)
    console.log(random())
}
  
