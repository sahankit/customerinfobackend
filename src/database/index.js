const mysql = require('mysql');
const config = require('../../config/config');

const executeQuery = (query) => new Promise((resolve, reject) => {
    var con = mysql.createConnection(config.database);
      con.connect(function(err) {
        if (err) {
          con.end();
          console.log("connection failed");
          throw err;
        }
        console.log('query'+query);
        con.query(query, function (err, result, fields) {
          if (err)  reject(err);
          resolve(result);
          console.log("exection of query succesfull");
          con.end();
        });
      });
      

});
const getAllCustomer = () => new Promise((resolve, reject) => {
    executeQuery("SELECT * FROM `Customer`").then(function(data){
    console.log(data);  
    resolve(data);
    }).catch(function(err){
      console.log("exection of query not successfull");
        reject(err);    
    })
  });
  
  const getCustomerAddress = (customerId) => new Promise((resolve, reject) => {
    
    executeQuery("SELECT Address,`Address Id` FROM `Address` WHERE `Customer ID` = '"+customerId+"'").then(function(data){
      resolve(data);
      }).catch(function(err){
        console.log("exection of query not successfull");
          reject(err);    
      })
  });
  
  
  module.exports = {
    getAllCustomer,
    getCustomerAddress
  };
  