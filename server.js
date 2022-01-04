//modules
const express = require("express");
const path = require("path");
const fs = require("fs");
var notesDB = require("./db/db.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
