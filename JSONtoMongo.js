'use strict';
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri);
fs.readFile("listings.json", 'utf8', function(err, data){
  var JSONdata = JSON.parse(data);
  JSONdata.entries.forEach(function(element){
    var temp = new Listing({
      code: element.code, 
      name: element.name, 
      coordinates: element.coordinates,
      address: element.address
    });
    temp.save(function(err){
      if(err) throw err;
      console.log("Saved successfully!");
    })
 })
 
}); 
