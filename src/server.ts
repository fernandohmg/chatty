import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Get page" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Post page" });
});

app.listen(3333, () => console.log("server running on 3333"));
