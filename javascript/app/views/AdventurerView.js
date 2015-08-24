var AdventurerView = Backbone.Epoxy.View.extend({
	model: Adventurer,

  tagname: "li",

	initialize: function(options){
  	_.bindAll(this, 'render', 'renderXp', 'renderDate');// onsubmits are currently used for saving lower level items
    this.model.bind('add:xps', this.renderXp);

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
  	"click .createXp": "onSubmit",
  },

  render: function(){
    var prettyDate = this.modAttr.date.getMonth()+'/'+this.modAttr.date.getDate()+'/'+this.modAttr.date.getFullYear();
  	this.$el.html(
    	"ID: "+ (this.modAttr.id ? this.modAttr.id : "") +
      "<br>First: <input type=\"text\" class=\"firstName\""+
      "<br>Last: <input type=\"text\" class=\"lastName\">"+
      "<br>Login: <input type=\"text\" class=\"login\">"+
      "<br>Password: <input type=\"text\" class=\"password\">"+
      "<br>Current XP: <span class=\"currentXp\"></span>"+
      "<br>XP Awards:"+
      "<div class=\"adventurerXpContainer\">"+
    	"</div>"+
      "<br>Created Date: "+formatDate(this.modAttr.createdDate)+
      "<br>Last Updated: <span class=\"updatedDate\">"+formatDate(this.modAttr.updatedDate)+"</span>"+
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

  renderXp: function(model) {
    var adventurerXpView = new EncounterXpView({model:model});
    this.$el.find('.adventurerXpContainer').append(adventurerXpView.render().$el);
  },

  renderDate: function() {
    this.$el.find('span.updatedDate').html(formatDate(this.model.attributes.updatedDate));
  },

  delete: function() {
  	this.model.destroy();
  	this.remove();
  },

  save: function() {
    self = this;
    this.model.save({}, { 
      success: function (model, response, options) {
          model.set({updatedDate:response.updatedDate});
          self.renderDate();
      },
      error: function (model, xhr, options) {
          console.log("Something went wrong while saving the model");
      }
    });
  }

});