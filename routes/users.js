const express=require('express')
const router =express.Router()
const usersController=require('../controllers/usersController')


router.get('/log-in',usersController.logIn)
router.get('/regi-ster',usersController.Register)


router.post('/create',usersController.create)
router.post('/create-session',usersController.createSession)



module.exports=router;