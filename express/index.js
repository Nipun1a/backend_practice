import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world");
});
app.get('/about', (req, res) => {
    res.send("About Page");
});
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(port,() => {
    console.log(`server running at http://localhost:${port}/`);

}); 
// i am dealing with the issue in which i am not able to run the server with the help of nodemon  tommorrow i will try to resolve the issue and run the server with the help of nodemon