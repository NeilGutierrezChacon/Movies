const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Hello world" });
})

//Routes movies
app.use(require('./routes/movies'));
app.use(express.json());


app.listen('3000', () => {
    console.log("Server on port 3000");
});