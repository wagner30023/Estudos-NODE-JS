const express = require('express');

const  router = express.Router();

router.get('/',(req,res) => {
    let obj = {  
        pageTitle: "Teste 123"
    }
    res.render('home',obj);
});



router.get('/sobre',(req,res) => {
    let obj = {  
        pageTitle: "Sobre"
    }
    res.render('sobre',obj);
});

module.exports = router;