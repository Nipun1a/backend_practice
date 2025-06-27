require('dotenv').config(); // Load environment variables from .env file
// Import necessary modules
import 'dotenv/config'; // Ensure dotenv is configured
import express from 'express';
const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000
app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // Uncomment if you need to parse URL-encoded bodies
// Middleware to log request details

let teaData = [] 
let nextId = 1;

app.post('/teas' , (req, res) => {
    const {name, type, price} = req.body;
    const newTea = {id: nextId++, name, type, price};
    teaData.push(newTea);
    res.status(201).json(newTea);
}
)

app.get('/teas', (req, res) => {
    res.json(teaData);
})
// Endpoint to get a specific tea by ID
app.get ('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id));
    if (!tea){
        return res.status(404).send('Tea not found');
    }
    res.json(tea);
})

// Endpoint to update a specific tea by ID
app.put('/teas/:id', (req, res) => {
    const tea = teaData.find(t=> t.id === parseInt(req.params.id));
    if (!tea){
        return res.status(404).send('Tea not found');
    }
    const {name, type, price} = req.body;
    tea.name = name;
    tea.type = type;
    tea.price = price;
    res.json(tea);
})

// Endpoint to delete a specific tea by ID
app.delete('/teas/:id', (req, res) => {
    const teaIndex = teaData.findIndex(t => t.id === parseInt(req.params.id));
    if (teaIndex === -1){
        return res.status(404).send('Tea not found');

    }
    teaData.splice(teaIndex, 1);
    return res.status(204).send(); // No content

})

/*
app.get('/', (req, res) => {
    res.send("hello world");
});
app.get('/about', (req, res) => {
    res.send("About Page");
});
app.get("/twitter", (req, res) => {
    res.send("Twitter Page");
});
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});
*/
app.listen(port,() => {
    console.log(`server running at http://localhost:${port}/`);

}); 
// i am dealing with the issue in which i am not able to run the server with the help of nodemon  tommorrow i will try to resolve the issue and run the server with the help of nodemon

// now nodemon is working fine and i am able to run the server with the help of nodemon

// i am unable to tun the fetch the data in the postman with the help of post method i will do it later 
// the task of yours to check all the endpoints and check whether they are working or not 

