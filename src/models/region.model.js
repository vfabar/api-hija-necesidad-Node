const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Region = sequelize.define('Region',{
    
    idRegion:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:'id_region'
    },
    region:{
        type:DataTypes.STRING
    }
},{
    tableName:'region',
    timestamps:false
});

module.exports = Region;