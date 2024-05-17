const express = require('express');
const router = express.Router();
const sentimentController = require('../controllers/sentimentController');
const { ensureAuthenticated } = require('../middleware/authMiddleware');

router.post('/analyze', ensureAuthenticated, sentimentController.analyzeText);

module.exports = router;
