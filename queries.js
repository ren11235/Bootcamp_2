/* Add all the required libraries*/
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),  
    config = require('./config');
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name: 'Library West'}, function(err, building){
    if(err) throw err;
    console.log(building);
  })
};
var removeCable = function() {
  Listing.find({code: 'CABL'}, function(err, buildings){
    if(err) throw err;
    buildings.forEach(function(element){
      element.remove(function(err){
      if(err) throw err;
      console.log(element);
      })
    })
    
  })
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
 Listing.find({name: 'Phelps Laboratory'}), function(err, building){
    if(err) throw err;
    building.address = '1953 Museum Rd, Gainesville, Fl 32603';
    building.save(function(err){
      if(err) throw err;
    })
    console.log(building);
  
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, buildings) {
    if (err) throw err;
  
    // object of all the users
    console.log(buildings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
