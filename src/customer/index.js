
const database = require('../database');
const customerModel = require('../model/CustomerModel');
const customerAddressModel = require('../model/CustomerAddressModel');

const fetchAllCustomer = () => new Promise((resolve, reject) => {
  database.getAllCustomer().then((data) =>  {resolve(dataAllCustomerMarshaller(data))}).catch((err)=> {reject(err)})

});

const fetchCustomerAddress = (customerId) => new Promise((resolve, reject) => {
  database.getCustomerAddress(customerId).then((data) =>  {resolve(dataCustomerAddressMarshaller(data))}).catch((err)=> {reject(err)})
});

const dataAllCustomerMarshaller = (aData) => {
  var aCustomer = [];
  for(let i=0; i<aData.length;i++){
    const data = aData[i];
    aCustomer.push(new customerModel(data['Customer ID'],data['Name'],data['Age'],data['Sex']));
  }
  return aCustomer;
}

const dataCustomerAddressMarshaller = (aData) => {
  var aCustomerAddress = [];
  for(let i=0; i<aData.length;i++){
    const data = aData[i];
    aCustomerAddress.push(new customerAddressModel(data['Address Id'],data['Address']));
  }
  return aCustomerAddress;
}


module.exports = {
  fetchAllCustomer,
  fetchCustomerAddress
};
