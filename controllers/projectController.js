const Project = require('../models/project');

// Show a list of projects
exports.getProjects = async (req, res) => {
  const projects = await Project.find().lean();
  res.render('home', { projects });
};

// Display create project form
exports.getCreateProjectForm = (req, res) => {
  res.render('create');
};

// Handle project creation form submission
exports.createProject = async (req, res) => {
  const { name, description, author } = req.body;
  const newProject = new Project({ name, description, author });
  await newProject.save();
  res.redirect('/');
};
