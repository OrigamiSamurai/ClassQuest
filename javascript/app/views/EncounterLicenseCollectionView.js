CQ.Views.EncounterLicenseCollectionView = Backbone.Epoxy.View.extend({

	el: '#EncounterLicenseContainer',

	initialize: function(options) {
		_.bindAll(this, 'render', 'renderEncounterLicense', 'onSubmit', 'onCreated', 'onError');// onsubmits are currently used for saving lower level items
    	this.model.bind('reset', this.render);
    	this.model.bind('add', this.renderEncounterLicense);

	this.questId = options.questId;

		console.log('encounter license view model',this.model);

    	this.render(); 
	},

	bindings: {
		//"input.NewEncounterLicenseName":"value:name"
	},

	events: {
		"click #CreateEncounterLicense": "onSubmit"
	},

	render: function() {
		this.$el.html(
			"<select class=\"encounterPicker\"></select>"+		
			"<input type=\"button\" id=\"CreateEncounterLicense\" value=\"Add encounter\" />"
			);
		this.applyBindings();
		console.log('rendeirng encounter license collection view');
		this.renderEncounterPicker();
		this.model.models.forEach(this.renderEncounterLicense)
		return this;
	},

	renderEncounterPicker: function () {
		var encounterPicker = new CQ.Views.EncounterPickerView({el:this.$el.find('.encounterPicker'),model:CQ.encounters})
		encounterPicker.render();
	},

	renderEncounterLicense: function(encounterLicense) {
		var view = new CQ.Views.EncounterLicenseView({model:encounterLicense});
		this.$el.append(view.render().$el);
	},

	onCreated: function(encounterLicense, response) {
		this.model.add(encounterLicense);
	},

	onError: function(encounterLicense, response) {
		console.log("Error saving encounter license.", encounterLicense, response);
	},

	onSubmit: function() {
		console.log(this.model);
		var encounterLicense = new CQ.Models.EncounterLicense({
			quest: this.questId,
			encounter: parseInt($('.encounterPicker').val())
		});
		console.log(this.model);
		/*encounterLicense.save({}, {
			success: this.onCreated,
			error: this.onError
		});*/
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