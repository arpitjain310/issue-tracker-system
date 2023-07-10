const Project = require('../models/project');
const Issue = require('../models/issue');

// Show bugs related to a project
exports.getProjectIssues = async (req, res) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);
  if (!project) {
    return res.status(404).send('Project not found');
  }

  const issues = await Issue.find({ projectId });
  res.render('project', { project, issues });
};

// Display create issue form
exports.getCreateIssueForm = async (req, res) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);
  if (!project) {
    return res.status(404).send('Project not found');
  }
  res.render('create-issue', { project });
};

// Handle issue creation form submission
exports.createIssue = async (req, res) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);
  if (!project) {
    return res.status(404).send('Project not found');
  }

  const { title, description, author, labels } = req.body;
  const newIssue = new Issue({ title, description, author, labels, projectId });
  await newIssue.save();
  res.redirect(`/project/${projectId}`);
};
