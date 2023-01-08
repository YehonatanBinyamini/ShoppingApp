const express = require("express");

const app = express();
app.set('view engine', 'ejs')

const adminRouts = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require("path");
//const rootDir = require('./util/path');
const errorController = require('./controllers/error')
const exp = require("constants");

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouts);
app.use(shopRoutes); // the head page

app.use( errorController.get404 ); //error page


app.listen(3000);

