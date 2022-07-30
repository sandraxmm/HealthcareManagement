const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});



app.use(express.json());

app.use(routes);
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('Now listening'));
});