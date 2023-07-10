const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Home Page route
router.get('/', projectController.getProjects);

// Create Project route
router.get('/create', projectController.getCreateProjectForm);
router.post('/create', projectController.createProject);

module.exports = router;
