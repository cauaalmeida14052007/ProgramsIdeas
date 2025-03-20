const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Pasta para arquivos HTML, CSS e JS

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
