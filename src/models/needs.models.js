const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Needs = sequelize.define('Needs',{

    idNeeds:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:'id_needs'
    },
    needs:{
        type:DataTypes.STRING
    }
},{
    tableName:'needs',
    timestamps:false
});

module.exports = Needs;