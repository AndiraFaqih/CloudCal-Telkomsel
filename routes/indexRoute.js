const controller = require('../controllers/indexController');
const express = require('express');
const router = express.Router();

router.post('/calculate', controller.calculateTriangle);

module.exports = router;