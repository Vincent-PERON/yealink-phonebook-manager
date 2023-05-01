const express = require('express');
const router = express.Router();

// controller
const phoneController = require('./controllers/phoneController');


// Page d'accueil
router.get('/', phoneController.index);


// Affichage des contacts d'un annuaire
router.get('/phonebook/:name', phoneController.showContacts);


// Ajout d'un contact à l'annuaire
router.post('/add-contact', phoneController.addContact);


// Ajouter un annuaire
router.post('/addPhoneBook', phoneController.addPhoneBook);


module.exports = router;