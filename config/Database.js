import {Sequelize} from "sequelize";
 
// const db = new Sequelize('crud_db','root','',{
//     host: 'localhost',
//     dialect: 'mysql'
// });

const db = new Sequelize('mysql://b91f2417e93c34:f90f1860@us-cdbr-east-05.cleardb.net/heroku_fbfe348d564b3ac?reconnect=true');
 
export default db;
 