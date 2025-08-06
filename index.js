const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user'); // Make sure this path and file exist

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function (req, res) {
   // res.send('hello world');
   res.render('index');
});

app.get('/read', async function (req, res) {
   let users = await userModel.find();
   res.render("read", { users });
});

app.get('/delete/:id', async function(req,res) {
   let users = await userModel.findOneAndDelete({_id: req.params.id});
   res.redirect("/read"); // Redirect to the read page after deletion
});

app.get("/edit/:id", async function(req, res){
   let user = await userModel.findById(req.params.id);
   res.render("edit", { user });
});

app.post("/update/:id", async function(req, res){
   let {name, email, password, image} = req.body;
   await userModel.findOneAndUpdate({_id: req.params.id}, {name, email, password, image});
   res.redirect("/read"); // Only redirect, do not render
});


app.post('/create', async function (req, res) {
   try {
      let {name, email, password, image} = req.body;
      await userModel.create({
         name,
         email,
         password,
         image
      });
    //  res.send('User created successfully'); it is better to redirect after creation
      res.redirect('/read'); // Redirect to the read page after creation
   } catch (err) {
      res.status(500).send('Error creating user');
   }
});

app.listen(3001, function() {
    console.log('Server is running on port 3001'); // this is working on the port http://localhost:3001
});
