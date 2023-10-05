const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).send({
        msg: "Welcome to Telkomsel Project API",
    });
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
app.use(require("./routes/indexRoute"));

module.exports = app;
