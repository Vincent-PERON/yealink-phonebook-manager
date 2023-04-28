const express = require('express');
const router = express.Router();
// controllers
const phoneController = require('./controllers/phoneController');


// Page d'accueil
router.get('/', phoneController.index);


module.exports = router;