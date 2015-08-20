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

// Create an inline bracket by making the replacement a span
flayvaMayka.bracketize('++', '++', '<span class="Tea-texas">','</span>');

// Create a block bracket by making the replacement a div
flayvaMayka.bracketize('@@', '@@', '<div class="Comments">','</div>');

/* Returns

 <p><strong>This tea.</strong> It's got that <span class="Texas-tea">purple</span>.</p>
 <div class="Comments">
   <p>@willie What are you trying to say?</p>
   <ul>
     <li>@ugk It&#39;s talking about <strong>DJ Screw</strong>.</li>
   </ul>
 </div>

*/

var rendered = flayvaMayka.render(marked(texasFlavored));

```
