 <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>ClassQuest Test Page</title>
            <link rel="stylesheet" type="text/css" href="styles/style.css">
            <link rel="stylesheet" type="text/css" href="javascript/lib/DataTables-1.10.8/css/jquery.dataTables.css"/>

            <script type="text/javascript">CQ = {};</script>

            <script src="javascript/lib/jquery-1.11.3.min.js"></script>
            <script src="javascript/lib/json2.js"></script>
            <script src="javascript/lib/underscore-min.js"></script>
            <script src="javascript/lib/backbone-min.js"></script>
            <script src="javascript/lib/backbone.epoxy.min.js"></script>
            <script src="javascript/lib/backbone-relational.js"></script>
        
            <!-- Load orphan and link models first, then dependent models -->
            <script src="javascript/app/models/EncounterType.js" type="text/javascript"></script>
            <script src="javascript/app/collections/EncounterTypeCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/AchievementCertificate.js" type="text/javascript"></script>
            <script src="javascript/app/collections/AchievementCertificateCollection.js" type="text/javascript"></script> 

            <script src="javascript/app/models/EncounterLicense.js" type="text/javascript"></script>
            <script src="javascript/app/collections/EncounterLicenseCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/GuildCharter.js" type="text/javascript"></script>
            <script src="javascript/app/collections/GuildCharterCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/GuildMembership.js" type="text/javascript"></script>
            <script src="javascript/app/collections/GuildMembershipCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/QuestLicense.js" type="text/javascript"></script>
            <script src="javascript/app/collections/QuestLicenseCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/Xp.js" type="text/javascript"></script>
            <script src="javascript/app/collections/XpCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/Achievement.js" type="text/javascript"></script>
            <script src="javascript/app/collections/AchievementCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/Adventurer.js" type="text/javascript"></script>
            <script src="javascript/app/collections/AdventurerCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/Encounter.js" type="text/javascript"></script>
            <script src="javascript/app/collections/EncounterCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/Guild.js" type="text/javascript"></script>
            <script src="javascript/app/collections/GuildCollection.js" type="text/javascript"></script>

            <script src="javascript/app/models/Quest.js" type="text/javascript"></script>
            <script src="javascript/app/collections/QuestCollection.js" type="text/javascript"></script>

            <!-- Load views -->
            <script src="javascript/app/views/AchievementCertificateView.js" type="text/javascript"></script>
      
            <script src="javascript/app/views/AchievementView.js" type="text/javascript"></script>
            <script src="javascript/app/views/AchievementCollectionView.js" type="text/javascript"></script>
            
            <script src="javascript/app/views/AdventurerView.js" type="text/javascript"></script>
            <script src="javascript/app/views/AdventurerCollectionView.js" type="text/javascript"></script>

            <script src="javascript/app/views/AdventurerPickerView.js" type="text/javascript"></script>
            <script src="javascript/app/views/EncounterTypePickerView.js" type="text/javascript"></script>

            <script src="javascript/app/views/EncounterView.js" type="text/javascript"></script>
            <script src="javascript/app/views/EncounterXpView.js" type="text/javascript"></script>
            <script src="javascript/app/views/EncounterCollectionView.js" type="text/javascript"></script>

            <script src="javascript/app/views/GuildView.js" type="text/javascript"></script>
            <script src="javascript/app/views/GuildCollectionView.js" type="text/javascript"></script>

            
            <script src="javascript/app/views/QuestView.js" type="text/javascript"></script>
            <script src="javascript/app/views/QuestCollectionView.js" type="text/javascript"></script>
            
            <script src="javascript/app/views/XpView.js" type="text/javascript"></script>
            <script src="javascript/app/views/XpCollectionView.js" type="text/javascript"></script>

            <script>
                <?php
                  	function bootstrapModel($modelName, $model) {
                        	return ' new CQ.'.$modelName.'('.$model->getJson().') ';
                  	}
                  	
                  	function bootstrapModelArray($className) {
                  		$models = Controller::search(NULL, $className);
				        if (count($models) > 0) {
                            return '['.implode(',',array_map(bootstrapModel,array_fill(0, count($models),$className),$models)).']';
                        }
                        else {
                            return '[]';
                        }
                  	}
                ?>

                CQ.achievements = new CQ.AchievementCollection(<?php 
    				echo bootstrapModelArray('Achievement');	
                ?>);
                CQ.achievementCertificates = new CQ.AchievementCertificateCollection(<?php 
    				echo bootstrapModelArray('AchievementCertificate');
                ?>);
                CQ.adventurers = new CQ.AdventurerCollection(<?php 
    				echo bootstrapModelArray('Adventurer');
		          ?>);
        		CQ.encounters = new CQ.EncounterCollection(<?php 
    				echo bootstrapModelArray('Encounter');
        		?>);
                CQ.encounterLicenses = new CQ.EncounterLicenseCollection(<?php 
                    echo bootstrapModelArray('EncounterLicense');
                ?>);
                CQ.encounterTypes = new CQ.EncounterTypeCollection(<?php 
                    echo bootstrapModelArray('EncounterType');
                ?>);
                CQ.guilds = new CQ.GuildCollection(<?php 
                    echo bootstrapModelArray('Guild');
                ?>);
                CQ.guildCharters = new CQ.GuildCharterCollection(<?php 
                    echo bootstrapModelArray('GuildCharter');
                ?>);
                CQ.guildMemberships = new CQ.GuildMembershipCollection(<?php 
                    echo bootstrapModelArray('GuildMembership');
                ?>);
                CQ.quests = new CQ.QuestCollection(<?php 
                    echo bootstrapModelArray('Quest');
                ?>);
                CQ.questLicenses = new CQ.QuestLicenseCollection(<?php 
                    echo bootstrapModelArray('QuestLicense');
                ?>);
                CQ.xps = new CQ.XpCollection(<?php 
                    echo bootstrapModelArray('Xp');
                ?>);

            </script>

        </head>
        <body>
        
            <h1>Quests</h1>
            <div id="QuestContainer"></div>

            <h1>Guilds</h1>
            <div id="GuildContainer"></div>
            
            <h1>Encounters</h1>
            <div id="EncounterContainer"></div>

            <h1>Encounter Types</h1>
            <div id="EncounterTypeContainer"></div>

            <h1>Adventurers</h1>
            <div id="AdventurerContainer"></div>

            <h1>Achievements</h1>
            <div id="AchievementContainer"></div>

            <script src="javascript/app/app.js" type="text/javascript"></script>
          </body>
  </html>