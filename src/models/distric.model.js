const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Distric = sequelize.define('Distric',{

    idDistric:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:'id_distric'
    },
    distric:{
        type:DataTypes.STRING
    }
},{
    tableName:'distric',
    timestamps:false
});

module.exports = Distric;