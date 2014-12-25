handlebars-plugin-grouping
==========================

A grouping iterator plugin to group collections into groups of definable size.

##Template Usage

An example template to render a collection of thumbnails into a bootstrap grid row of 6 thumbnails per row.
```html
{{#grouping thumbnails 6}}
<div class="row">
	<div class="row-fluid" title="Row {{@index}} of {{@groups}} contains {{@size}} thumbnails.">
		{{#each this}}
			<div class="col-md-2">
				<img id="thumbnail-{{id}}" src="{{src}}" title="{{title}}"/>
			</div>
		{{/each}}
	</div>
</div>
{{/grouping}}
```


##Node.js

Installation:

```bash
npm install handlebars-plugin-grouping --save
```
Example:

```javascript
var grouping = require('handlebars-plugin-grouping');
var exphbs  = require('express-handlebars');

var hbs = exphbs.create({
	helpers: {
		grouping: grouping
	}
});
```
##License MIT
