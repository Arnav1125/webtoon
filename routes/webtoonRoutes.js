const express = require('express');
const router = express.Router();
const webtoonController = require('../controllers/webtoonController');

// GET all webtoons
router.get('/', webtoonController.getAllWebtoons);

// GET a specific webtoon by characterId
router.get('/:characterId', webtoonController.getWebtoonById);

// POST a new webtoon
router.post('/', webtoonController.createWebtoon);

// DELETE a webtoon by characterId
router.delete('/:characterId', webtoonController.deleteWebtoon);

module.exports = router;
