import req from 'express/lib/request'
import res from 'express/lib/response'
import jwt from 'jsonwebtoken'
require('dotenv').config()
import User from '../models/User'

export const verifyToken = async() =>{
    try{
        const {Authorization} = req.headers
        const token = Authorization.replace('Bearer ', '')
        if(!token){
            return res.status(403).json({message: 'No Authorization token provided'})
        }
        const decoded = jwt.verify(token, process.env.SECRET)
        if(decoded.JsonWebTokenError){
            console.log('Invalid Token')
            return res.status(403).json({message: 'Unauthorized'})
        }
        req.userId = decoded.user.id
        const user = await User.findOne({
            where:{
                id: req.userId
                }
            })
        if(!user) return res.status(404).json({message: 'user not found'})
        next()
    }
    catch(err){
        res.status(403).json({message: 'Error in credentials validation'})
    }
}