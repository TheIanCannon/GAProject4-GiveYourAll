const express = require('express');
const router = express.Router();
const charityCtrl = require('../../controllers/api/charities');

// GET /api/charities through API search
router.get('/', charityCtrl.charitySearch);
// GET charity based on EIN
router.get('/:ein', charityCtrl.charityGet);


module.exports = router;