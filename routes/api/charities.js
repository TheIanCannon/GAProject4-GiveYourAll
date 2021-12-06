const express = require('express');
const router = express.Router();
const charityCtrl = require('../../controllers/api/charities');

// GET /api/charities through API search
router.get('/', charityCtrl.charitySearch);
// POST a new instance of a charity based on Model to DB
router.post('/charities/:ein', charityCtrl.charityGet);

module.exports = router;