// regarding items

itemTypes = ['phenotype','magic pixie dust','genetic counseling hours (4 hours)','PDF Summary'];

var ItemModel = Backbone.Model.extend({
	defaults: {
		itemType: 'phenotype',
		id: '',
		name: '',
		types: itemTypes
	}
})

var ItemCollection = Backbone.Collection.extend({
	model: ItemModel
});

var ItemView = Backbone.Epoxy.View.extend({
    initialize: function(){
      _.bindAll(this, 'render');
      this.render();
    },

    bindings: {
    	"input.item-name" : "value:name,events:['keyup']",
    	"select.item-type" : "options:types"
    },

    render: function(){
      $(this.el).append("Item<ul>");
      $(this.el).append("<li>Name: <input type=\"text\" class=\"item-name\" /></li>");
      $(this.el).append("<li>Type: <select class=\"item-type\"></select></li>");
      $(this.el).append("<li>ID: " + this.model.attributes.id + "</li>");
      $(this.el).append("</ul><br>");
    }
});

var ItemsView = Backbone.View.extend({
	el: $('#ItemsContainer'),

	initialize: function() {
		this.render();
	},

	render: function() {
		$(this.el).append("THE ITEMS: <br><br>");
		_(this.collection.models).each(function(item){
			var itemView = new ItemView({model: item});
			$(this.el).append(itemView.el);
		}, this);
	}
})