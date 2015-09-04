CQ.Collections.SampleCollection = Backbone.Collection.extend({
	model: CQ.Models.Sample,

	urlRoot: 'http://yoursite.com/api/samples'
});