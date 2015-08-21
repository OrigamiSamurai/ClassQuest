var EncounterView = Backbone.Epoxy.View.extend({
	model: Encounter,

  tagname: "li",

	initialize: function(options){
  	_.bindAll(this, 'render', 'renderXp', 'onSubmit', 'onCreated', 'onError');// onsubmits are currently used for saving lower level items
    //this.model.bind('change', this.render);
    //this.model.bind('reset', this.render);
    this.model.bind('add:xps', this.renderXp); 

    this.modAttr = this.model.attributes; 
  },

  computeds: {
    xpTypes: {
      get: function() {return [ "Random Encounter" , "Guard Duty" , "Adventuring" , "Scullery Duty" , "Training" ];}
    },
    date: {
      deps: ["date"],
      get: function(date) {
        // prettify the date
        return date+" ";//modelDate.toLocaleDateString("en-US");
      },
      set: function(userDate) {
        // parse the date
        return {date: Date.parse(userDate)};
      }
    }
  },

  bindings: {
    "input.encounterName":"value:name",//,events:['keyup']",
    "input.maxXp":"value:maxXp",//,events:['keyup']",
    "select.xpType":"value:typeId,options:xpTypes,optionsDefault:xpTypes[0]",
    "input.encounterDate":"value:customDate"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save",
  	"click .createXp": "onSubmit"
  },

  render: function(){
  	console.log(this.model.get('customDate'));
  	this.$el.html(
    	"ID: "+ (this.modAttr.id ? this.modAttr.id : "") +
      "<br>Name: <input type=\"text\" class=\"encounterName\""+ //this.modAttr.name+"\">"+
      "<br>Max XP award: <input type=\"text\" class=\"maxXp\">"+
      "<br>Type: <select class=\"xpType\"></select>"+
      "<br>Encountered Date: <input type=\"text\" class=\"date\">"+
      "<br>XP Awards:"+
      "<br><input type=\"button\" value=\"Create XP\" class=\"createXp\" />"+
      	"Amount: <input type=\"text\" value=\"\" class=\"amount\" />"+
      "<br><ol class=\"encounterXpView\"></ol>"+
    	"<br>Created Date: "+formatDate(this.modAttr.createdDate)+
      "<br>Last Updated: "+formatDate(this.modAttr.updatedDate)+
    	"<br><input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
    	"<br><input type=\"button\" value=\"Delete\" class=\"deleteButton\" /><span class=\"maxXp\"></span>"
    );
    this.applyBindings();
        console.log(this.model.get('customDate'));

    if (!this.model.hasOwnProperty("id")) {
      this.$el.addClass("unsaved");
    }
    else {
      this.$el.removeClass("unsaved");
    }

    this.applyBindings();

    return this;
  },

  onSubmit: function() {
  	var xp = new Xp({amount:this.$el.find('.amount').val(), typeId: this.model.typeId, encounter:this.model});
    this.model.save({}, {
	    success: this.onCreated,
	    error: this.onError
  	});
  },

  onCreated: function(xp, response) {
    this.model.attributes.xps.add(xp);
	},

	onError: function(xp, response) {
		console.log("Error saving encounter.", xp, response);
	},

  renderXp: function(model) {
    var encounterXpView = new EncounterXpView({model:model});
		this.$el.find('.encounterXpView').append(encounterXpView.render().$el);
  },

  delete: function() {
  	this.model.destroy();
  	this.remove();
  },

  save: function() {
    //this.model.set({name:$('.encounterName').val()});
    this.model.save({}, { //name:$('.encounterName').val()
      success: function (model, response, options) {
          model.set({updatedDate:response.updatedDate});
      },
      error: function (model, xhr, options) {
          console.log("Something went wrong while saving the model");
      }
    });
  }

});