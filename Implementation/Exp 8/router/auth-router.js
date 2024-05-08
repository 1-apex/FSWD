const express = require('express');
const router = express.Router();

const validate = require('../validate-middleware');

router.post('/login', validate, async (req, res) => {
    try {
        res.status(200).json({ message: 'User logged in successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error in user login.' });
    }
});

module.exports = router;