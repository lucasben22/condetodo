import express from "express";
import mongoose from "mongoose";
import router from "./router/index.routes.js";

//SERVER
const PORT = 3000;
const app = express();
app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`)
})

//MW
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Routes
app.use("/", router);

//DB
const mongoDBUrl = "mongodb://127.0.0.1:27017/Todo";
mongoose.connect(mongoDBUrl)
    .then(()=> console.log("DB connected"))
    .catch((error) => console.log("Connection error", error));
