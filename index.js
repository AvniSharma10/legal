
import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact", { message: null });
});

app.post("/contact", (req, res) => {
  const name = req.body.name;
  const message = `Thank you, ${name}, for the comment.`;
  res.render("contact.ejs", { message });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
