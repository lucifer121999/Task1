const express = require('express');

const router = express.Router();

 const apiController = require('../controller/api'); 
 const isAuth = require('../middelware/isAuth');

 




router.get('/stats', isAuth, apiController.getJsonData);




module.exports = router;



