var XPCollectionView = Backbone.View.extend({
	collection: XPCollection,

	el: $('#xp-container'),

	initialize: function() {
		_.bindAll(this, 'render');

		this.collection = new XPCollection();
		this.collection.bind('reset', this.render);
		this.render();
	},

	events: {
		"click #createXP": "createNew"
	},

	render: function() {
		var self = this;
		this.$el.append("<ul><input type=\"button\" id=\"createXP\" value=\"Create XP\" /></ul>");
		console.log("fetching the collection...");
		fetchRequest = this.collection.fetch();
		fetchRequest.done(function() {
			_(self.collection.models).each(function(xp) {
				view = new XPView({model: xp});
				self.$el.append(view.el);	
			})
		});
	},

	createNew: function() {
		var newXP = new XP();
		this.collection.add(newXP);
		var newXPView = new XPView({model: newXP});
		this.$el.append(newXPView.el);
	}

	//TODO: ON SAVE NEW XP, POPULATE ID, MODIFY FOR UPDATE
    // AT THAT POINT - DONE WITH CRUD FOR XP SINGLE UNIT

	//EXPLORE BACKBONE RELATIONAL, FINISH SAVING, 

});