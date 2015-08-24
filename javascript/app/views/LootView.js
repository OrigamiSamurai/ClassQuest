var LootView = Backbone.Epoxy.View.extend({
	model: Loot,

  tagname: "li",

  render: function() {
  	this.$el.html(this.model.attributes.name);
  }
});