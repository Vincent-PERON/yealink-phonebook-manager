require('dotenv').config();
const fs = require('fs');
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

const phoneController = {


// homepage
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


// Show contacts in phone book
showContacts: async (req, res) => {
    try {
        const phoneBookName = req.params.name
        const phoneBookFolder = process.env.PHONE_BOOK_FOLDER 
        const test = phoneBookFolder + phoneBookName
        
        //xml file from https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms762271(v=vs.85)
        const xmlFile = fs.readFileSync(test, 'utf8');
        const parser = new XMLParser();
        const json = parser.parse(xmlFile);
        
        // console.log(`HELOOOOOOOOOO: `, json.YealinkIPPhoneDirectory.DirectoryEntry);

        const contacts = json.YealinkIPPhoneDirectory.DirectoryEntry

        res.render('contacts', { contacts } );
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},





};

module.exports = phoneController;