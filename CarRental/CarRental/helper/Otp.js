

const { format } = require("date-fns");

const generateOtp = async () => {
  const min = 1000; 
  const max = 9999; 
  const otp = Math.floor(Math.random() * (max - min + 1)) + min;
   const currentTime = new Date();
   let formattedTime = format(currentTime, "HH");
   const formattedTimeMinute = format(currentTime, "mm");
   let minute = Number(formattedTimeMinute) + 5;
   if (minute > 60) {
     minute = minute - 60;
     formattedTime = Number(formattedTime) + 1;
   }
   const time = `${formattedTime}:${minute}`;
  return {otp,time}

}




module.exports = {
  generateOtp,

};