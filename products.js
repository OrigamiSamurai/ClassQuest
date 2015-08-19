// regarding items

var ProductModel = Backbone.Model.extend({
	defaults: {
		name: '',
		productType: 'report',
		id: '',
		items: new ItemCollection()
	}
})


var ProductCollection = Backbone.Collection.extend({
	model: ProductModel
});


var ProductView = Backbone.View.extend({
    initialize: function(){
      _.bindAll(this, 'render');
      this.render();
    },

    render: function(){
      $(this.el).append("Product<ul>");
      $(this.el).append("<li>Name: " + this.model.attributes.name + "</li>");
      $(this.el).append("<li>Type: " + this.model.attributes.productType + "</li>");
      $(this.el).append("<li>ID: " + this.model.attributes.id + "</li>");
      this.renderItems();
      $(this.el).append("</ul><br>");
    },

    renderItems: function(){
    	_(this.model.attributes.items.models).each(function(item){
			var itemView = new ItemView({model: item});
			$(this.el).append(itemView.el);
		}, this);
    }
});


var ProductsView = Backbone.View.extend({
	el: $('#ProductsContainer'),

	initialize: function() {
		this.render();
	},

	render: function() {
		$(this.el).append("THE PRODUCTS: <br><br>");
		_(this.collection.models).each(function(product){
			var productView = new ProductView({model: product});
			$(this.el).append(productView.el);
		}, this);
	}
})
