var express = require('express');
var router = express.Router();
//the Logentries logging agent
var logger = require('le_node');
//a custom object that contains configuration information
var config = require('../config');
// a custom utils object that will provide the skeleton
//logging object
var loggingUtils = require('../lib/logging-utils');
var log = new logger({
  token:config.logging.token,
  console:true
});

/* GET home page. */
router.get('/', function(req, res, next) {

  //log.info("GET call. All is well.");


  var loggingObject = new loggingUtils.loggingObject();

  var o = {};
  o.path = "/";
  o.method = "GET"
  o.type = "API";
  o.comment = "All is well."

  loggingObject.details = o;
  
  log.info(loggingObject);
  res.render('index', { title: 'Express' });
});

module.exports = router;
