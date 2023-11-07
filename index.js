import express from "express";
// take in incoming post request body
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

// initialize bodyparser - json data in our app;
app.use(bodyParser.json());

app.use("/users", usersRoutes);

// Routes
app.get("/", (req, res) => res.send("Hello from Homepage."));

// listen for incoming requests
app.listen(PORT, () =>
    console.log(`Server Running on port: http://localhost:${PORT}`)
);
