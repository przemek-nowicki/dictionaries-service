const Country = require('./country.model');

exports.getCountryList = async () => {
    try {
        return await Country.find({});
    } catch (e) {
        console.error(`[error] ${e}`);
        throw Error('Error while fetching countries');
    }
};