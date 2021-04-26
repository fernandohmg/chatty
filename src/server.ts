import { http } from "./http";
import "./websockets/admin";
import "./websockets/client";

http.listen(3333, () =>
  console.log(
    "Server is running. Pages: http://localhost:3333/pages/admin and http://localhost:3333/pages/client"
  )
);
