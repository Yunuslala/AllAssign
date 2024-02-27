let Country = require('country-state-city').Country;
let State = require('country-state-city').State;
let City = require('country-state-city').City;
const cronJob = require('cron').CronJob;
let stateModel = require('../models/selectedState');
////////////////////////////////////////////////////////////////////////////////////////////////////
new cronJob('*/10 * * * * *', async function () {
    let findState = await stateModel.find();
    if (findState.length == 0) {
        let getState = await State.getStatesOfCountry("IN");
        if(getState.length==0){
            console.log("=================");
        }else{
            for (let i = 0; i < getState.length; i++) {
                let obj = {
                    state:getState[i].name,
                    isoCode:getState[i].isoCode,
                    countryCode:getState[i].countryCode,
                    latitude:getState[i].latitude,
                    longitude:getState[i].longitude
                }
                await stateModel(obj).save();
            }
        }
    } else {
        console.log("dhfsjdgfjk");
    }
}).start();
// }).stop()