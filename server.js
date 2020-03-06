const app = require('./app');
const port = process.env.PORT || 4020;

app.listen(port, function() {
  console.log('Express server for dictionaries-service start listening on port ' + port);
});