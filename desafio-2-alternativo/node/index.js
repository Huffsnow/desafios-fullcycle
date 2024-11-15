const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
    
    const sql = `INSERT INTO people(name) VALUES('Mika')`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Erro ao inserir no banco de dados:', err);
        } else {
            console.log('Registro inserido com sucesso');
        }
    });
});


app.get('/', (req, res) => {
    connection.query("SELECT * FROM people", (err, result) => {
        if (err) {
            console.error('Erro ao consultar o banco de dados:', err);
            return res.status(500).send('Erro ao consultar o banco de dados');
        }

        let peopleList = '<ul>';
        result.forEach(person => {
            peopleList += `<li>${person.name}</li>`;
        });
        peopleList += '</ul>';
        console.log('Retornando lista de ', result)
        res.send(`<h1>Full Cycle Rocks!</h1>\n${peopleList}`);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});