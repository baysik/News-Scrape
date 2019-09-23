var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var savedArticleSchema = new Schema({
  state: String
});

// This creates our model from the above schema, using mongoose's model method
var savedArticle = mongoose.model("savedArticle", savedArticleSchema);

// Export the Note model
module.exports = savedArticle;
