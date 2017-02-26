

//Read all the directory files
var req = require.context('./', true, /\.js$/);
req.keys().forEach(req);
