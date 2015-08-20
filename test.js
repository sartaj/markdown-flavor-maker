var test = require('tape');
var marked = require('marked');
var flavorMaker = require('./');
var fs = require('fs');

test('inline element should convert to span', function(t){

  var fm = flavorMaker();

  fm.bracketize('++', '++', '<span class="plusplus">', '</span>');

  var render = fm.render(marked('Hello, ++world++'));

  t.equals(render, '<p>Hello, <span class="plusplus">world</span></p>\n');

  t.end();

});

test('block element should covert to div', function (t) {

  var fm = flavorMaker();

  fm.bracketize('@@@', '@@@', '<div class="comments-section">', '</div>');

  var testBlock = fs.readFileSync('test.md', 'utf8');
  var render = fm.render(marked(testBlock));

  t.equals(render,
  '<h2 id="what-s-up">What&#39;s up</h2>\n' +
  '<p>++Drank for all the peoplez++</p>\n' +
  '<div class="comments-section">\n' +
  '<p>@bob I don&#39;t get what this means?</p>\n' +
  '<ul>\n<li>@sarah It means <strong>whatever</strong> you want to mean.</li>\n</ul>\n' +
  '</div>\n');

  t.end();

});
