const cronJob = require('cron').CronJob;
let userModel = require('../models/userModel');
let cashinHand = require('../models/cashinHand');
////////////////////////////////////////////////////////////////////////////////////////////////////
new cronJob('*/10 * * * * *', async function () {
    let findCash = await cashinHand.find({ totalCashbooking: { $gte: 5 } });
    if (findCash.length == 0) {
        console.log("cash in hand model no data found.");
    } else {
        for (let i = 0; i < findCash.length; i++) {
            let findUser = await userModel.findById({ _id: findCash[i].userId });
            if (!findUser) {
                console.log("cash in hand model user not found in user model.");
            } else {
                let updateResult = await userModel.findOneAndUpdate({ _id: findUser._id }, { $set: { bookingBlock: true } }, { new: true });
                if (updateResult) {
                    console.log(`Driver ${updateResult.name} booking has been bloked.`);
                }
            }
        }
    }
}).start();
// }).stop()