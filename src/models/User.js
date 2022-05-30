import Sequelize from 'sequelize'
import sequelize from '../database/index'

import Task from './Task'

const User = sequelize.define('user',{
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastName: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
})


User.hasMany(Task, {foreignkey: 'userId', sourceKey: 'id'})
Task.belongsTo(User, {foreignKey: 'userId', sourceKey: 'id'})


export default User