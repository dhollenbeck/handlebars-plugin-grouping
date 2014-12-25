(function(Handlebars){
	'use strict';

	Handlebars.registerHelper('grouping', function(context, size, options) {
		var ret = '';
		var cnt = 0;
		var steps = 0;
		var grouping = [];

		//group the data (context)
		for(var i=0, j=context.length; i<j; i++) {
			cnt++;
			grouping[steps] = grouping[steps] || [];
			grouping[steps].push(context[i]);

			//prepare for next iteration
			if(cnt === size){
				cnt = 0;
				steps++;
			}
		}

		//iterate grouping
		for(var i=0, j=grouping.length; i<j; i++) {
			ret = ret + options.fn(grouping[i], {
				data: {
					index: i,
					size: size,
					steps: steps
				}
			});
		}

		return ret;
	});

})(Handlebars)