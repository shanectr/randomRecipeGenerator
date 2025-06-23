import express from "express";
import axios from "axios";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
const API_URL = "https://www.themealdb.com/api/json/v1/1/";

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "random.php");
    console.log(result.data);
    res.render("index.ejs", { content: result.data.meals[0] });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
