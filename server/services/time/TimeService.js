'use strict';
const string = "";
const calendar = {
  "calendars": {
      "errors": [
        {
          "domain": string,
          "reason": string
        }
      ],
      "busy": [
        {
          "start": "11:00:00",
          "end": ""
        }
      ]
    }
};
/*
    emails = [
        "test@test.com",
        ...
    ]
*/
function generateTimes(res, emails) {
    //Add and catagorize emails(maybe)

    /*
    emails = [
        {
            "time" : "4:51:00",
            "emails" : [
                "test@test.com",
                ...
            ]
        },
        ...
    ]
    */
    return emails;
}
module.exports.generateTimes = generateTimes;