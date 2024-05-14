const express = require("express");
const cors = require("cors");
const path = require("path");
const sgMail = require('@sendgrid/mail')

const projectData = require("./data/projects-data");
const reviews = require("./data/reviews");

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
  let response = projectData;
  if(req.query && req.query.limit) {
    response = projectData.slice(0, req.query.limit);
  }
  res.end(JSON.stringify(response));
});

app.get('/reviews', async(req, res) => {
  res.end(JSON.stringify(reviews));
});

app.post('/mailer', (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  console.log('KEY', process.env.SENDGRID_API_KEY);
  const msg = {
    from: 'hunter@codadevelopment.net',
    to: 'office@brothersbandb.com',
    subject: 'NEW SUBMISSION FROM WEBSITE',
    html: `${req.body.firstName} ${req.body.lastName} <br/> ${req.body.email} <br/> ${req.body.phone} <br /> ${req.body.message} `
  }
  sgMail.send(msg)
  .then(() => {
    res.status(200);
    res.end()
  })
  .catch((error) => {
    console.log('ERROR SENDING EMAIL', error);
    res.status(500);
    res.end();
  })
});

let port = process.env.PORT;
if(!port) {
  port = 3000;
}

app.listen(port);