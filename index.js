var marked = require('marked')
var qm = require('quotemeta')

var p_rules = ['<p>', '</p>', '', '']

var p_regx = new RegExp(qm(p_rules[0]) + '([\\s\\S]*?)' + qm(p_rules[1]), 'g')

module.exports =  fm

function fm(){

  var newRules = []

  return {
    bracketize: bracketize,
    render: render
  }

  function bracketize(a, b, x, y){

    var rules = [a, b, x, y]
    newRules.push(rules)

  }

  function render (text){

    newRules.forEach(function(rules){
      var regx = new RegExp(qm(rules[0]) + '([\\s\\S]*?)' + qm(rules[1]))
      var matching = true;
      var matches = []
      while(matching){
        var i = 0
        if(matches.length){
          var t = matches.length - 1
          i = t.index + t[0].length
        }
        else trgx = regx
        var slice = text.slice(i)
        var test = trgx.exec(slice)



        if(test) var bound = test.input.slice(test.index-3, test.index + test[1].length + 4)

        if(test && p_regx.exec(bound)){
          trgx = new RegExp(qm('<p>' + rules[0] + '</p>') + '([\\s\\S]*?)' + qm('<p>' + rules[1] + '</p>'))
          test = trgx.exec(slice)
        }

        if(test){
          slice = slice.replace(trgx, rules[2] + render(test[1]) + rules[3])
          text = text.slice(0, i) + slice
        }
        else matching = false
      }
    })

    return text

  }
}
