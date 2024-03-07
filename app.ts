import express from "express";
import bodyParser from "body-parser";

import todosroutes from "./routes/todos";

const app = express();

app.use(bodyParser.json());

app.use(todosroutes);

app.listen(4000, () => {
    console.log("Listening on port 4000");
});
