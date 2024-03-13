
const {hashedSecret} = require('./config/crypto');
const express = require('express');
const session = require('express-session');
const app = express();
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3031;
const { dbConnection } = require('./config/db');
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs/index");

require('dotenv').config();

app.set('trust proxy', 1);
app.use(session({
    secret: hashedSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

dbConnection();

// Configuración body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//IMPORTANTE!! NO PONER ESTA LINEA ANTES DEL BODYPARSER
app.use('/', productRoutes);
app.use('/', authRoutes);

//Configuración pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Configuración archivos en public
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}/products
`));

module.exports = app;