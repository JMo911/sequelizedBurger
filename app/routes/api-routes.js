import Burger from '../models/burger'
const path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send(path.join(__dirname, '../views/main.handlebars'))
    });


}