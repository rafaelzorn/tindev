require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const server = express();

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${
        process.env.DB_PASSWORD
    }@cluster0-hinlc.mongodb.net/${
        process.env.DB_NAME
    }?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
