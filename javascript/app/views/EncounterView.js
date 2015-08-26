var EncounterView = Backbone.Epoxy.View.extend({
	model: Encounter,

  tagname: "li",

	initialize: function(options){
  	_.bindAll(this, 'render', 'renderXp', 'onSubmitXp', 'onXpCreated', 'onXpError');

    this.model.bind('add:xps', this.renderXp);

    this.modAttr = this.model.attributes; 
  },

  computeds: {
    prettyDate: {
      deps: ['date'],
      get: function (date) {
        return date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear();
      },
      set: function (value) {
        if (isNaN(Date.parse($('.date').val()))) {
          alert('this aint a properly formatted date, shithead', $('.date').val() );
        }
        else {
          this.setBinding('date', new Date(Date.parse(this.$el.find('.date').val())))  
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
  	"click .createXp": "onSubmitXp",
    "blur .date":"saveDate",
    "change .type":"saveType"
  },



  render: function(){
  	this.$el.html(
      "<br>Name: <input type=\"text\" class=\"encounterName\""+
      "<br>Max XP award: <input type=\"text\" class=\"maxXp\">"+
      "<br>Type: <select class=\"type\">"+xpTypeOptions()+"</select>"+
      "<br>Encountered Date: <input type=\"text\" class=\"date\">"+
      "<br>XP Awarded:"+
      "<div class=\"encounterXpContainer\">"+
        "<input type=\"button\" value=\"Create XP\" class=\"createXp\" />"+
    	   "Amount: <input type=\"text\" value=\"1\" class=\"amount\" />"+
        "</div>"+
    	"</div>"+
    	"<br><input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
    	"<br><input type=\"button\" value=\"Delete\" class=\"deleteButton\" /><span class=\"maxXp\"></span>"
    );
    this.applyBindings();

    return this;
  },

  saveType: function() {
    this.model.set({typeId:parseInt(this.$el.find('.type').val())});
  },

  onSubmit: function() {
    var xp = new Xp({amount:parseInt(this.$el.find('.amount').val()), typeId: this.model.typeId, encounter:this.model});
    xp.save({}, {
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
    this.$el.find('.encounterXpContainer').append(encounterXpView.render().$el);
  },

  /*
  renderDate: function() {
    this.$el.find('span.updatedDate').html(formatDate(this.model.attributes.updatedDate));
  },*/

  delete: function() {
  	this.model.destroy();
  	this.remove();
  },

  save: function() {
    self = this;
    this.model.save({}, { 
      success: function (model, response, options) {
          //model.set({updatedDate:response.updatedDate});
          //self.renderDate();
      },
      error: function (model, xhr, options) {
          console.log("Something went wrong while saving the model");
      }
    });
  }

});