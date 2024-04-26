const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://achref:m4xfp9ODLljJsjCy@nodecluster.w8skzvj.mongodb.net/?retryWrites=true&w=majority&appName=NodeCluster"
	)
	.then(() => {
		console.log("connected successfully");
	})
	.catch((error) => {
		console.log("error with connecting with the DB ", error);
	});

module.exports = {
	secret: "bezkoder-secret-key"
	};
  //mongodb+srv://achref:<password>@nodecluster.w8skzvj.mongodb.net/?retryWrites=true&w=majority&appName=NodeCluster