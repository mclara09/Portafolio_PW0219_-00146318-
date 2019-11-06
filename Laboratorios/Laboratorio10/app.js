const express = require('express')
const config=require('./bin/config')
const cors= require('cors')
const indexRouter=require('./routes/register')

var app =express()

app.listen(process,env,PORT || '3000',()=>{
    console.log('Servidor web funcionado ');
})

config.connect();
//app.use(logger('dev'));
app.use('cors');