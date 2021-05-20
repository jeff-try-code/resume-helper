const express = require('express');
const mongoose = require('mongoose');
const ProductStyles = require('./db/userModel');

const app = express();
const port = 3001;

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect('mongodb://localhost:27017/mvp-project', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.get('/tags', (req, res) => {
  ProductStyles.findOne({name: 'jeff'})
    .then(result => {
      res.send(result.tags);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/tags', (req, res) => {
  ProductStyles.findOneAndUpdate({name: 'jeff'},{ $push: { tags: req.body.tag }},)
  .then(result => {
    res.send('done');
  })
  .catch(err => {
    console.log(err);
  });
});

app.post('/tags/delete', (req, res) => {
  ProductStyles.findOneAndUpdate({name: 'jeff'},{ $pull: { tags: req.body.tag }},)
  .then(result => {
    res.send('done');
  })
  .catch(err => {
    console.log(err);
  });
});

app.get('/projects', (req, res) => {
  ProductStyles.findOne({name: 'jeff'})
    .then(result => {
      res.send(result.projects);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/projects', (req, res) => {
  ProductStyles.findOneAndUpdate({name: 'jeff'},{ $push: { projects: req.body.project }},)
  .then(result => {
    res.send('done');
  })
  .catch(err => {
    console.log(err);
  });
});

app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`);
});