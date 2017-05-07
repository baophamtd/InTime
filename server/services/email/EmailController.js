'use strict';

const TimeService = require('../time/TimeService');
const SparkPost = require('sparkpost');
const sparkPostClient = new SparkPost(process.env.SPARKPOST_API_KEY);
const app = require('../../server');

function sendEmails(req, res) {
    let email = req.body.email;
    let contents = req.body.contents;
    
    //Get all of the customers by email
    app.models.Customer.find({where:{clientID:email}}, function(err, data) {
        console.log(data);
        let emails = data;

        //Manipulate the returned JSON object compute the time for each email
        let timed = TimeService.generateTimes(emails);

        //send out the batch emails
        let error = null;
        timed.forEach(obj => {
            sendToSparkPost(obj);
        });

        //Return success/fail for emails
        if(error) {
            res.send(error);
        } else {
            res.send("Success");
        }
    });
};

module.exports.sendEmails = sendEmails; 

function sendToSparkPost(obj, contents){
    sparkPostClient.transmissions.send({
        options: {
            sandbox: false,
            start_time: obj.time
        },
        content: {
            from: contents.from,
            subject: contents.subj,
            html: contents.html
        },
        recipients: [
            {address: obj.emails}
        ]
        })
        .then(data => {
            console.log('Woohoo! You just sent your first mailing!');
            console.log(data);
        })
        .catch(err => {
            console.log('Whoops! Something went wrong');
            console.log(err);
    });
}