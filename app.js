let express = require('express');
let app = express();
const path = require('path');
const logger = require(path.resolve('src/routes/logger.js'));
const connectDb = require(path.resolve('src/routes/connectDb.js'));
app.set('view engine', 'ejs');

app.initilize=function(pg){
    app.pg = pg;
}
app.use(express.urlencoded({extended:false}));
app.use(logger);
app.get('/', function(req, res) {
    res.render('foo');
});
app.post('/connect',connectDb);

module.exports = app;
