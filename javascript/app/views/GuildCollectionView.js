CQ.Views.GuildCollectionView = Backbone.Epoxy.View.extend({

	el: '#GuildContainer',

	initialize: function() {
		_.bindAll(this, 'render', 'renderGuild', 'onSubmit', 'onCreated', 'onError');// onsubmits are currently used for saving lower level items
    	this.model.bind('reset', this.render);
    	this.model.bind('add', this.renderGuild);

    	this.render(); 
	},

	bindings: {
		"input.NewGuildName":"value:name"
	},

	events: {
		"click #CreateGuild": "onSubmit"
	},

	render: function() {
		this.$el.html("<input type=\"button\" id=\"CreateGuild\" value=\"Create Guild\" />"+
			"<br>Name: <input type=\"text\" id=\"NewGuildName\">"
			);
		this.applyBindings();
		this.model.forEach(this.renderGuild)
		return this;
	},

	renderGuild: function(guild) {
		var guildView = new CQ.Views.GuildView({model:guild});
		this.$el.append(guildView.render().$el);
	},

	onCreated: function(guild, response) {
		this.model.add(guild);
	},

	onError: function(guild, response) {
		console.log("Error saving guild.", guild, response);
	},

	onSubmit: function() {
		var guild = new CQ.Models.Guild({
			name:$('#NewGuildName').val(),
		});
		guild.save({}, {
			success: this.onCreated,
			error: this.onError
		});
	},

	save: function() {
    this.model.save({}, {
	    success: function (model, response, options) {
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }

});