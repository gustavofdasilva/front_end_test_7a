const express = require('express');
const app = express()
const ejs = require('ejs');

app.set('view engine','ejs')
app.use('/public',express.static('public'));

app.get('/',(req,res)=>{
    res.render('index', {
        value: 0,
    })
})

app.listen(8000);
