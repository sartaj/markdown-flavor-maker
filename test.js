var test = require('tape')
var flavorMaker = require('./')


test('test one!', function(t){
  
  var fm = flavorMaker()

  fm.bracketize('++', '++', '<span class="plusplus">', '</span>')
  
  var render = fm.render('Hello, ++world++')

  t.equals(render, '<p>Hello, <span class="plusplus">world</span></p>\n')

  t.end()

})

test('test two!', function(t){
  
  var fm = flavorMaker()

  fm.bracketize('$-', '-$', '<div class="moneymoney">', '</div>')

  var render = fm.render('***Hello***, $-__world__-$')

  t.equals(render, '<p><strong><em>Hello</em></strong>, <div class="moneymoney"><strong>world</strong></div></p>\n')

  t.end()

})

