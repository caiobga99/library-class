import express from "express";


const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port: number = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`listening on port ${port}!`));
