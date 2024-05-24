const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const userRoutes = require('./routes/userRoute.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layouts/master');

app.use('/', userRoutes);

const port = 8000
app.listen({ port }, () => console.log(`Running in port ${port}`))