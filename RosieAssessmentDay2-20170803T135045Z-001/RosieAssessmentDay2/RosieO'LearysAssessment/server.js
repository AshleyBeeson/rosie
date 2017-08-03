const express = require('express');
const fs = require('fs');
const getBugs = require('./db/bugs.json');
const app= express();
const MongoClient= require('mongodb');

var bugArray = [];

MongoClient.connect('mongodb://localhost/local', function(err, db) {//connects server to mongo
	
	const bugs = db.collection('bugs').find({}).toArray(function(err,docs){//finds collection called bugs precreated by createDatabase.js
		bugArray = docs;
	});
});

app.set('port', process.env.PORT || 8081)//sets server to open on port 8081

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/bugs", (req,res)=>{//creates an api called bugs containing all the information
	
	
	
	const r = (()=>{
		return bugArray;
	})();

	if (typeof r !== 'undefined'){
		res.json(r);//sends all the information to a json format
	}else{
		res.json([]);
	}
});
app.get('/api/bugActions',(req,res)=>{//creates an api called bug actions that has an id and the actions, I thought it would
									//be easier to examine why i couldn't get the actions to display	
	const r=(()=>{
		return bugArray.map(bugs => {
			return{'id': bugs.id, 'actions': bugs.actions};
		});
	})();
	
	if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }

});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);//once the port for the server has been gotten, node command prompt displays this
});