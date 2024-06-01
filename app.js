// const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

// app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("done")
})

app.get("/read", (req, res) => {
    res.send("read page")
})


app.listen(3000)


// cookie set krne keliy res use huta ha
// cookie read fkrne keliy req use huta ha
