CQ.AdventurerCollectionView = Backbone.Epoxy.View.extend({

	el: '#AdventurerContainer',

	initialize: function() {
	    _.bindAll(this, 'render', 'renderAdventurer', 'onSubmit', 'onCreated', 'onError');// onsubmits are currently used for saving lower level items
	    this.model.bind('reset', this.render);
	    this.model.bind('add', this.renderAdventurer); 

	    this.render();
	},

	events: {
		"click #CreateAdventurer": "onSubmit"
	},

	render: function() {
		this.$el.html("<input type=\"button\" id=\"CreateAdventurer\" value=\"Create Adventurer\" />"+
			"<br>First Name: <input type=\"text\" id=\"NewAdventurerFirstName\">"+
			"<br>Last Name: <input type=\"text\" id=\"NewAdventurerLastName\">"+
			"<br>Login: <input type=\"text\" id=\"NewAdventurerLogin\">"+
			"<br>Password: <input type=\"text\" id=\"NewAdventurerPassword\">"
			);
		this.model.forEach(this.renderAdventurer)

		return this;
	},

	renderAdventurer: function(adventurer) {
		var adventurerView = new CQ.AdventurerView({model:adventurer});
		this.$el.append(adventurerView.render().$el);
	},

	onCreated: function(adventurer, response) {
		this.model.add(adventurer);
	},

	onError: function(adventurer, response) {
		console.log("Error saving adventurer.", adventurer, response);
	},

	onSubmit: function() {
		var adventurer = new CQ.Adventurer({
			firstName:$('#NewAdventurerFirstName').val(),
			lastName:$('#NewAdventurerLastName').val(),
			login:$('#NewAdventurerLogin').val(),
			password:$('#NewAdventurerPassword').val()
		});
		adventurer.save({}, {
			success: this.onCreated,
			error: this.onError
		});
	},

	save: function() {
    this.model.save({}, {
	    success: function (model, response, options) {
          model.set({updatedDate:response.updatedDate});
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }

});