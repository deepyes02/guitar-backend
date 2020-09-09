//initialize sequelize
const {Sequelize, Op, Model, DataTypes} = require ('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
});

// const sequelizeAuth = async ()=>{
//   try {
//   await sequelize.authenticate();
//   console.log(`Database: ${sequelize.options.dialect} connected from ${sequelize.options.storage}`)
//   } catch(err){console.log(err)}
// }
// sequelizeAuth()

//sequelize.define (modelname, attributes, options)
class User extends Model{
    //class based method
    static classLevelMethod(){
        return 'classLevelMethod';
    }
    //instance based methods
    instanceLevelMethod(){
        return "InstanceLevelMethod"
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}; 

User.init({
    // Model attributes are defined here
    userName: {
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  });

module.exports = User;