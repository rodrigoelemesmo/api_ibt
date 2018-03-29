// criar funcoes e exportat
const Joi = require('joi'); // validador

const {createUser} = require('../../server/models-persistence/user.models')

module.exports.foo = function(req,res){
    const pedrinhoSchema = {
        email: Joi.string().email().required(),
        lat: Joi.number().required(),
        long: Joi.number().required(),
        currentTime: Joi.date().required()
    }

    const reqSchema = {
        pedrinhos: Joi.array().min(1).required()
    }

    const validation = []
    validation.push(Joi.validate(req.body,reqSchema))

    for (let lilp of req.body.pedrinhos){
        validation.push(Joi.validate(lilp,pedrinhoSchema)) // array de promisse de pedrinhos
    }

    Promise.all(validation)
        .then(()=>{
            res.status(200).send({message: 'Array do pedrinho validado!'})
        })
        .catch((err) => {
            res.status(404).send({error: `Array inválido! ${err}`})
        })
}

module.exports.createUser = createUser 