const expressAsyncHandler = require('express-async-handler');
const Data = require('../models/employeeData');

//@description      all data of employees can be accessed
//@route            GET
//@access            private

const getData = expressAsyncHandler(async (req, res) => {
  const data = await Data.find({});
  res.status(200).json(data);
});

//@description      adding new employee to database
//@route            POST
//@access            private

const setData = expressAsyncHandler(async (req, res) => {
  const { name, address, age, department, status } = req.body;
  const employee = new Data({
    name,
    address,
    age,
    department,
    status,
  });
  const employeeSaved = await employee.save();
  res.status(200).json(employeeSaved);
});

//@description      data of chosen employee to be changed
//@route            PUT
//@access            private

const putData = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const updateEmployeeData = await Data.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updateEmployeeData);
});

//@description      data of on specific employee is deleted
//@route            DELETE
//@access            private

const deleteData = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const deletedData = await Data.findByIdAndDelete(id);
  res.status(200).json(deletedData);
});

module.exports = { getData, setData, putData, deleteData };
