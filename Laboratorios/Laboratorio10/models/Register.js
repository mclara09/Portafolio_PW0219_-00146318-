const Mongoose=require(`mongoose`)
const RegisterSchema=Mongoose.Schema({
    carnet:String,
    schedule:String,
    isLate:Boolean,
    datetime:Date
})
module.export=Mongoose.model('Register',RegisterSchema)