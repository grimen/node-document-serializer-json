var Serializer = require('..');

var serializer = new Serializer();

var object = {foo: "bar"}, data;

console.log("Object: ", require('util').inspect(object), typeof object);

data = serializer.serialize(object);

console.log("Serialized: ", require('util').inspect(data), typeof data);

object = serializer.deserialize(data);

console.log("Deserialized: ", require('util').inspect(object), typeof object);
