const express = require('express');
const app = express();
const auth = require('../middlewares/authentiacate');
const router = express.Router();
const {
  getData,
  getUniqueData,
  setData,
  putData,
  deleteData,
} = require('../controllers/controller');

router.route('/').get(getData).post(setData);
router.route('/:id').get(getUniqueData).put(putData).delete(deleteData);

module.exports = router;
