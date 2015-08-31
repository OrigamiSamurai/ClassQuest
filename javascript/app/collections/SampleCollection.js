CQ.SampleCollection = Backbone.Collection.extend({
	model: CQ.Sample,

	urlRoot: 'http://yoursite.com/api/samples'
});