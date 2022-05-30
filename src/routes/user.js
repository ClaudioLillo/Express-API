import {Router} from 'express'

import {createUser, getAllUsers} from '../controllers/user'
// import {verifyToken} from '../middlewares/authJwt'

const router = Router()
router.post('/',createUser)
// router.get('/', verifyToken, getUser) Esta es la versión con el Middleware aplicado
router.get('/', getAllUsers)


export default router