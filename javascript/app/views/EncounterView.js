CQ.Views.EncounterView = Backbone.Epoxy.View.extend({
	model: CQ.Models.Encounter,

  tagname: "li",

	initialize: function(options){
  	_.bindAll(this, 'render', 'renderAdventurerPicker','renderEncounterTypePicker','renderXp', 'onXpSubmit', 'onXpCreate', 'onXpError');

    this.model.bind('add:xps', this.renderXp);
    this.modAttr = this.model.attributes; 
  },

  computeds: {
    prettyDate: {
      deps: ['encounterDate'],
      get: function (encounterDate) {
        return (encounterDate.getMonth()+1)+'/'+encounterDate.getDate()+'/'+encounterDate.getFullYear();
      },
      set: function (value) {
        if (isNaN(Date.parse(this.$el.find('.date').val()))) {
          alert('Invalid date format:', this.$el.find('.date').val() );
        }
        else {
          this.setBinding('encounterDate', new Date(Date.parse(this.$el.find('.date').val())));  
        }
      }
    }
  },

  bindings: {
    "input.encounterName":"value:name",
    "input.maxXp":"value:integer(maxXp)",
    "select.xpType":"value:typeId",
    "input.date":"value:prettyDate"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save",
  	"click .createXp": "onXpSubmit",
    "blur .date":"saveDate",
    "change .type":"saveType"
  },

  render: function(){
  	this.$el.html(
      "<br>Name: <input type=\"text\" class=\"encounterName\""+
      "<br>Max XP award: <input type=\"text\" class=\"maxXp\">"+
      "<br>Type: <select class=\"type\"></select>"+
      "<br>Encountered Date: <input type=\"text\" class=\"date\">"+
      "<br>XP Awarded:"+
      "<div class=\"encounterXpContainer\">"+
        "<input type=\"button\" value=\"Create XP\" class=\"createXp\" />"+
    	   "Amount: <input type=\"text\" value=\"1\" class=\"amount\" />"+
         "<select class=\"adventurerPicker\"></select>"+
      "</div>"+
      "<br>Part of Quests: "+
      "<div class=\"encounterQuestContainer\">"+
        "<input type=\"button\" value=\"Place on quest\" class=\"createQuestLicense\" />"+
        "Quest Picker dropdown"+
      "</div>"+
    	"<br><input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
    	"<br><input type=\"button\" value=\"Delete\" class=\"deleteButton\" /><span class=\"maxXp\"></span>"
    );

    this.renderEncounterTypePicker();

    this.renderAdventurerPicker();

    this.applyBindings();

    return this;
  },

  renderAdventurerPicker: function() {
    var adventurerPicker = new CQ.Views.AdventurerPickerView({el:this.$el.find('.adventurerPicker'),model:CQ.adventurers})
    adventurerPicker.render();
  },

  renderEncounterTypePicker: function() {
    var encounterTypePicker = new CQ.Views.EncounterTypePickerView({el:this.$el.find('.type'),model:CQ.encounterTypes})
    encounterTypePicker.render();
  },

  saveType: function() {
    this.model.set({typeId:parseInt(this.$el.find('.type').val())});
  },

  onXpSubmit: function() {
    var myAdventurer = CQ.adventurers.get(this.$el.find('.adventurerPicker')[0].value);
    var xp = new CQ.Models.Xp({amount:parseInt(this.$el.find('.amount').val()), typeId: this.model.typeId, encounter:this.model, adventurer:myAdventurer});
    xp.save({}, {
	    success: this.onCreated,
	    error: this.onError
  	});
  },

  onXpCreate: function(xp, response) {
    this.model.attributes.xps.add(xp);
	},

	onXpError: function(xp, response) {
		console.log("Error saving encounter.", xp, response);
	},

  renderXp: function(model) {
    var encounterXpView = new CQ.Views.EncounterXpView({model:model});
    this.$el.find('.encounterXpContainer').append(encounterXpView.render().$el);
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