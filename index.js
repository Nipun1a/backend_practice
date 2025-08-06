const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function (req, res) {
   // res.send('hello world');
   res.render('index');
});

app.get('/read', function (req, res) {
   res.render('read');
});

app.listen(3001, function() {
    console.log('Server is running on port 3001'); // this is working on the port http://localhost:3001
});
