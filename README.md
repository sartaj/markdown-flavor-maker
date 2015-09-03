# Markdown Flavor Maker
[![npm status](http://img.shields.io/npm/v/markdown-flavor-maker.svg)](https://www.npmjs.org/package/markdown-flavor-maker)
[![build status](https://secure.travis-ci.org/projectsocrates/markdown-flavor-maker.svg)](http://travis-ci.org/projectsocrates/markdown-flavor-maker)
[![dependency status](https://david-dm.org/projectsocrates/markdown-flavor-maker.svg)](https://david-dm.org/projectsocrates/markdown-flavor-maker)
[![coverage status](http://img.shields.io/coveralls/projectsocrates/markdown-flavor-maker.svg)](https://coveralls.io/r/projectsocrates/markdown-flavor-maker)

## **Make your own flavor of markdown**
This tool allows you to add your own rules to markdown.

### Example

**after-party-tea.tx.md**

```
// these are tabs

[ ] Parent Checkbox
  [ ] Child Checkbox
   [ ] GrandChild Checkbox

**This tea.** It's got that ++purple++.

@@@

@willie What are you trying to say?
- @ugk It's talking about __DJ Screw__.

@@@

```

**JavaScript**
```javascript

var fs = require('fs');
var flayvaMayka = require('markdown-flavor-maker');
var marked = require('marked');

var flavoredMarkdown = fs.readFileSync('TexasTeaFlavoredMarkdown.md');

var fmBeforeMarked = fm();
var fmAfterMarked = fm();

fmAfterMarked.bracketize('[ ]', '\n', '<input type="checkbox">', '</input>' );


fmBeforeMarked.bracketize('\t', '\n', '<p style="margin-left: 1vw">', '</p>' );
fmBeforeMarked.bracketize('\t\t', '\n', '<p style="margin-left: 2vw">', '</p>' );
fmBeforeMarked.bracketize('\t\t\t', '\n', '<p style="margin-left: 3vw">', '</p>' );
// ... could go to hundreds?


// Create an inline bracket by making the replacement a span
fmAfterMarked.bracketize('++', '++', '<span class="Tea-texas">','</span>');

// Create a block bracket by making the replacement a div
fmAfterMarked.bracketize('@@', '@@', '<div class="Comments">','</div>');

fmAfterMarked.bracketize('[ ]', '\n', '<input type="checkbox">', '</input>' );

/* Returns
 
 <p style="margin-left: 1vw"><input type="checkbox">Parent Checkbox</input> </p> 
 <p style="margin-left: 2vw"><input type="checkbox">Child Checkbox</input></p> 
 <p style="margin-left: 3vw"><input type="checkbox">GrandChild Checkbox</input></p>

 <p><strong>This tea.</strong> It's got that <span class="Texas-tea">purple</span>.</p>
 <div class="Comments">
   <p>@willie What are you trying to say?</p>
   <ul>
     <li>@ugk It&#39;s talking about <strong>DJ Screw</strong>.</li>
   </ul>
 </div>

*/

var rendered = flaverMaker.render(marked(texasFlavored));

```

# Bounties

* v1: $300 [complete] [unpaid] [@nhq] [duration: 6 hours]
* v2: $50 [incomplete] 
