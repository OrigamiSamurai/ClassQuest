CQ.Views.AchievementCollectionView = Backbone.Epoxy.View.extend({

	el: '#AchievementContainer',

	initialize: function() {
		_.bindAll(this, 'render', 'renderAchievement', 'onSubmit', 'onCreated', 'onError');// onsubmits are currently used for saving lower level items
    	this.model.bind('reset', this.render);
    	this.model.bind('add', this.renderAchievement);

    	this.render(); 
	},

	bindings: {
		"input.NewAchievementName":"value:name"
	},

	events: {
		"click #CreateAchievement": "onSubmit"
	},

	render: function() {
		this.$el.html("<input type=\"button\" id=\"CreateAchievement\" value=\"Create Achievement\" />"+
			"<br>Name: <input type=\"text\" id=\"NewAchievementName\">"
			);
		this.applyBindings();
		this.model.forEach(this.renderAchievement)
		return this;
	},

	renderAchievement: function(achievement) {
		var achievementView = new CQ.Views.AchievementView({model:achievement});
		this.$el.append(achievementView.render().$el);
	},

	onCreated: function(achievement, response) {
		this.model.add(achievement);
	},

	onError: function(achievement, response) {
		console.log("Error saving achievement.", achievement, response);
	},

	onSubmit: function() {
		var achievement = new CQ.Models.Achievement({
			name:$('#NewAchievementName').val(),
		});
		achievement.save({}, {
			success: this.onCreated,
			error: this.onError
		});
	},

	save: function() {
    this.model.save({}, {
	    success: function (model, response, options) {
          //model.set({updatedDate:response.updatedDate});
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }

});