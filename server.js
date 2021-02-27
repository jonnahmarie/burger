const express = require("express");

const PORT = process.env.port || 3030;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout:main }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(PORT, () => {
    console.log("App now lsitening at localhost: " + PORT);
});