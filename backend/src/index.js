const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json()) //Transforma o json em algo entendível pelo JS
app.use(routes)

//Rota é o conjunto completo e recurso é o que vem depois da /

/*
MÉTODOS HTTP:
•GET: Buscar/listar uma informação do back-end; é o mais importante
•POST: Criar uma informação no back-end
•PUT: Alterar uma informação no back-end
•DELETE: Deletar uma informação no back-end

TIPOS DE PARÂMETRO:
•Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
•Route: Parâmetros utilizados para identificar recursos
•Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

BANCO DE DADOS:
•SQL: MySQL, SQLite, PostgreSQL, Microsoft SQL Server
•NoSQL: MongoDB, CouchDB

•Driver: SELECT * FROM users
•Query Builder: table('users).select('*').where()
*/


app.listen(3333)