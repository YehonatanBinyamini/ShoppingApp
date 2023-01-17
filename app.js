const express = require("express");

const app = express();
app.set('view engine', 'ejs')

const adminRouts = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require("path");
const db = require('./util/database')



//const rootDir = require('./util/path');
const errorController = require('./controllers/error')

app.use(express.urlencoded({ extended: true })) //solved the problem with body parser
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouts);
app.use(shopRoutes); 

app.use( errorController.get404 ); //error page


app.listen(3000);

