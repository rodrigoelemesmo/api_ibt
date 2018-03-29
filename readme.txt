- npm init -y: cria pck.json
- no node, se quiser instalar global, tenho que dar um -g no npm install
- npm install express helmet body-parser joi --save (o save  adiciona as dependencias dentro do pckag json) (dependencias de projeto)
- npm i chai chai-http mocha --save-dev (dev dependency nao precisa para rodar, nao faz perte do core e cosia de teste)
- abrir a raiz do projeto e criar um .gitgnore escrito node_modules
- criar um app.js - importar dependencias
- helmet é um middleware de seguranca
const express = require('express');
const bodyparser = require('body-parser');
const helmet = require('helmet');
configurar funcionamento do aplicaçao:

const express = require('express');
const bodyparser = require('body-parser');
const helmet = require('helmet');

const port = process.env.PORT || 3000;

const app = express(); // app é sempre composto da request e da response, to passando um middle para ele
app
    .use(helmet())
    .use(bodyparser.urlencoded({extended:true}))
    .use(bodyparser.json())
    .listen(port,()=>{console.log(`Server running on PORT: ${port}`)}) // libera a porta apos o uso
    
Nesse ponto, devo criar uma pasta chamada api na raiz, uma route

boto isso no user.router:
const express = require('express');
const router = express.Router();

router.get('/tb_ibt',(req,res)=>{
    res.status(200).send({message:'Seu GET deu certo!'})
})

router.post('/tb_ibt',(req,res)=>{
    res.status(201).send({message:'Seu POST deu certo!'})
})

module.exports = router;

a ultima linha deixa o arquivo publico para a aplicacao 

- criar o sequelize dentro da pasta api
- criar uma models-persistence para declarar os metodos dentro




