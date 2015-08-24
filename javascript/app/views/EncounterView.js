var EncounterView = Backbone.Epoxy.View.extend({
	model: Encounter,

  tagname: "li",

	initialize: function(options){
  	_.bindAll(this, 'render', 'renderXp', 'onSubmit', 'onCreated', 'onError', 'renderDate');// onsubmits are currently used for saving lower level items
    this.model.bind('add:xps', this.renderXp); 

    this.modAttr = this.model.attributes; 
  },

  bindings: {
    "input.encounterName":"value:name",//,events:['keyup']",
    "input.maxXp":"value:maxXp",//,events:['keyup']",
    "select.xpType":"value:typeId"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save",
  	"click .createXp": "onSubmit",
    "blur .date":"saveDate",
    "change .type":"saveType"
  },

  saveType: function() {
    this.model.set({typeId:parseInt(this.$el.find('.type').val())});
  },

  saveDate: function(){
    if (isNaN(Date.parse($('.date').val()))) {
      console.log('this aint a properly formatted date, shithead');
    }
    else {
      this.model.set({date:new Date(Date.parse(this.$el.find('.date').val()))})  
    }
  },

  render: function(){
  	console.log("rendering encounter "+this.model.id);
    var prettyDate = this.modAttr.date.getMonth()+'/'+this.modAttr.date.getDate()+'/'+this.modAttr.date.getFullYear();
  	this.$el.html(
    	"ID: "+ (this.modAttr.id ? this.modAttr.id : "") +
      "<br>Name: <input type=\"text\" class=\"encounterName\""+ //this.modAttr.name+"\">"+
      "<br>Max XP award: <input type=\"text\" class=\"maxXp\">"+
      "<br>Type: <select class=\"type\">"+xpTypeOptions()+"</select>"+
      "<br>Encountered Date: <input type=\"text\" class=\"date\" value=\""+prettyDate+"\">"+
      "<br>XP Awards:"+
      "<div class=\"encounterXpContainer\">"+
        "<input type=\"button\" value=\"Create XP\" class=\"createXp\" />"+
    	   "Amount: <input type=\"text\" value=\"1\" class=\"amount\" />"+
        "</div>"+
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

  onSubmit: function() {
  	console.log('submitted new xp');
    var xp = new Xp({amount:parseInt(this.$el.find('.amount').val()), typeId: this.model.typeId, encounter:this.model});
    console.log('new xp created',xp);
    xp.save({}, {
	    success: this.onCreated,
	    error: this.onError
  	});
  },

  onCreated: function(xp, response) {
    console.log('new xp on created callback fired',xp,response);
    console.log('adding xp to encounter',xp);
    console.log('xps in this encounter before',this.model.attributes.xps);
    this.model.attributes.xps.add(xp);
    console.log('xps in this encounter after',this.model.attributes.xps);
	},

	onError: function(xp, response) {
		console.log("Error saving encounter.", xp, response);
	},

  renderXp: function(model) {
    console.log('render xp - create new view and add it');
    var encounterXpView = new EncounterXpView({model:model});
    this.$el.find('.encounterXpContainer').append(encounterXpView.render().$el);
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
    this.model.save({}, { //name:$('.encounterName').val()
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