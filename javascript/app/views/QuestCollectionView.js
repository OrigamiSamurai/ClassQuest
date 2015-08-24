var QuestCollectionView = Backbone.Epoxy.View.extend({

	el: $('#QuestContainer'),

	initialize: function() {
    _.bindAll(this, 'render', 'renderQuest', 'onSubmit', 'onCreated', 'onError');// onsubmits are currently used for saving lower level items
    this.model.bind('reset', this.render);
    this.model.bind('add', this.renderQuest);

    this.render(); 
	},

	bindings: {
		"input.NewQuestPeriod":"value:integer(period)",
		"input.NewQuestName":"value:name"
	},

	events: {
		"click #CreateQuest": "onSubmit"
	},

	render: function() {
		this.$el.html("<input type=\"button\" id=\"CreateQuest\" value=\"Create Quest\" />"+
			"<br>Period: <input type=\"text\" id=\"NewQuestPeriod\">"+
			"<br>Name: <input type=\"text\" id=\"NewQuestName\">"
			);
		this.applyBindings();
		this.model.forEach(this.renderQuest)
		return this;
	},

	renderQuest: function(quest) {
		var questView = new QuestView({model:quest});
		this.$el.append(questView.render().$el);
	},

	onCreated: function(quest, response) {
		this.model.add(quest);
	},

	onError: function(quest, response) {
		console.log("Error saving quest.", quest, response);
	},

	onSubmit: function() {
		var quest = new Quest({
			name:$('#NewQuestName').val(),
			period:$('#NewQuestPeriod').val()
		});
		quest.save({}, {
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