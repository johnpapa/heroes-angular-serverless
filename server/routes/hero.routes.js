const express = require('express');
const services = require('../services');

const router = express.Router();
const { heroService } = services;

router.get('/heroes', (req, res) => {
  heroService.getHeroes(req, res);
});

router.post('/hero', (req, res) => {
  heroService.postHero(req, res);
});

router.put('/hero/:id', (req, res) => {
  heroService.putHero(req, res);
});

router.delete('/hero/:id', (req, res) => {
  heroService.deleteHero(req, res);
});

// TODO: example of SQL query
// Learn more here: https://www.documentdb.com/sql/demo
// router.get('/hero/querybyname/:name', (req, res) => {
//   heroService.queryHeroesNyName(req, res);
// });

module.exports = router;
