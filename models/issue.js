const mongoose = require('mongoose');

//issue schema
const issueSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    labels: [String],
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  });
  

const Issue = mongoose.model('Issue', issueSchema);
  
module.exports = Issue ;