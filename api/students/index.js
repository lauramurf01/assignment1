var datastore = require('./datastore');
var shortId = require('shortid');
// Get list of contacts
exports.index = function(req, res) {
  return res.json(200, datastore.contacts);
} ;
// Creates a new contact in datastore.
exports.create = function(req, res) {
  var contact = {
     id: shortId.generate(),
     name: req.body.name,
     address: req.body.address,
     phone_number: req.body.phone_number 
  };
  datastore.contacts.push(contact)
  return res.json(201, contact);
};