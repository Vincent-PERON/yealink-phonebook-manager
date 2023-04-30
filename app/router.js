const express = require('express');
const router = express.Router();
// controllers
const phoneController = require('./controllers/phoneController');


// Page d'accueil
router.get('/', phoneController.index);

// Affichage des contacts d'un carnet d'adresses
router.get('/phonebook/:name', phoneController.showContacts);


module.exports = router;