const fs = require('fs');
require('dotenv').config();

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





};

module.exports = phoneController;