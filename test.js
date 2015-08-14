var test = require('tape')
var flavorMaker = require('./')()

flavorMaker.bracketize('++', '++', '<span class="plusplus">', '</span>')

test('test one!', function(t){
  
  var render = flavorMaker.render('Hello, ++world++')

  t.equals(render, '<p>Hello, <span class="plusplus">world</span></p>\n')

  t.end()

})

