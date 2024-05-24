import express from "express";
import cors from "cors";
import ejs from "ejs";

const app = express();

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');

// Rute untuk halaman user
app.get('/user', (req, res) => {
    res.render('layouts/master');
});

const port = 8000
app.listen({ port }, () => console.log(`Running in port ${port}`))