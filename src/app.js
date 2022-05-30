import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Import routes
import userRoutes from './routes/user'

const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/api/users', userRoutes)

app.get('/', async(req, res)=>{
    res.status(200).json({msg: 'API de Uso General Versión 0.0'})
})

export default app