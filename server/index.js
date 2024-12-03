import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const port = 4000;
app.listen(port, () => {
    console.log(`Server started at port ${port}...`);
});