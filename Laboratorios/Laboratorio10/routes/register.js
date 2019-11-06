var express=require('express')
var router=express.Router()
const RegisterCOntroller=require('../controllers/RegisterController')

router.get ('/',RegisterCOntroller.getAll)
router.get ('/:id',RegisterCOntroller.getOneById)
router.get ('/insert',RegisterCOntroller.insert)
router.get ('/update',RegisterCOntroller.update)
router.get ('/delete',RegisterCOntroller.deleteById)

module.exports=router