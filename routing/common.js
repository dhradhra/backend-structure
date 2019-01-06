const body_parser = require('body-parser');
const router = require('express').Router();
const Joi = require('joi');
const validator = require('express-joi-validation')({ passError: true });
const common_controller = require('.././controller/common.js');
var joi_options = { joi: { convert: true, allowUnknown: true } }
var db = require('../db.js');


const login_schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
});

router.post('/login', validator.body(login_schema, joi_options), function (req, res) {
    common_controller.login(req.body, db).then(function (response) {
        res.status(200).send(response)
    },
    function(err){
        res.status(400).send(err)
    })
    .catch(function(exception){
        res.status(400).send(exception)
    })
})

module.exports = router
