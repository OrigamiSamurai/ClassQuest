 <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>ClassQuest Admin</title>
    <link rel="stylesheet" type="text/css" href="styles/style.css">
    <link rel="stylesheet" type="text/css" href="javascript/lib/DataTables-1.10.8/css/jquery.dataTables.css"/>
  </head>
  <body>
    

    <h1>Quests</h1>
    <div id="QuestContainer"></div>

    <h1>Guilds</h1>
    <div id="GuildContainer"></div>

    <h1>Adventurers</h1>
    <div id="AdventurerContainer"></div>

    <h1>Encounters</h1>
    <div id="EncounterContainer"></div>

    <h1>Achievements</h1>
    <div id="AchievementContainer"></div>


    <script src="javascript/lib/jquery-1.11.3.min.js"></script>
    <script src="javascript/lib/json2.js"></script>
    <script src="javascript/lib/underscore-min.js"></script>
    <script src="javascript/lib/backbone-min.js"></script>
    <script src="javascript/lib/backbone.epoxy.min.js"></script>
    <script src="javascript/lib/backbone-relational.js"></script>

    <script type="text/javascript" src="javascript/lib/DataTables-1.10.8/js/jquery.dataTables.js"></script>

<!--
    <script src="javascript/app/models/Encounter.js" type="text/javascript"></script>
    <script src="javascript/app/collections/EncounterCollection.js" type="text/javascript"></script>
    
    <script src="javascript/app/students.js" type="text/javascript"></script>
-->

    <script src="javascript/app/models/Xp.js" type="text/javascript"></script>
    <script src="javascript/app/collections/XpCollection.js" type="text/javascript"></script>
    <script src="javascript/app/views/XpView.js" type="text/javascript"></script>
    <script src="javascript/app/views/XpCollectionView.js" type="text/javascript"></script>

    <script src="javascript/app/models/Encounter.js" type="text/javascript"></script>
    <script src="javascript/app/collections/EncounterCollection.js" type="text/javascript"></script>
    <script src="javascript/app/views/EncounterView.js" type="text/javascript"></script>
    <script src="javascript/app/views/EncounterXpView.js" type="text/javascript"></script>
    <script src="javascript/app/views/EncounterCollectionView.js" type="text/javascript"></script>

    <script src="javascript/app/models/Achievement.js" type="text/javascript"></script>
    <script src="javascript/app/collections/AchievementCollection.js" type="text/javascript"></script>
    <script src="javascript/app/views/AchievementView.js" type="text/javascript"></script>
    <script src="javascript/app/views/AchievementCollectionView.js" type="text/javascript"></script>

    <script src="javascript/app/models/Adventurer.js" type="text/javascript"></script>
    <script src="javascript/app/collections/AdventurerCollection.js" type="text/javascript"></script>
    <script src="javascript/app/views/AdventurerView.js" type="text/javascript"></script>
    <script src="javascript/app/views/AdventurerCollectionView.js" type="text/javascript"></script>

    <script src="javascript/app/models/Guild.js" type="text/javascript"></script>
    <script src="javascript/app/collections/GuildCollection.js" type="text/javascript"></script>
    <script src="javascript/app/views/GuildView.js" type="text/javascript"></script>
    <script src="javascript/app/views/GuildCollectionView.js" type="text/javascript"></script>

    <script src="javascript/app/models/Quest.js" type="text/javascript"></script>
    <script src="javascript/app/collections/QuestCollection.js" type="text/javascript"></script>
    <script src="javascript/app/views/QuestView.js" type="text/javascript"></script>
    <script src="javascript/app/views/QuestCollectionView.js" type="text/javascript"></script>
    
    <script src="javascript/app/models/AchievementCertificate.js" type="text/javascript"></script>
    <script src="javascript/app/collections/AchievementCertificateCollection.js" type="text/javascript"></script>    
    <script src="javascript/app/views/AchievementCertificateView.js" type="text/javascript"></script>
      
    <script src="javascript/app/views/AdventurerPickerView.js" type="text/javascript"></script>

    <script src="javascript/app/models/QuestLicense.js" type="text/javascript"></script>
    <script src="javascript/app/collections/QuestLicenseCollection.js" type="text/javascript"></script>
    <!--<script src="javascript/app/views/QuestLicenseView.js" type="text/javascript"></script>
    <script src="javascript/app/views/QuestLicenseCollectionView.js" type="text/javascript"></script>-->

    <script src="javascript/app/models/GuildMembership.js" type="text/javascript"></script>
    <script src="javascript/app/collections/GuildMembershipCollection.js" type="text/javascript"></script>
    <!--<script src="javascript/app/views/GuildMembershipView.js" type="text/javascript"></script>
    <script src="javascript/app/views/GuildMembershipCollectionView.js" type="text/javascript"></script>-->

    <script src="javascript/app/models/GuildCharter.js" type="text/javascript"></script>
    <script src="javascript/app/collections/GuildCharterCollection.js" type="text/javascript"></script>
    <!--<script src="javascript/app/views/GuildCharterView.js" type="text/javascript"></script>
    <script src="javascript/app/views/GuildGuildCharterCollectionView.js" type="text/javascript"></script>-->
    
    <script src="javascript/app/models/EncounterLicense.js" type="text/javascript"></script>
    <script src="javascript/app/collections/EncounterLicenseCollection.js" type="text/javascript"></script>
    <!--<script src="javascript/app/views/EncounterLicenseView.js" type="text/javascript"></script>
    <script src="javascript/app/views/EncounterLicenseCollectionView.js" type="text/javascript"></script>-->

    <script>
        var CQ = {};

        <?php
            function bootstrapModel($modelContent, $modelName) {
                return ' new '.$modelName.'('.json_encode($modelContent).') ';
            }
        ?>

        CQ.achievements = new AchievementCollection([
            <?php 
                require 'api/controllers/AchievementController.php'; 
                $achievements = searchAchievements(FALSE, NULL);
                $achievementsJson = array_map(bootstrapModel,$achievements, array_fill(0, count($achievements), 'Achievement'));
                echo implode(',', $achievementsJson);
            ?>
        ]);

        CQ.achievementCertificates = new AchievementCertificateCollection([
            <?php 
                require 'api/controllers/AchievementCertificateController.php'; 
                $achievementCertificates = searchAchievementCertificates(FALSE, NULL);
                $achievementCertificatesJson = array_map(bootstrapModel,$achievementCertificates, array_fill(0, count($achievementCertificates), 'AchievementCertificate'));
                echo implode(',', $achievementCertificatesJson);
            ?>
        ]);

    </script>

    <script src="javascript/app/app.js" type="text/javascript"></script>
  </body>
  </html>