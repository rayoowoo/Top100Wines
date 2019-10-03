const wines = require('../public/data/top100_2018_full');

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send(wines);
})

router.get('/:id', (req, res) => {
    const wine = wines.find(el => el.id === req.params.id);
    res.send(wine);
})

module.exports = router;