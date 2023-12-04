require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// config JSON and form data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// test route
app.get("/", (req, res) => {
    res.send("API Working!");
  });

// solve CORS
app.use(cors({credentials: true, origin: "http://localhost:5173"}))

// upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// db connection
require("./config/db.js")

// routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, ()=>{
    console.log(`app rodando na porta ${port}`);
});