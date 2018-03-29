const express = require('express');
const bodyparser = require('body-parser');
const helmet = require('helmet');

const port = process.env.PORT || 3000;

const userRouter = require('./api/routes/user.route');

const app = express(); // app é sempre composto da request e da response, to passando um middle para ele

app
    .use(helmet())
    .use(bodyparser.urlencoded({extended:true}))
    .use(bodyparser.json())
    .use(userRouter) 
    .listen(port,()=>{console.log(`Server running on PORT: ${port}`)}) // libera a porta apos o uso
    