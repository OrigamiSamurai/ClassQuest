var AdventurerView = Backbone.Epoxy.View.extend({
	model: Adventurer,

  tagname: "li",

	initialize: function(options){
	_.bindAll(this, 'render', 'renderXp');// onsubmits are currently used for saving lower level items
	this.model.bind('add:xps', this.renderXp);
	this.model.bind('add:quests', this.renderXp);
	this.model.bind('add:guilds', this.renderXp);
	this.model.bind('add:achievements', this.renderXp);

	this.modAttr = this.model.attributes; 
  },

  bindings: {
	"input.firstName":"value:firstName",
	"input.lastName":"value:lastName",
	"input.login":"value:login",
	"input.password":"value:password",
	"span.currentXp":"text:currentXp",
  },

  events: {
	"click .deleteButton": "delete",
	"click .saveButton": "save",
  },

  render: function(){
	this.$el.html(
		"<br>First: <input type=\"text\" class=\"firstName\""+
		"<br>Last: <input type=\"text\" class=\"lastName\">"+
		"<br>Login: <input type=\"text\" class=\"login\">"+
		"<br>Password: <input type=\"text\" class=\"password\">"+
		"<br>Current XP: <span class=\"currentXp\"></span>"+
		"<br>XP Awards:"+
		"<div class=\"adventurerXps\">"+
		"</div>"+
		"<br>Quests: "+
	  	"<div class=\"adventurerQuests\">"+
	  	"</div>"+
	  	"<br>Guilds: "+
		"<div class=\"adventurerGuilds\">"+
		"</div>"+
		"<br>Achievements: "+
		"<div class=\"adventurerAchievements\">"+
		"</div>"+
		"<br><input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
		"<br><input type=\"button\" value=\"Delete\" class=\"deleteButton\" /><span class=\"maxXp\"></span>"
	);
	this.applyBindings();

	if (!this.model.hasOwnProperty("id")) {
	  this.$el.addClass("unsaved");
	}
	else {
	  this.$el.removeClass("unsaved");
	}

	return this;
  },

  renderQuest: function(model) {
	var adventurerXpView = new EncounterXpView({model:model});
	this.$el.find('.adventurerQuests').append(adventurerQuestView.render().$el);
  },

  renderXp: function(model) {
	var adventurerXpView = new EncounterXpView({model:model});
	this.$el.find('.adventurerXps').append(adventurerXpView.render().$el);
  },

  renderGuild: function(model) {
	var adventurerXpView = new EncounterXpView({model:model});
	this.$el.find('.adventurerGuilds').append(adventurerGuildView.render().$el);
  },

  renderAchievement: function(model) {
	var adventurerXpView = new EncounterXpView({model:model});
	this.$el.find('.adventurerAchievements').append(adventurerAchievementView.render().$el);
  },

  delete: function() {
	this.model.destroy();
	this.remove();
  },

  save: function() {
	self = this;
	this.model.save({}, { 
	  success: function (model, response, options) {
	  },
	  error: function (model, xhr, options) {
		  console.log("Something went wrong while saving the model");
	  }
	});
  }

});