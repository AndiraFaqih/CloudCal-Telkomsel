const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send({
        msg: "Welcome to Telkomsel Project API",
    });
});
app.use(require("./routes/indexRoute"));

app.listen(8080, () => {
    console.log("Server running on port 8080");
});

module.exports = app;
