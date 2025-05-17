import express from "express";

const PORT = 3000;

const app = express();

app.get("/test", (req, res) => {
    res.json({"status": "Ok", "info": "Connected"})
});

app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`)
})

