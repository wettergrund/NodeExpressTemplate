const express = require('express');
const controller = require('../controllers/ExampleController');

const router = express.Router();

router.get('/',controller.getExample)

module.exports = router;