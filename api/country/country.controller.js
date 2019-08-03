const express = require('express');
const router = express.Router();
const countryServices = require('./country.service');

router.get('/', async (req, res) => {
    try {
       const data = await countryServices.getCountryList();
       return res.status(200).send({data});
    } catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
});

module.exports = router;