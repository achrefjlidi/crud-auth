const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
	title: String,
	description: String,
	published: Boolean,
});

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;