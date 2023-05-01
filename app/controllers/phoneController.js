require('dotenv').config();
const fs = require('fs');
const { XMLParser, XMLBuilder } = require("fast-xml-parser");

const phoneBookFolder = process.env.PHONE_BOOK_FOLDER 

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


addContact: async (req, res) => {
    try {
        const { name, telephone } = req.body;

    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},



addPhoneBook: async (req, res) => {
    try {

        // On récupère le nom de l'annuaire via le formulaire
        const { phoneBookName } = req.body;

        // On créé un tableau avec un exemple
        const phoneBook = [
            {
                Name: 'Gambardella, Matthew',
                Telephone: '07654'
            },
            {
                Name: 'Gambardella, Matthew',
                Telephone: '07654'
            }
        ];

        const builder = new XMLBuilder({
            arrayNodeName: "DirectoryEntry"
        });

        const xmlContent = `<?xml version="1.0"?>
            <YealinkIPPhoneDirectory>
                ${builder.build(phoneBook)}
            </YealinkIPPhoneDirectory>`

          // On créé un fichier vierge et on insère le contenu créé plus haut
            fs.writeFile(phoneBookFolder + phoneBookName + '.xml', xmlContent , function (err) {
                if (err) throw err;
                console.log('File is created successfully.');
            });

          // On redirige sur la page référente une fois le fichier créé 
            res.redirect(req.get('referer'));

    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},








};

module.exports = phoneController;