var marked = require('marked') // markdown parser and compiler

var qm = require('quotemeta')  // precedes characters not matching /[A-Za-z_0-9]/
                               // by a backslash in the returned string

var p_rules = ['<p>', '</p>', '', '']

var p_regx = new RegExp(qm(p_rules[0]) + '([\\s\\S]*?)' + qm(p_rules[1]), 'g')

module.exports =  fm

function fm(){

  var newRules = []

  return {
    bracketize: bracketize,
    render: render
  }

  /**
   * Add a new conversion rule
   *
   * @param  {String} a   start mark
   * @param  {String} b   end mark
   * @param  {String} x   start output
   * @param  {String} y   end output
   * @return {void}       nothing
   */
  function bracketize(a, b, x, y){
    newRules.push([a, b, x, y])
  }

  /**
   * Convert given markdown HTML to your custom HTML using the rules you added
   */
  function render (text){

    newRules.forEach(function(rules){

      // find all text between the start and end marks of this rule
      var regx = new RegExp(qm(rules[0]) + '([\\s\\S]*?)' + qm(rules[1]))
      while(true){

        // look for instances of this rule in the given text
        var match = regx.exec(text)
        if (!match) break;

        // match.index is the start index of the match
        // match[1] is the text captured between the rule's marks
        // take the matched text, and surrounding <p> tags if there are any
        var expanded = text.slice(match.index-3, match.index + match[1].length + 4)

        // maybe `marked` decided to surround our rule with <p> tags...
        if (p_regx.exec(expanded)) {
          regx = new RegExp(qm('<p>' + rules[0] + '</p>') + '([\\s\\S]*?)' + qm('<p>' + rules[1] + '</p>'))
          match = regx.exec(text)
        }

        // apply the current rule to the text
        text = text.replace(regx, rules[2] + render(match[1]) + rules[3])
      }
    })

    return text

  }
}
