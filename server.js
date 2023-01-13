const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const routes = require('./routes');

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'personal'
}

//*SETTINGS
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');

//*MIDDLEWARES:
app.use(myConnection(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//*VIEWS
app.set('views', path.join(__dirname, 'views'));

//*ROUTES:
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
})