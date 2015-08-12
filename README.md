# Markdown Flavor Maker
[![npm status](http://img.shields.io/npm/v/markdown-flavor-maker.svg)](https://www.npmjs.org/package/markdown-flavor-maker)
[![dependency status](https://david-dm.org/projectsocrates/markdown-flavor-maker.svg)](https://david-dm.org/projectsocrates/markdown-flavor-maker)
[![coverage status](http://img.shields.io/coveralls/sartaj/lean-web-components.svg)](https://coveralls.io/r/sartaj/lean-web-components)

## **Make your own flavor of markdown** 
This tool allows you to add your own rules to markdown. It is highly inspired by [Mistune](https://github.com/lepture/mistune).

```javascript

var flayvaMayka = require('markdown-flavor-maker');

// Exposes marked setOptions function.
flayvaMayka.setOptions();

flayvaMayka.addRule.brackets('++', '++').replace('<span class="drank">','</span>');

flayvaMayka.addRule.brackets('$+', '+$').replace('<h1 class="grill">','</h1>');

// Outputs <p><strong>This drank tho.</strong> It's got that <span class="drank">purple</span>.
flayvaMayka.render("**This drank.** It's got that ++purple++"), 

// Outputs <p><strong>This drank tho.</strong> It's got that <strong><span class="drank">purple</span></strong>.
flayvaMayka.render("**This drank.** It's got that **++purple++**"), 

// Outputs <p><span class="grill">This drank tho.</span> It's got that <strong><span class="drank">purple</span></strong>.
flayvaMayka.render("**This $+drank+$. It's got that **++purple++**"), 

// Available options
flayvaMayka.addRule.brackets();
flayvaMayka.addRule.regex();

```

