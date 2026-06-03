const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const NeedsState = sequelize.define('NeedsState',{

    idNeedsState:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:'id_needs_state'
    },
    needsState:{
        type:DataTypes.STRING,
        field:'needs_state'
    }
},{
    tableName:'needs_state',
    timestamps:false
});

module.exports = NeedsState;