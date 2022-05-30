import app from './src/app'
import sequelize from './src/database/index.js'


const PORT = 4000


sequelize.sync({force: false})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server listening on port ${PORT}`)
    })
})

