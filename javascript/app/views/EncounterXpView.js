CQ.EncounterXpView = Backbone.Epoxy.View.extend({
	model: CQ.Xp,

	tagname: 'li',

	initialize: function(options){

  	_.bindAll(this, 'render', 'renderId');// onsubmits are currently used for saving lower level items
    this.model.bind('reset', this.render);
    this.model.bind('change:id', this.renderId);

    this.attr = this.model.attributes;
  },

  bindings: {
    "input.xpAmount":"value:integer(amount)"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save"
  },

  render: function() {
    this.$el.html(
      "For encounter: "+this.attr.encounter.attributes.name+
      "<br>ID: <span class=\"xpId\">"+ (this.attr.id ? this.attr.id : "") + '</span>'+
      "<br>Amount: <input type=\"text\" class=\"xpAmount\" value=\""+this.attr.amount+"\">"+
    	"<br><input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
    	"<br><input type=\"button\" value=\"Delete\" class=\"deleteButton\" />"
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

  renderId: function() {
    this.$el.find('span.xpId').html(this.model.attributes.id);
    this.$el.removeClass('unsaved');
  },

  delete: function() {
  	this.model.destroy();
  	this.remove();
  },

	save: function() {
    this.model.save({}, {
	    success: function (model, response, options) {
          model.set({updatedDate:response.updatedDate});
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }
})