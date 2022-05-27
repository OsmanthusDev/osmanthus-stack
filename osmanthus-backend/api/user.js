import express from 'express';

const router = express.Router();


router.get('/', function(req, res, next) {
  res.json({'name': 'hello world'});
});

export default router;
