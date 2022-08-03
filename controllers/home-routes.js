const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        res.render('homepage', {
        
        });
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
}
});

//// GET route for getting all of the dishes that are on the menu
//router.get('/', async (req, res) => {
//// This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
  //res.render('all');
//});

//get login template, this method renders the 'login' template


module.exports = router;