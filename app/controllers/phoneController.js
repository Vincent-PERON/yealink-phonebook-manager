require('dotenv').config();
const fs = require('fs');
const { XMLParser } = require("fast-xml-parser");

const phoneController = {


// Page d'accueil
index: async (req, res) => {
    try {
        const phoneBookFolder = process.env.PHONE_BOOK_FOLDER ;
        const phoneBooks = fs.readdirSync(phoneBookFolder);
        res.render('index', { phoneBooks });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},


// Affichage des contacts d'un annuare
showContacts: async (req, res) => {
    try {
        const phoneBookName = req.params.name
        const phoneBookFolder = process.env.PHONE_BOOK_FOLDER 
        const phoneBookEntry = phoneBookFolder + phoneBookName
    
        const xmlFile = fs.readFileSync(phoneBookEntry, 'utf8');
        const parser = new XMLParser();
        const json = parser.parse(xmlFile);

        const contacts = json.YealinkIPPhoneDirectory.DirectoryEntry

        res.render('contacts', { contacts } );
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},



};

module.exports = phoneController;