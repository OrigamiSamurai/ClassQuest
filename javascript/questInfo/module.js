window.QuestInfo = {
	Controllers: {},
	Collections: {},
	Models: {},
	Views: {}
}

QuestInfo.App = function (options) {
	
	this.container = options.container;

	this.data = {
		quest: options.quest,
		encounterLicenses: options.quest.attributes.encounterLicenses,
		questLiceneses: options.quest.attributes.questLicenses,
		guildCharters: options.quest.attributes.guildCharters
	};
		
	console.log(this.data);

	this.views = { 
		questDetailsView: new QuestInfo.Views.QuestDetailsView({model:this.data.quest, el:'.questDetailsContainer'}),
		encounterLicenseListView: new QuestInfo.Views.EncounterLicenseListView({collection:this.data.encounterLicenses, el:'.encounterLicensesContainer'}),
		questLicenseListView: new QuestInfo.Views.QuestLicenseListView({collection:this.data.questLicenses, el:'.questLicensesContainer'}),
		guildCharterListView: new QuestInfo.Views.GuildCharterListView({collection:this.data.guildCharters, el:'.guildChartersContainer'}),
	};
	
	this.controllers = {
		questDetailsController: new QuestInfo.Controllers.QuestDetailsController({quest:this.data.quest,view:this.views.questDetailsView}),
		encounterLicenseListController: new QuestInfo.Controllers.EncounterLicenseListController({quest:this.data.quest,encounterLicenses:this.data.encounterLicenses,view:this.views.encounterLicenseListView}),
		questLicenseListController: new QuestInfo.Controllers.QuestLicenseListController({quest:this.data.quest,questLicenses:this.data.questLicenses,view:this.views.questLicenseListView}),
		guildCharterListController: new QuestInfo.Controllers.GuildCharterListController({quest:this.data.quest,guildCharters:this.data.guildCharters,view:this.views.guildCharterListView})
	}
	
	QuestInfo.App.prototype.start = function() {
		this.container.append(this.views.questDetailsView.render());
		this.container.append(this.views.encounterLicenseListView.render());
		this.container.append(this.views.questLicenseListView.render());
		this.container.append(this.views.guildCharterListView.render());

		this.controllers.questDetailsController.bindEvents();
		this.controllers.encounterLicenseListController.bindEvents();		
		this.controllers.questLicenseListController.bindEvents();
		this.controllers.guildCharterListController.bindEvents();		
	}
	
	return this;
}