const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs')

const adminRouts = require('./routes/admin');
const shopRoutes = require('./routes//shop');
const path = require("path");
//const rootDir = require('./util/path');
const exp = require("constants");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouts);
app.use(shopRoutes); // the head page

app.use((req, res, next) => { //error page
    //res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: "Page Not Found"});
  });


app.listen(3000);

