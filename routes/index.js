var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});


module.exports = router;
