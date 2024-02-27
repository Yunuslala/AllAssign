const nodemailer = require("nodemailer");
const moment = require('moment')
const jwt = require('jsonwebtoken');
var FCM = require('fcm-node');
var Sender = require('aws-sms-send');
const fs = require('fs');
const AWs = require('aws-sdk');
const { default: axios } = require('axios');
var aws_topic = 'arn:aws:sns:us-east-1:729366371820:coinbaazar';
var config = {
  AWS: {
    accessKeyId: "AKIA4WJ5ARST5XSQGXWY",
    secretAccessKey: "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",
    region: "ap-south-1"
  },
  topicArn: aws_topic,
};
var sender = new Sender(config);

var cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'no-varun',
  api_key: '417926235785242',
  api_secret: 'Jh71fUYVFCfpUS_03vTl8O18b7g'
})
// cloudinary.config({
//   cloud_name: "texly97",
//   api_key: "197965159955174",
//   api_secret: "V4mvhd807KE6NC5bw-OJndd7EBU"
// })
module.exports = {
  randomOTPGenerate() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  },
  paymentId() {
    var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let OTP = '';
    for (let i = 0; i < 14; i++) {
      OTP += digits[Math.floor(Math.random() * 108)];
    }
    return OTP;
  },
  sendMobileOtp(toNumbers, rawMessage) {
    return new Promise((resolve, reject) => {
      let otp1 = rawMessage;
      let apikey = "NzgzNDU5NGQ3MjU1NDkzMjc3NzM1MjMyNzQ2ZDQ0MzI="
      var url = `https://api.textlocal.in/send/?apikey=${apikey}&numbers=${toNumbers}&sender=techtt&message=` + encodeURIComponent(`Your otp is ${otp1} %nTechsell India`);
      axios
        .get(url)
        .then(function (response) {
          console.log(response.data);
          resolve(response)
        })
        .catch(function (error) {
          console.log(error);
          reject(error)
        });
    })
  },
  findLocation(latitude, longitude) {
    return new Promise((resolve, reject) => {
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC-IZnGuPrx0Rn79n1p1X24TZ9G2FBJ8m8&latlng=' + latitude + ',' + longitude + '&sensor=true';
      axios
        .get(url)
        .then(function (response) {
          // console.log(response.data);
          resolve(response.data)
        })
        .catch(function (error) {
          console.log(error);
          reject(error)
        });
    })
  },
  sendMail(email, subject, body) {
    return new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          "user": "mobiloittetesting123@gmail.com",
          "pass": "Mobiloitte@#12",
        }
      })
      var mailOption = {
        from: "mobiloittetesting123@gmail.com",
        to: email,
        subject: subject,
        text: body
      }
      transporter.sendMail(mailOption, (error, result) => {
        console.log("error==>", error, "result==>", result)
        if (error) {
          return reject(error)
        } else {
          return resolve(result);
        }
      })
    })
  },
  sendmessage(email, text) {
    return new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          "user": "mobiloittetesting123@gmail.com",
          "pass": "Mobiloitte@#12",
        }
      })
      var mailOption = {
        from: "mobiloittetesting123@gmail.com",
        to: email,
        subject: "Broadcast Message",
        text: text,
      }
      transporter.sendMail(mailOption, (error, result) => {
        console.log("error==>", error, "result==>", result)
        if (error) {
          return reject(error)
        } else {
          return resolve(result);
        }
      })
    })
  },
  uploadImage(image) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(image, function (error, result) {
        console.log(result, "error", error);
        if (error) {
          reject(error);
        }
        else {
          resolve(result.url)
        }
      });
    })
  },
  uploadImage1(image, callback) {

    cloudinary.uploader.upload(image, function (error, result) {
      if (error) {
        console.log(error, null)
      } else {
        callback(null, result.secure_url);
      }
    });
  },
  jwtDecode: (token, callback) => {
    jwt.verify(token, 'moneyTransfer', (err, decoded) => {
      if (err) {
        callback(err, null)
      } else {
        console.log(" i am here verify", decoded.id)
        callback(null, decoded.id)

      }
    })
  },
  smsSend: (mobileNumber, otp) => {
    return new Promise((resolve, reject) => {
      sender.sendSms(`Your otp for verification:${otp}`, 'Topic sms', false, mobileNumber)
        .then(function (response) {
          console.log(response);
          resolve(response)
        })
        .catch(function (err) {
          console.log(err);
          reject(err)
        });
    })
  },
  sendTextOnMobileNumber: (number, text, callback) => {
    console.log(number, text);
    sender.sendSms(text, 'mobilePaymentApp', false, number)
      .then(function (response) {
        callback(null, response);
      })
      .catch(function (err) {
        callback(err, null);
      })

  },
  sendSMS: (number, otp, callback) => {
    console.log("fdfdfdff", number, otp)
    sender.sendSms(` ${otp}`, 'MoneyTrancefer', false, number)
      .then(function (response) {
        callback(null, response);
        console.log("aaaaaaaOTP", response)
      })
      .catch(function (err) {
        callback(err, null);
        console.log("ddddddddOTP", err)
      })

  },
  makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  pushNotificationforUser: (deviceToken, deviceType, title, body) => {
    return new Promise((resolve, reject) => {
      var serverKey = 'AAAA7ix3Qrk:APA91bGoXF1wwdIitto-aD_49r-dal5mcyRKb7rkJgqNF20HyyTD_5XGQmlIPKjH3HTffvbK91UW8Z8xqU8nkoJcsZKIEf0W-s5Qdq_sqIsfu5PtCTcNPe4bpWeXWibPBoh18vZZYqVL';
      var fcm = new FCM(serverKey);
      var message = {
        to: deviceToken, // required fill with device token or topics
        "content_available": true,
        notification: {
          title: title,
          body: body
        }
      };
      //callback style
      fcm.send(message, function (err, response) {
        if (err) {
          console.log(">>>>>>>>>>", err)
          return reject(err)
        } else {
          console.log(">>>>>>>>>response", response)
          return resolve(response);

        }
      });
    });
  },
  pushNotification: (deviceToken, deviceType, title, body) => {
    return new Promise((resolve, reject) => {
      var serverKey = 'AAAApsTKVOY:APA91bHR3Zwcs3xmN8lL9-qyiQD6DA-dtOBH9tgO92OLdv54QQqr2lesZQs3Huz5Aa16wa10ZU-Ykl50EaQ9QL0SdOpfTtcVN8_W2fmU0PrePM75gF686zha4SMTeAYS3OKtkZMSXGym';
      var fcm = new FCM(serverKey);
      var message = {
        to: deviceToken, // required fill with device token or topics
        "content_available": true,
        notification: {
          title: title,
          body: body
        }
      };
      //callback style
      fcm.send(message, function (err, response) {
        if (err) {
          console.log(">>>>>>>>>>", err)
          return reject(err)
        } else {
          console.log(">>>>>>>>>response", response)
          return resolve(response);

        }
      });
    });
  },
  addMinutes(time, minutes) {
    var date = new Date(new Date('01/01/2019 ' + time).getTime() + minutes * 60000);
    var tempTime = ((date.getHours().toString().length == 1) ? '0' + date.getHours() : date.getHours()) + ':' +
      ((date.getMinutes().toString().length == 1) ? '0' + date.getMinutes() : date.getMinutes()) + ':' +
      ((date.getSeconds().toString().length == 1) ? '0' + date.getSeconds() : date.getSeconds());
    return tempTime;
  },
  sendMailSubAdmin: (email, text, callback) => {
    let html = `<html lang="en"><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
  
    <title></title> 
    </head>
    <body style="margin: 0px; padding: 0px;">
    <div style="min-width:600px;margin:0px;background:#fff;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300;color:#777;line-height:30px">
        <table style="width:600px;margin:0px auto;background:#263238;padding:0px;border: 4px solid black;    border-radius: 6px;" cellpadding="0" cellspacing="0" >
            <tbody>
        <tr>
          <td style='font-size: 16px;text-align:center;' >
            <table cellpadding="0" cellspacing="0" style="font-weight:600; width:100%; border:0">
            <tbody>
            <tr style="background-color:goldenrod; text-align:left;">
              <td style="font-size:16px;text-align:left;">  
                <span style="display:inline-block;height: 100px;text-align:left;border-bottom: 4px solid black!important;border-right: 4px solid black!important;">
                  <img src="https://res.cloudinary.com/mobilloite/image/upload/v1625914102/ti6pjac94b2ef290dlwr.png" style="height: 100%;">
                </span>
              </td>                                   
            </tr>               
          </tbody>
            </table>
            
                        <table  cellpadding="0" cellspacing="0" style="font-weight:600; margin-bottom:50px;padding:0px 15px; width:100%; border:0"  >
              <tbody>
                <tr>
                         <td  style="text-align: center;     padding: 16px 0px;">
                                      <div style="color:#FFFAFA;font-size:25px;margin-bottom:5px;">Welcome to SNN APP</div>
                  </td> 
                    </tr>
                    <tr>
                         <td  style="text-align: center; padding: 10px 0px;">
                                      <div style="color:#F9F4F4;font-size:20px;margin-bottom:5px;font-weight: 200;">${text}</div>
                  </td> 
                    </tr>
                    <tr>
                         <td  style="text-align: center;">
                                      <div style="color:#fff;font-size:25px;margin-bottom:5px;font-weight: 200;"></div>
                  </td> 
                    </tr>
                    <tr>
                         <td  style="text-align: center;    padding: 20px 0px;">
                                      
                  </td> 
                    </tr>                 
              </tbody>
            </table>
  
          </table>
        </div>
    
  </body>
  </html>`

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        "user": "mobiloittetesting123@gmail.com",
        "pass": "Mobiloitte@#12",
      }

    });
    var mailOptions = {
      from: "mobiloittetesting123@gmail.com",
      to: email,
      subject: 'Welcome to SNN',
      text: text,
      html: html
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        callback(error, null)
      } else {
        callback(null, info.response)
      }
    });
  },
  checkpushNotification: async (deviceToken, title, body) => {
    var serverKey = 'AAAAajPXuIQ:APA91bFeskeWT0-mnB-4KcE87ZjmJLWiKeES2CpQuj88SfY7faN3iCSZ1crmDnMepfjiplG7tjuWg2V4aRz2dVY5z8UYO1ef5XFzKhPES8CaHBvr38geC_DC_LPhkWOgknodRsV3sdt4';
    var fcm = new FCM(serverKey);
    var message = {
      to: deviceToken, // required fill with device token or topics
      "content_available": true,
      notification: {
        title: title,
        body: body
      }
    };
    //callback style
    fcm.send(message, function (err, response) {
      if (err) {
        console.log(">>>>>>>>>>", err);
        return err;
      } else {
        console.log(">>>>>>>>>response", response);
        return response;
      }
    });

  },
  getTimeStops(start, end) {
    var startTime = moment(start, 'HH:mm');
    var endTime = moment(end, 'HH:mm');

    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }

    var timeStops = {};

    while (startTime <= endTime) {
      timeStops.push(new moment(startTime).format('HH:mm'));
      startTime.add(60, 'minutes');
    }
    return timeStops;
  },
  uploadProfileImage(profilePic) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(profilePic, function (error, result) {
        if (error) {
          console.log("error=====================", error);
          reject(error);
        }
        else {
          resolve(result.secure_url)
        }
      });
    })
  },
  uploadAudio(Audio) {
    return new Promise((resolve, reject) => {
      console.log(Audio);
      const fName = Audio.split(".");
      cloudinary.uploader.upload(Audio, { resource_type: "raw" }, (err, result) => {
        if (err) {
          reject(err);
        }
        fs.unlinkSync(Audio);
        resolve(result)
      }
      );
    })
  },
}
