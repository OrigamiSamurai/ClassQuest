var Student = Backbone.Model.extend({
	defaults: {
		ID: '',
		firstName: '',
		lastName: '',
		userName: '',
		password: '',
		encounters: new EncounterCollection(),
		level: 1
	},

	idAttribute: 'ID',

	initialize: function() {
		console.log("Student initialized");
		this.on("invalid", function(model, error) {
			console.log("An error has occurred during initialization: "+error);
		});
	},

	constructor: function (attributes, options) {
		console.log("Student's constructor has been called");
		Backbone.Model.apply(this, arguments);
	},

	validate: function(attr) {
		if (!attr.firstName) {
			return "Invalid firstName supplied.";
		}
	},

	urlRoot: 'http://localhost:9999/api/Students',

	getXPTotal: function() {
		var xpTotal = 0;
		_(this.attributes.encounters.models).each(function(encounter){
			xpTotal += encounter.attributes.awardedXP;
		})
		return xpTotal;
	},

	completeEncounter: function(encounter) {
		console.log("COMPLETE ENCOUNTER");
		this.attributes.encounters.add(encounter);
		this.checkForLevelUp();
	},

	checkForLevelUp: function() {
		console.log("CHECK FOR LEVEL UP");
		if (this.getXPTotal() > 200) {console.log("LEVEL UP")};
	}
});

var StudentCollection = Backbone.Collection.extend({
	model: Student
});

var StudentView = Backbone.View.extend({
    initialize: function(){
      _.bindAll(this, 'render');
      this.render();
    },

    render: function(){
      $(this.el).append("Student<ul>");
      $(this.el).append("<li>ID: " + this.model.id + "</li>");
      $(this.el).append("<li>First Name: " + this.model.attributes.firstName + "</li>");
      $(this.el).append("<li>Last Name: " + this.model.attributes.lastName + "</li>");
      $(this.el).append("<li>Username: " + this.model.attributes.userName + "</li>");
      $(this.el).append("</ul><br>");
    }
})



var TESTSTUDENTS = new StudentCollection();

TESTSTUDENTS.add(new Student({encounters: TESTENCOUNTERS, firstName:'bob', lastName:'villager',userName:'epicbuilderman',password:'timtaylorstinks5'}));