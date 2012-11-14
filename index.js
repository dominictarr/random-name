
var names = require('./names.json')
var first = require('./first-names.json')
var middle = require('./middle-names.json')
var place = require('./places.json')

function r(names) {
  return function () {
    return names[~~(Math.random()*names.length)]
  }
}

var random = module.exports = function () {
  return random.first() + ' ' +random.last()
}

random.first   = r(first)
random.last    = r(names)
random.middle  = r(middle)
random.place   = r(place)

if(!module.parent) {
  var l = process.argv[2] || 10
  while (l--)
    console.log(random.first(), '.', random.middle(), '.', random.last()
    , ',', random.place())
}
  
