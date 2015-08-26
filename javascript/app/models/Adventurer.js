var Adventurer = Backbone.RelationalModel.extend({
	defaults: {
		firstName: '',
		lastName: '',
		login: '',
		password: '',
		questLicenses: [],
		guildMemberships: [],
		xps: [],
		achievementCertificates: [],
		level: 1,
		currentXp: 0
	},

	initialize: function() {
		_.bindAll(this, 'getXpTotal');

		this.bind('change:xps',this.getXpTotal);
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'xps',
			relatedModel: 'Xp',
			includeInJSON: 'id',
			collectionType: 'XpCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'adventurer',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'questLicenses',
			relatedModel: 'QuestLicense',
			includeInJSON: 'id',
			collectionType: 'QuestLicenseCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'adventurer',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'guildMemberships',
			relatedModel: 'GuildMembership',
			includeInJSON: 'id',
			collectionType: 'GuildMembershipCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'adventurer',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'achievementCertificates',
			relatedModel: 'AchievementCertificate',
			includeInJSON: 'id',
			collectionType: 'AchievementCertificateCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'adventurer',
				includeInJSON: 'id'
			}
		}
	],

	getXpTotal: function() {
		var newXpTotal = 0;
    var xpAmounts = this.xps.pluck('amount');
    for (var i=0; i < xpAmounts.length; i++) {
      newXpTotal += xpAmounts[i];
    }

    this.currentXp = newXpTotal;
	},

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/adventurers'
});