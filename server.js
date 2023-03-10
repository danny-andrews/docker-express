import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
