import Sequelize from 'sequelize'
import sequelize from '../database/index'

const Task = sequelize.define('task',{
    amount: {
        type: Sequelize.INTEGER
    },
    category: {
        type: Sequelize.ENUM('out', 'entry')
    },
    userId:{
        type: Sequelize.INTEGER
    },
    date: {
        type: Sequelize.STRING
    },
    concept: {
        type: Sequelize.TEXT
    },
}, {
    timestamps: true
})

// Task.sync({force: true})

export default Task



