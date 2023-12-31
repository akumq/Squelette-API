const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const exampleRoutes = require('./routes/example.routes');
require('dotenv').config({path: './config/.env'});

const app = express();

app.use("/static",express.static(path.resolve(__dirname,"frontend","static")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/api/example', exampleRoutes);

// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})

// index.html
app.get("/*",(req,res) => {
    res.sendFile(path.resolve(__dirname, "frontend","index.html"));
});
