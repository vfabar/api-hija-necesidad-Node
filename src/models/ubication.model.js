const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ubication = sequelize.define('Ubication',{

    idUbication:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:'id_ubication'
    },
    street:{
        type:DataTypes.STRING
    }
},{
    tableName:'ubication',
    timestamps:false
});

module.exports = Ubication;