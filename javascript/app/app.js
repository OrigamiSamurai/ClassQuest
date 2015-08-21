function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

var xPTypes = [ "Random Encounter" , "Guard Duty" , "Adventuring" , "Scullery Duty" , "Training" ]

//var xpList = new XpCollectionView();

var encounters = new EncounterCollection();
var encountersView = new EncounterCollectionView({model:encounters});
encountersView.model.fetch({reset: true});



// backbone - fetch all the items and display them



// STUDENTS



/*
var EncounterTypes = ['training','camping','adventuring','random encounter']
var TESTENCOUNTERS = new EncounterCollection();

TESTENCOUNTERS.add(new Encounter({awardedXP: 100}));
TESTENCOUNTERS.add(new Encounter({awardedXP: 60}));

console.log("test students");
console.log(TESTSTUDENTS);
$(document).ready(function() {
	$('#student-table').DataTable({
		data: TESTSTUDENTS.models,
		columns: [
			{ data: 'attributes.firstName', title:'First Name'},
			{ data: 'attributes.lastName', title:'Last Name'},
			{ data: 'attributes.userName', title:'User Name'},
			{ data: 'attributes.password', title:'Password'}
		]
	});
});
*/

/*
var newStudent = new Student({firstName:'jim'});
newStudent.save({}, {
	success: function (model, response, options) {
		console.log("The model has been saved to the server");
	},
	error: function (model, xhr, options) {
		console.log("Something went wrong while saving the model");
	}
});

var newStudent1 = new Student({ID: 123});
newStudent1.fetch({
	success: function (collection, response, options) {
		console.log("Found the student.");
	},
	error: function (collection, response, options) {
		console.log("Failed to find the student.");
	}
})




// Lets try to update a book [UPDATE]
var book1 = new Book({ ID: 40 });
book1.fetch({
    success: function (bookResponse) {
        console.log("Found the book: " + bookResponse.get("BookName"));
        // Let us update this retreived book now (doing it in the callback) [UPDATE]
        bookResponse.set("BookName", bookResponse.get("BookName") + "_updated");
        bookResponse.save({}, {
            success: function (model, respose, options) {
                console.log("The model has been updated to the server");
            },
            error: function (model, xhr, options) {
                console.log("Something went wrong while updating the model");
            }
        });
    }
});


// Let us delete the model with id 13 [DELETE]
var book2 = new Book({ ID: 40 });
book2.destroy({
    success: function (model, respose, options) {
        console.log("The model has deleted the server");
    },
    error: function (model, xhr, options) {
        console.log("Something went wrong while deleting the model");
    }
});





*/





/*
var studentCollection = new StudentCollection();

studentCollection = studentCollection.add(new StudentModel());
*/

/*
// ITEMS

var itemTypes = ['phenotype','magic pixie dust','genetic counseling hours (4 hours)','PDF Summary'];

var itemCollection = new ItemCollection();

itemCollection.add(new ItemModel({itemType:'phenotype',id:124,name:'Demo syndrome'}));
itemCollection.add(new ItemModel({itemType:'phenotype',id:8,name:'backbone misalignment'}));
itemCollection.add(new ItemModel({itemType:'magic pixie dust',id:145643634,name:'the coolest new thing we sell'}));
itemCollection.add(new ItemModel({itemType:'phenotype',id:45,name:'underscored javascript'}));
itemCollection.add(new ItemModel({itemType:'genetic counseling hours (4 hours)',id:15654,name:'face-time'}));
itemCollection.add(new ItemModel({itemType: 'PDF Summary',id:10438294832,name:'The best PDF ever'}));

var itemsView = new ItemsView({collection: itemCollection});

// PRODUCTS

var getItems = function (indecesToGet) {
	var itemsToReturn = new ItemCollection();

	for (var i=0; i < indecesToGet.length; i++) {
		itemsToReturn.add(itemCollection.at(indecesToGet[i]));
	}

	return itemsToReturn;
}

var productCollection = new ProductCollection();

productCollection.add(new ProductModel({items: getItems([0,1]), id:999, name:'A bundle of phenotypes', productType:'phenotype_bundle'}));
productCollection.add(new ProductModel({items: getItems([2,5]), id:123, name:'Pixie Dust Report'}));
productCollection.add(new ProductModel({items: getItems([3]), id:467, name:'A la carte phenotype 45',productType:'ALC_phenotype'}));

var productsView = new ProductsView({collection: productCollection});

// PRODUCT GROUPS
*/
