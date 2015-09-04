CQ.Views.EncounterTypePickerView = Backbone.Epoxy.View.extend({
	model: CQ.Collections.EncounterTypeCollection,

  tagName: 'select',

	initialize: function(options){
  	_.bindAll(this, 'render');
    
    this.model.bind('change', this.render);

    this.attr = this.model.attributes;
  },

  render: function() {
    var html = '';
    for (var i=0; i < this.model.models.length; i++) {
      var model = this.model.models[i];
      html += "<option value=\""+model.id+"\">"+model.attributes.encounterTypeName+"</option>";
    }        

    this.$el.html(html);

    return this;
  },

})