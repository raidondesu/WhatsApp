// imports
import express from "express";

// config
const app = express();
const port = process.env.PORT || 9000;
// middleware

// Database

//

// API
app.get("/", (req, res) => res.status(200).send("hello world"));
// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
