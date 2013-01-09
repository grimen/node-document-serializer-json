require('sugar');
var util = require('util');

// HACK: ...until Node.js `require` supports `instanceof` on modules loaded more than once. (bug in Node.js)
var Serializer = global.NodeDocumentSerializer || (global.NodeDocumentSerializer = require('node-document-serializer'));

// -----------------------
//  DOCS
// --------------------
//  - http://json.org
//  - http://nodemanual.org/latest/js_doc/JSON.html

// -----------------------
//  Constructor
// --------------------

// new JSON_ ()
// new JSON_ (options)
function JSON_ () {
  var self = this

  self.klass = JSON_;
  self.klass.super_.apply(self, arguments);

  self.engine = JSON;
  self.binary = false;
}

util.inherits(JSON_, Serializer);

// -----------------------
//  Class
// --------------------

JSON_.defaults = {
  options: {}
};

JSON_.options = Object.clone(JSON_.defaults.options, true);

JSON_.reset = Serializer.reset;

// -----------------------
//  Instance
// --------------------

// #serialize (object)
JSON_.prototype.serialize = function(object) {
  var self = this, data;

  try {
    data = self.engine.stringify(object);

  } catch (err) {
    err.name = "Serialization: " + err.name;
    err.message = err.message + "  =>  " + util.inspect(data);
    throw err;
  }

  return data;
};

// #deserialize (data)
JSON_.prototype.deserialize = function(data) {
  var self = this, object;

  try {
    object = self.engine.parse(data);

  } catch (err) {
    err.name = "Deserialization: " + err.name;
    err.message = err.message + "  =>  " + util.inspect(data);
    throw err;
  }

  return object;
}

// -----------------------
//  Export
// --------------------

module.exports = JSON_;
