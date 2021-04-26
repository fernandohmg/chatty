import express from "express";
import { createServer } from "http";
import path from "path";
import { Server, Socket } from "socket.io";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});

const http = createServer(app); //Http protocol creation
const io = new Server(http); //Websocket protocol creation

io.on("connection", (socket: Socket) => {
  //   console.log("Connected", socket.id);
});

app.use(express.json());

app.use(routes);

export { http, io };
