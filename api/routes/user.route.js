const express = require('express');
const router = express.Router();

const {createUser,foo} = require('../controller/user.controller')

router.get('/tb_ibt',(req,res)=>{
    res.status(200).send({message:'Seu GET deu certo!'})
})

router.post('/tb_ibt',foo)

router.post('/user',createUser)

module.exports = router;