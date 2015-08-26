var SampleCollection = Backbone.Collection.extend({
	model: Sample,

	urlRoot: 'http://yoursite.com/api/samples'
});