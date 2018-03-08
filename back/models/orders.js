const db = require('../config/db')
const Sequelize = db.Sequelize

const Orders = db.define('orders', {
status:{type:Sequelize.STRING,
        allowNull:false,
        defaultValue:'Creada'}
})

module.exports = Orders
