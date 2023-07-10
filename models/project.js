const mongoose = require('mongoose');

// project schema
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  author: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
