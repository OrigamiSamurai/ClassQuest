CQ.Views.AchievementView = Backbone.Epoxy.View.extend({
	model: CQ.Models.Achievement,

	initialize: function(options){

  	_.bindAll(this, 'render','renderAdventurerPicker', 'save', 'renderCertificate', 'onSubmitCertificate', 'onCertificateCreated', 'onCertificateError');
    this.model.bind('reset', this.render);
    this.model.attributes.achievementCertificates.bind('add', this.renderCertificate);

    this.attr = this.model.attributes;
  },

  bindings: {
    "input.name":"value:name"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save",
    "click .addCertificateButton":"onSubmitCertificate"
  },

  render: function() {
    this.$el.html(
      "Name: <input type=\"text\" class=\"name\">"+
      "<input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
    	"<input type=\"button\" value=\"Delete\" class=\"deleteButton\" />"+
      "<br>Adventurer Awardees: <select class=\"adventurerPicker\"></select>"+
      "<input type=\"button\" value=\"Add\" class=\"addCertificateButton\" />"+
      "<div class=\"achievementCertificates\">"+
      "</div>"
    );

    this.renderAdventurerPicker();

    this.applyBindings();

    return this;
  },

  renderCertificate: function(achievementCertificate) {
    var achievementCertificateView = new CQ.Views.AchievementCertificateView({model:achievementCertificate, collection:this.model.attributes.achievementCertificates});
    this.$el.find('.achievementCertificates').append(achievementCertificateView.render().$el);
  },

  onSubmitCertificate: function() {
    var adventurer = CQ.adventurers.get(this.$el.find('.adventurerPicker')[0].value);
    var myAdventurers = this.model.attributes.achievementCertificates.pluck('adventurer');
    if (!_.contains(myAdventurers, adventurer)) {
      var achievementCertificate = new CQ.Models.AchievementCertificate({achievement:this.model,adventurer:adventurer});
      
      achievementCertificate.save({}, {
        success: this.onCertificateCreated,
        error: this.onCertificateError
      });
    }
    else {
      console.log("Adventurer already has this achievement.");
    }
  },

  onCertificateCreated: function(achievementCertificate, b, c) {
    console.log(achievementCertificate,b,c)
    this.model.attributes.achievementCertificates.add(achievementCertificate);
    this.model.save();
  },

  onCertificateError: function(certificate, response) {
    console.log('An error occured when trying to save the achievement certificate',certificate, response);
  },

  renderAdventurerPicker: function() {
    var adventurerPicker = new CQ.Views.AdventurerPickerView({el:this.$el.find('.adventurerPicker'),model:CQ.adventurers})
    adventurerPicker.render();
  },

  delete: function() {
  	this.model.destroy();
  	this.remove();
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