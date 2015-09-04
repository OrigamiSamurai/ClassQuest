CQ.Views.SampleView = Backbone.Epoxy.View.extend({
	model: CQ.Models.Achievement,

	// If it will be repeated, use tagname
  	tagname: "li",

	initialize: function(options){
	// Bind all functions unless they should use a foregin context
  	_.bindAll(this, 'render','renderAdventurerPicker', 'save', 'renderCertificate');
    
    // Re-render if model is reset
    this.model.bind('reset', this.render);

    // If model updates, render any new views required. Epoxy will render any field updates
    this.model.attributes.achievementCertificates.bind('add', this.renderCertificate);

    // Here's an example of a view element that relies of data outside the model. In general, avoid this if possible
    adventurers.bind('add', this.renderAdventurerPicker);

    // time-saving mapping
    this.attr = this.model.attributes;
  },

  // Epoxy bindings - use value:modelAttributeName to bind 2-way or text:modelAttributeName for read-only
  //   Also, if you define custom computed get/set for intermediary values, you can use them in place of the modelAttributeName
  computeds: {
    sampleAttributeConverted: {
      deps: ['sampleAttribute'],
      get: function (sampleAttribute) {
        return convert(sampleAttribute);
      },
      set: function (sampleAttribute) {
      	return transform(sampleAttribute);
      }
    }
  },

  bindings: {
    "input.name":"value:sampleAttributeConverted"
    "input.other":"text:someAttribute"
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
      "<br>Adventurer Awardees: <select class=\"adventurerDropdown\"></select>"+
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
    var adventurer = adventurers.get(this.$el.find('.adventurerDropdown')[0].value);
    var achievementCertificate = new CQ.AchievementCertificate({achievement:this.model,adventurer:adventurer});
    
    achievementCertificate.save({}, {
      success: this.onCertificateCreated,
      error: this.onCertificateError
    });
  },

  onCertificateCreated: function() {
    this.model.attributes.achievementCertificates.add(achievementCertificate);
    this.model.save();
  },

  onCertificateError: function(certificate, response) {
    console.log('An error occured when trying to save the achievement certificate',certificate, response);
  },

  renderAdventurerPicker: function() {
    var optionsHtml = '';
    for (var i=0; i < adventurers.length; i++) {
      optionsHtml += '<option value=\"'+adventurers.at(i).id+'\">'+adventurers.at(i).attributes.firstName+' '+adventurers.at(i).attributes.lastName+'</option>';
    };
    this.$el.find('.adventurerDropdown').html(optionsHtml);
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
})