const expressAsyncHandler = require('express-async-handler');
const Data = require('../models/employeeData');

//@description      all data of employees can be accessed
//@route            GET
//@access            private

const getData = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

//@description      data of particular employee can be accessed
//@route            GET
//@access           private

const getUniqueData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Data.findOne({ _id: id });
    if (!data) {
      return res.status(404).send({ message: "Employee data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};


//@description      adding new employee to database
//@route            POST
//@access            private

const setData = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

//@description      data of chosen employee to be changed
//@route            PUT
//@access            private

const putData = async (req, res) => {
  try {
    const id = req.params.id;
    const updateEmployeeData = await Data.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateEmployeeData);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

//@description      data of on specific employee is deleted
//@route            DELETE
//@access            private

const deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedData = await Data.findByIdAndDelete(id);
    res.status(200).json(deletedData);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { getData,getUniqueData, setData, putData, deleteData };
