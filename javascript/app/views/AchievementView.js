var AchievementView = Backbone.Epoxy.View.extend({
	model: Achievement,

  tagname: "li",

	initialize: function(options){

  	_.bindAll(this, 'render','renderAdventurerPicker', 'save', 'renderAdventurer');
    this.model.bind('reset', this.render);
    adventurers.bind('add', this.renderAdventurerPicker);
    this.model.attributes.achievementCertificates.bind('add', this.renderAdventurer);

    this.attr = this.model.attributes;
  },

  bindings: {
    "input.name":"value:name"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save",
    "click .addAdventurerButton":"addAdventurer"
  },

  render: function() {
    this.$el.html(
      "Name: <input type=\"text\" class=\"name\">"+
      "<input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
    	"<input type=\"button\" value=\"Delete\" class=\"deleteButton\" />"+
      "<br>Adventurer Awardees: <select class=\"adventurerDropdown\"></select>"+
      "<input type=\"button\" value=\"Add\" class=\"addAdventurerButton\" />"+
      "<div class=\"achievementAdventurers\">"+
      "</div>"
    );

    this.renderAdventurerPicker();

    this.applyBindings();

    return this;
  },

  renderAdventurer: function(achievementCertificate) {
    console.log('achievement certificate', achievementCertificate.attributes.adventurer);
    var achievementAdventurerView = new AchievementAdventurerView({model:achievementCertificate.attributes.adventurer, collection:this.model});
    this.$el.find('.achievementAdventurers').append(achievementAdventurerView.render().$el);
  },

  addAdventurer: function() {
    var adventurer = adventurers.get(this.$el.find('.adventurerDropdown')[0].value);
    var achievementCertificate = new AchievementCertificate({achievement:this.model,adventurer:adventurer});
    this.model.attributes.achievementCertificates.add(achievementCertificate);
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

});