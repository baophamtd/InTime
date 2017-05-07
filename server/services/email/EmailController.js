'use strict';

const TimeService = require('../time/TimeService');

const sendEmails = function(req, res) {
    let email = req.body.email;
    
    //Get all of the customers by email
    let emails = app.Model.getCustomers(email);

    //Manipulate the returned JSON object compute the time for each email
    let timed = TimeService.generateTimes(emails);

    //send out the batch emails
    error = null;
    timed.forEach(obj => {
        //Make Sparkpost Requests
    });

    //Return success/fail for emails
    if(error) {
        res.send(error);
    } else {
        res.send("Success");
    }
};

module.exports.sendEmails = sendEmails; 