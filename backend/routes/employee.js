const express = require('express');
const app = express();
const router = express.Router();
const {
  getData,
  setData,
  putData,
  deleteData,
} = require('../controllers/controller');

router.route('/').get(getData).post(setData);
router.route('/:id').put(putData).delete(deleteData);

module.exports = router;
