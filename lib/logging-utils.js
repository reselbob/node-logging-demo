/*
This utility namespace provides a class, loggingObject
that you can use a base Javascript object to describe information
you want to log.
 */
var loggingUtils = {};
loggingUtils.loggingObject = {};
loggingUtils.loggingObject = function(){
    var o = {};
    //The application from whence logging occurs
    o.application = "resel-logger demo";
    //initialize the property with the immediate datetime
    o.created = new Date();
//The property that describes the details of the log entry.
//You can attach a custom JavaScript object that describes the details
//of the logging incident.
    o.details = {};

    return o;
};


module.exports = loggingUtils;

