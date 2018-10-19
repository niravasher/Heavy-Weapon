const express = require("express");
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const port = process.env.PORT || 3105;
const app = express();

app.use(express.static('./static'));

//set up view engine
app.set('view engine', 'ejs');

//setup routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Now listening for requests on port ${port}`);
});
