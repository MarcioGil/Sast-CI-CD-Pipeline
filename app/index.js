const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

// Segredo agora vem de variável de ambiente
const SECRET_KEY = process.env.SECRET_KEY || 'default_secret';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Banco de dados SQLite
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)');
  db.run("INSERT INTO users (username, password) VALUES ('admin', 'admin123')");
});

app.get('/', (req, res) => {
  res.send('<h2>Login</h2><form method="POST" action="/login"><input name="username"/><input name="password" type="password"/><button type="submit">Login</button></form>');
});

// Correção: uso de prepared statement para evitar SQL Injection
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, row) => {
      if (row) {
        res.send(`<h2>Dashboard</h2><p>Bem-vindo, ${row.username}!</p><p>Chave secreta: ${SECRET_KEY}</p>`);
      } else {
        res.send('<p>Login falhou</p>');
      }
    }
  );
});

app.listen(3000, () => {
  console.log('App rodando em http://localhost:3000');
});
