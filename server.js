const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const routes = require('./controllers')

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

//these lines of code set handlebars/js as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,'public')));
app.use(require('./controllers/home-routes.js'));


app.use(express.json());

app.use(routes);
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('Now listening'));
});