const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const { ensureAuthenticated } = require('../middleware/authMiddleware');

router.post('/upload', ensureAuthenticated, fileController.uploadFile);
router.get('/file/:id', ensureAuthenticated, fileController.getFile);

module.exports = router;
