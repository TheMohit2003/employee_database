//@description      all data of employees can be accessed
//@route            GET
//@access            private

const getData = async (req, res) => {
  res.send('this is the getData request');
};

//@description      adding new employee to database
//@route            POST
//@access            private

const setData = async (req, res) => {
  res.send('this is the setData request');
};

//@description      data of chosen employee to be changed
//@route            PUT
//@access            private

const putData = async (req, res) => {
  res.send('this is the putData request');
};

//@description      data of on specific employee is deleted
//@route            DELETE
//@access            private

const deleteData = async (req, res) => {
  res.send('this is the deleteData request');
};

module.exports = { getData, setData, putData, deleteData };
