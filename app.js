var express = require("express");
var cors = require('cors')
var app = express();

app.use(cors())

const data = require("./utilData.json");

app.get("/data", function(req, res) {
	res.json(data);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
