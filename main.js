const express = require("express");
const cors = require("cors");
const path = require("path");

const projectData = require("./data/projects-data");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Page Requests
app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/services', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages/services.html'));
});

app.get('/projects', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages/projects.html'));
});

app.get('/about', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages/about.html'));
});

app.get('/team', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages/team.html'));
});

app.get('/contact', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages/contact.html'));
});

// Data Requests
app.get('/project-data', async(req, res) => {
  res.end(JSON.stringify(projectData));
})

let port = process.env.PORT;
if(!port) {
  port = 3000;
}

app.listen(port);