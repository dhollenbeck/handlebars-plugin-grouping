(function(){
	'use strict';

	var grouping = function(context, size, options) {
		var ret = '';
		var cnt = 0;
		var groups = 0;
		var grouping = [];

		//group the data (context)
		for(var i=0, j=context.length; i<j; i++) {
			cnt++;
			grouping[groups] = grouping[groups] || [];
			grouping[groups].push(context[i]);

			//prepare for next iteration
			if(cnt === size){
				cnt = 0;
				groups++;
			}
		}

		//iterate grouping
		for(var i=0, j=grouping.length; i<j; i++) {
			ret = ret + options.fn(grouping[i], {
				data: {
					index: i,
					size: size,
					groups: groups
				}
			});
		}

		return ret;
	};

	//browser - go ahead and register the plugin
	if ('undefined' !== typeof window) {
		if('undefined' !== typeof window.Handlebars) Handlebars.registerHelper('grouping', grouping);
	}

	//node.js -  user needs to register the plugin
	if ('undefined' !== typeof module) {
		exports = module.exports = grouping;
	}

})()