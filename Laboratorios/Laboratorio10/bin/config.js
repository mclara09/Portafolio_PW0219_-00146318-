const Mongoose= require("mongoose");
let database = "RegisterDB"
let host ='localhost'
let port='27017'
let url=`mongodb://${host}:${port}/${database}`

const connect=()=>{
    Mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.timeLog(`conexcion a la base $(database) exitosa`);
    })
    .catch(()=>{
        console.log(`Un error ha ocurrido al conectar con la base de datos`);
     } );
};

module.export={
    connect
}