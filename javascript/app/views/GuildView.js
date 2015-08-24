var GuildView = Backbone.Epoxy.View.extend({
	model: Guild,

  tagname: "li",

  render: function() {
  	this.$el.html(this.model.attributes.name);
  }
});