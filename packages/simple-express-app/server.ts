import express from "express";
import cors from "cors";
const port = 3001;
const app = express();
app.use(cors());
app.get("/", (_, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
