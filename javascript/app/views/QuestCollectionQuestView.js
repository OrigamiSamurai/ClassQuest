CQ.Views.QuestCollectionQuestView = Backbone.Epoxy.View.extend({
	model: CQ.Models.Quest,

  tagname: "li",

	initialize: function(options){

  	_.bindAll(this, 'render');// onsubmits are currently used for saving lower level items
    this.model.bind('reset', this.render);

    this.attr = this.model.attributes;
  },

  bindings: {
    "input.period":"value:integer(period)",
    "input.name":"value:name"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .editButton": "edit",
  	"click .saveButton": "save"
  },

  render: function() {
    this.$el.html(
      "Period: <input type=\"text\" class=\"period\">"+
      "Name: <input type=\"text\" class=\"name\">"+
      "<input type=\"button\" value=\"Save Changes\" class=\"saveButton\" />"+
      "<input type=\"button\" value=\"View/Edit\" class=\"editButton\" />"+
    	"<input type=\"button\" value=\"Delete\" class=\"deleteButton\" />"+
      "</div>"
    );
    this.applyBindings();

    return this;
  },

  delete: function() {
  	if(confirm("Are you really sure you want to delete period "+this.model.attributes.period+" "+this.model.attributes.name+"?")) {
  		this.model.destroy();
	  	this.remove();
 	}	
  },

  edit: function() {
   	window.location.href = 'quests/'+this.model.id;
  },
  
  save: function() {
    this.model.save({}, {
      error: function(error) {console.log("Error encountered when saving model",error);}
    })
  }
  
  

});