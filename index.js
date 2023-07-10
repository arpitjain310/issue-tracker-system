//importing necessary modules
const express = require('express');
const app = express();
const path = require('path');

//to use env file
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const db = require('./config/mongoose');


// setting view engine to ejs
app.set('view engine', 'ejs');

//for parsing url-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Serve static files with the correct MIME type
app.use('/assets', express.static(path.join(__dirname, 'assets'), { 
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// importing Routes
const projectRoutes = require('./routes/projectRoutes');
const issueRoutes = require('./routes/issueRoutes');

//routes redirection
app.use('/', projectRoutes);
app.use('/', issueRoutes);

//print server status
app.listen(port, function(err) {
  if (err) {
    console.log('Error in running the server', err);
  }
  console.log('Yup! My Server is running on Port', port);
});
