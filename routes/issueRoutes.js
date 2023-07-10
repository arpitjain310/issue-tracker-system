const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

// Project Detail route
router.get('/project/:id/', issueController.getProjectIssues);

// Create Issue routes
router.get('/project/:id/create-issue', issueController.getCreateIssueForm);
router.post('/project/:id/create-issue', issueController.createIssue);

module.exports = router;
