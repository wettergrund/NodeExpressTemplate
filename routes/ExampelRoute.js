import express from 'express';
import controller from '../controllers/ExampleController';

const router = express.Router();

router.get('/',controller.getExample)

module.exports = router;