import Express from "express";
import Mongoose from "mongoose";
import bodyParser from "body-parser";

const app = Express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static("public"));

Mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = new Schema({
    title: String,
    content: String
});

const Article = Mongoose.model("Article", articleSchema);



app.listen(3000, () => {
    console.log("Server started on port 3000");
});