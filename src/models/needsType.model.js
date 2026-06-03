const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const NeedsType = sequelize.define('NeedsType',{

    idNeedsType:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:'id_needs_type'
    },
    needsType:{
        type:DataTypes.STRING,
        field:'needs_type'
    }
},{
    tableName:'needs_type',
    timestamps:false
});

module.exports = NeedsType;