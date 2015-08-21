var EncounterView = Backbone.Epoxy.View.extend({
	tagname: "li",

	initialize: function(options){
  	_.bindAll(this, 'render', 'renderXp', 'onSubmit');// onsubmits are currently used for saving lower level items
    this.model.bind('change', this.render);
    this.model.bind('reset', this.render);
    this.model.bind('add:xps', this.renderXp);  
  },

  bindings: {
    "input.encounterName":"value:name"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save",
  	"click .createXp": "onSubmit"
  },

  render: function(){
  	
  	console.log('render encounter view');

  	this.$el.html(
    	"ID: "+ (this.modAttr.id ? this.modAttr.id : "") +
      "<br>Name: <input type=\"text\" class=\"encounterName\" value=\""+this.modAttr.name+"\">"+
      "<br>Max XP award: "+this.modAttr.maxXp+
      "<br>Type ID: "+this.modAttr.typeId+
      "<br>Encountered Date: "+formatDate(this.modAttr.date)+
      "<br>XP Awards:"+
      "<br><input type=\"button\" value=\"Create XP\" class=\"createXp\" />"+
      	"Amount: <input type=\"button\" value=\"\" class=\"amount\" />"+
      "<br><ol class=\"encounterXpView\"></ol>"+
    	"<br>Created Date: "+formatDate(this.modAttr.createdDate)+
      "<br>Last Updated: "+formatDate(this.modAttr.updatedDate)+
    	"<br><input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
    	"<br><input type=\"button\" value=\"Delete\" class=\"deleteButton\" />"
    );

    if (!this.model.hasOwnProperty("id")) {
      this.$el.addClass("unsaved");
    }
    else {
      this.$el.removeClass("unsaved");
    }
  },

  onSubmit: function() {
  	var xp = new Xp({amount:this.$el.find('.amount').val(), typeId: this.model.typeId, encounter:this.model});
    this.model.save({}, {
	    success: this.onCreated,
	    error: this.onError
  	});
  },

  onCreated: function(xp, response) {
		console.log("Encounter submitted successfully.", xp, response);
		this.model.attributes.xps.add(xp);
	},

	onError: function(xp, response) {
		console.log("Error saving encounter.", xp, response);
	},

  renderXp: function(model) {
  	var encounterXpView = new EncounterXpView({model:model});
		this.$el.find('.encounterXpView').append(encounterXpView.el);
  },

  delete: function() {
  	this.model.destroy();
  	this.remove();
  }

});