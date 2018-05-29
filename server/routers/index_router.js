const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const sightingsRouter = require('./sightings_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('birds');
  const sightingsCollection = db.collection('sightings');
  router.use('/api/sightings', sightingsRouter(sightingsCollection));
});

module.exports = router;
