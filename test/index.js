
var Serializer = require('../../node-document-serializer');

module.exports = Serializer.Spec('JSON', {
  module: require('..'),
  engine: JSON,
  options: {},
  pack: JSON.stringify,
  unpack: JSON.parse,
  binary: false
});
