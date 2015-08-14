var marked = require('marked')
var qm = require('quotemeta')

module.exports = function(){
  
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

    var render = marked(text)

    newRules.forEach(function(rules){
      
      var regx = new RegExp(qm(rules[0]) + '(.*?)' + qm(rules[1]))
      render = render.replace(regx, rules[2] + '$1' + rules[3])
      
    })
    
    return render

  }
}

