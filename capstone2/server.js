import express from "express";
import cors from "cors";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// Rute untuk halaman user
app.get('/user', (req, res) => {
    res.render('layouts/master');
});

const port = 8000
app.listen({ port }, () => console.log(`Running in port ${port}`))