var moment = require('moment-timezone');

exports.handler = function(context, event) {

    var times = {
        "Squamish": moment().tz("America/Vancouver").format("HH:mm"),
        "London": moment().tz("Europe/London").format("HH:mm"),
        "Tokyo": moment().tz("Asia/Tokyo").format("HH:mm"),
    }

    context.callback(JSON.stringify(times));
};
