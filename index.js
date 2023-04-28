// Création et configuration du serveur HTTP avec express
const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

//
app.use(express.urlencoded({ extended: true }));


// On déclare le dossier statique que l'on envoit au navigateur
app.use(express.static(path.join(__dirname, './public')));

// On affiche une page de test
app.get('/', (request, response) => {
    response.send('Server is running !')
        });

// On met le serveur en mode écoute
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});