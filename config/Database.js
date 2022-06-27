import {Sequelize} from "sequelize";
 
// const db = new Sequelize('d810n28bou693r','bxlnkvukutftwq','fb71402f2d790401f20288b850e193b25f4569abde076fdf0f4d1152c3540588',{
//     host: 'ec2-44-205-41-76.compute-1.amazonaws.com',
//     dialect: 'postgres'
// });



const sequelize  = new Sequelize('postgres://bxlnkvukutftwq:fb71402f2d790401f20288b850e193b25f4569abde076fdf0f4d1152c3540588@ec2-44-205-41-76.compute-1.amazonaws.com:5432/d810n28bou693r',{
    dialect: 'postgres'
});
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
export default sequelize;
 