const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const songRoutes = require('./routes/songRoutes');
const { log } = require('console');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    res.render('index'); 
});
app.use('/songs', songRoutes); 
app.listen(PORT,() =>{
    console.log("Server is running on http://localhost:3000");
    
});
