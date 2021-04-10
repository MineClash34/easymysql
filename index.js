const express = require('express');
const mysql = require("mysql");
require('dotenv').config()
const app = express();
const port = 3000;





app.get('/select/:token/:toselect/:where', async (req, res) => {
    mysql.createConnection({
        user: process.env.USER, password: process.env.PASSWORD, database: req.params.token, host: process.env.HOST, port: process.env.PORT
    }).query(`SELECT ${req.params.toselect} FROM base ${req.params.where === undefined ? "" : `WHERE id = ${req.params.where}`}`, function(err, result) {
        if (err) return res.send(err);
        res.send(result);
    });
});


app.post("/update/:user/:password/:database", async (req, res) => {
    mysql.createConnection({
        user: req.params.user, password: req.params.password, database: req.params.database, host: "192.168.1.50", port: 3306
    }).query(`UPDATE base SET `, function(err, result) {if (err) return res.send(err)});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));