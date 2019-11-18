//Contains methods for parsing and creating JSON values.

var JSONobj = JSON.stringify({}); //'{}' 
var obj = JSON.parse(JSONobj); //{}

var obj = {name: "Akansha", surname: "Wajge"};

var stringified = JSON.stringify(obj);
var parsed = JSON.parse(stringified);