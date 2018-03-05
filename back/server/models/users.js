'use strict';

const db = require('../db');
const Sequelize = db.Sequelize;

const User = db.define('user', {
    
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
        //set(val){}
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },

})

module.exports = User;