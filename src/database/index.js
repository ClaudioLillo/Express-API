import Sequelize from 'sequelize'
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'mariadb',
    }
)

export default sequelize

