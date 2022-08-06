const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers')
//const helpers = require('./utils/helper');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create({});

//for login
const sess = {
    secret: 'encrypt password',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//these lines of code set handlebars/js as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use(require('./controllers/webRoutes.js'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('Now listening'));
});