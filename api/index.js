const router = require('express').Router();
const CountryController = require('./country/country.controller');

router.use('/country', CountryController);

module.exports = router;