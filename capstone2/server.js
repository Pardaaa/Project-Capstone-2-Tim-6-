import express from "express";
import cors from "cors";
import ejs from "ejs";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => console.log('Running...'))