
const phoneController = {

// homepage
index: async (req, res) => {
    try {
        res.render('index');

    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},





};

module.exports = phoneController;