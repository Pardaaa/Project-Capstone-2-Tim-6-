import express from "express";
import cors from "cors";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layouts/master');

// Rute untuk halaman user
app.get('/user', (req, res) => {
    res.render('index');
});

const port = 8000
app.listen({ port }, () => console.log(`Running in port ${port}`))