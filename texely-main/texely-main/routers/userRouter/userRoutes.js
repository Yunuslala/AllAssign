const router = require('express').Router()
const userController = require('../../controllers/userController');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
const auth = require('../../middleware/auth')
var cpUpload = upload.fields([{ name: 'numberPlate', maxCount: 1 }, { name: 'vehicalRc', maxCount: 1 }, { name: 'drivingLicence', maxCount: 1 }, { name: 'vehicleInsurance', maxCount: 1 }]);
var apUpload = upload.fields([{ name: 'frontImage', maxCount: 1 }, { name: 'backImage', maxCount: 1 }])

/**
 * @swagger
 * /api/v1/user/userLogin:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for user UserLogin 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: mobileNumber
 *         description: mobile no. is required.
 *         in: formData
 *         required: false
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post('/userLogin', userController.userLogin);
/**
 * @swagger
 * /api/v1/user/providerLogin:
 *   post:
 *     tags:
 *       - PROVIDER
 *     description: Creating Docs for user providerLogin 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: mobileNumber
 *         description: mobile no. is required.
 *         in: formData
 *         required: false
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post('/providerLogin', userController.providerLogin);
/**
 * @swagger
 * /api/v1/user/verifyOtp:
 *   post:
 *     tags:
 *       - USER
 *     description: OTP send to admin mobile number
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: mobileNumber
 *         description: mobileNumber 
 *         in: formData
 *         required: true
 *       - name: otp
 *         description: verifying otp
 *         in: formData
 *         required: true
 *       - name: deviceToken
 *         description: deviceToken
 *         in: formData
 *         required: false
 *       - name: deviceType
 *         description: deviceType
 *         in: formData
 *         required: false
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       404:
 *         description: Invalid credentials
 *       500:
 *         description: Internal Server Error
 */
router.post("/verifyOtp", userController.verifyOtp);
/**
 * @swagger
 * /api/v1/user/providerVerifyOtp:
 *   post:
 *     tags:
 *       - PROVIDER
 *     description: OTP send to admin mobile number
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: mobileNumber
 *         description: mobileNumber 
 *         in: formData
 *         required: true
 *       - name: otp
 *         description: verifying otp
 *         in: formData
 *         required: true
 *       - name: deviceToken
 *         description: deviceToken
 *         in: formData
 *         required: false
 *       - name: deviceType
 *         description: deviceType
 *         in: formData
 *         required: false
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       404:
 *         description: Invalid credentials
 *       500:
 *         description: Internal Server Error
 */
router.post("/providerVerifyOtp", userController.providerVerifyOtp);
/**
 * @swagger
 * /api/v1/user/viewProfile:
 *   get:
 *     tags:
 *       - USER/PROVIDER
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: Details have been fetched successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */
router.get("/viewProfile", auth.verifyToken, userController.viewProfile)
/**
 * @swagger
 * /api/v1/user/updateStatusOnline:
 *   put:
 *     tags:
 *       - USER/PROVIDER
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: Details have been fetched successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */
router.put("/updateStatusOnline", auth.verifyToken, userController.updateStatusOnline)
/**
 * @swagger
 * /api/v1/user/viewDocument:
 *   get:
 *     tags:
 *       - PROVIDER
 *     description: Creating Docs for user viewDocument 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get('/viewDocument', auth.verifyToken, userController.viewDocument);
/**
 * @swagger
 * /api/v1/user/providerList:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for user providerList 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post('/providerList', auth.verifyToken, userController.providerList);
/**
* @swagger
* /api/v1/user/viewProvider/{_id}:
*   get:
*     tags:
*       - USER
*     description: Creating Docs for user viewProvider 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: _id
*         description: _id of user is required.
*         in: path
*         required: true
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.get('/viewProvider/:_id', auth.verifyToken, userController.viewProvider);
/**
 * @swagger
 * /api/v1/user/editProfile:
 *   put:
 *     tags:
 *       - USER/PROVIDER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: name
 *         description: Full Name is required.
 *         in: formData
 *         required: false
 *       - name: gender
 *         description: gender -> MALE || FEMALE
 *         in: formData
 *         required: false
 *       - name: image
 *         description: image ?? base64
 *         in: formData
 *         type: file
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.put("/editProfile", auth.verifyToken, upload.single('image'), userController.editProfile);
/**
 * @swagger
 * /api/v1/user/uploadDocumentforVerification:
 *   put:
 *     tags:
 *       - PROVIDER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: vehicalType
 *         description: vehicalType is required.
 *         in: formData
 *         required: false
 *       - name: numberPlate
 *         description: numberPlate is required.
 *         in: formData
 *         type: file
 *         required: true
 *       - name: vehicalRc
 *         description: vehicalRc is required.
 *         in: formData
 *         type: file
 *         required: true
 *       - name: drivingLicence
 *         description: drivingLicence is required.
 *         in: formData
 *         type: file
 *         required: true
 *       - name: vehicleInsurance
 *         description: vehicleInsurance is required.
 *         in: formData
 *         type: file
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.put("/uploadDocumentforVerification", auth.verifyToken, cpUpload, userController.uploadDocumentforVerification);
/**
 * @swagger
 * /api/v1/user/viewAadharDetails:
 *   get:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post("/viewAadharDetails", auth.verifyToken, userController.viewAadharDetails);
/**
 * @swagger
 * /api/v1/user/uploadAadhar:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: name
 *         description: name is required.
 *         in: formData
 *         required: true
 *       - name: aadharNo
 *         description: aadharNo is required.
 *         in: formData
 *         required: true
 *       - name: frontImage
 *         description: frontImage is required.
 *         in: formData
 *         type: file
 *         required: true
 *       - name: backImage
 *         description: backImage is required.
 *         in: formData
 *         type: file
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post("/uploadAadhar", auth.verifyToken, apUpload, userController.uploadAadhar);
/**
 * @swagger
 * /api/v1/user/sendRequest:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: dateTime
 *         description: dateTime is required.
 *         in: formData
 *         required: false
 *       - name: startLocation
 *         description: startLocation is required.
 *         in: formData
 *         required: true
 *       - name: endLocation
 *         description: endLocation is required.
 *         in: formData
 *         required: true
 *       - name: startlLat
 *         description: latitude is required.
 *         in: formData
 *         required: true
 *       - name: startLong
 *         description: longitude is required.
 *         in: formData
 *         required: true
 *       - name: endLat
 *         description: endLat is required.
 *         in: formData
 *         required: true
 *       - name: endLong
 *         description: longitude is required.
 *         in: formData
 *         required: true
 *       - name: vehicalType
 *         description: vehicalType is required.
 *         in: formData
 *         required: false
 *       - name: description
 *         description: description is required.
 *         in: formData
 *         required: false
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post("/sendRequest", auth.verifyToken, userController.sendRequest);
/**
 * @swagger
 * /api/v1/user/rideChatlist:
 *   get:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: rideId
 *         description: rideId is required.
 *         in: query
 *         required: false
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get("/rideChatlist", auth.verifyToken, userController.rideChatlist);
/**
 * @swagger
 * /api/v1/user/viewRideChatforUser:
 *   get:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: driverId
 *         description: driverId is required.
 *         in: query
 *         required: false
 *       - name: rideId
 *         description: rideId is required.
 *         in: query
 *         required: false
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get("/viewRideChatforUser", auth.verifyToken, userController.viewRideChatforUser);
/**
 * @swagger
 * /api/v1/user/viewRideChatforProvider:
 *   get:
 *     tags:
 *       - PROVIDER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: rideId
 *         description: rideId is required.
 *         in: query
 *         required: false
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get("/viewRideChatforProvider", auth.verifyToken, userController.viewRideChatforProvider);
/**
 * @swagger
 * /api/v1/user/commentOnrideRequest:
 *   post:
 *     tags:
 *       - PROVIDER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: requestId
 *         description: requestId is required.
 *         in: formData
 *         required: false
 *       - name: comment
 *         description: comment is required.
 *         in: formData
 *         required: false
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post("/commentOnrideRequest", auth.verifyToken, userController.commentOnrideRequest);
/**
 * @swagger
 * /api/v1/user/replyOnridecomment:
 *   post:
 *     tags:
 *       - USER
 *     description: replyOnridecomment
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: requestId
 *         description: requestId is required.
 *         in: formData
 *         required: false
 *       - name: driverId
 *         description: driverId is required.
 *         in: formData
 *         required: false
 *       - name: comment
 *         description: comment is required.
 *         in: formData
 *         required: false
 *     responses:
 *       200:
 *         description: Returns success message
 */
router.post("/replyOnridecomment", auth.verifyToken, userController.replyOnridecomment);
/**
* @swagger
* /api/v1/user/shareContractNo/{_id}:
*   post:
*     tags:
*       - USER
*     description: Creating Docs for user shareContractNo 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: _id
*         description: _id of user is required.
*         in: path
*         required: true
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/shareContractNo/:_id', auth.verifyToken, userController.shareContractNo);
/**
* @swagger
* /api/v1/user/getcustomerProfile/{_id}:
*   post:
*     tags:
*       - USER
*     description: Creating Docs for user getcustomerProfile 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: _id
*         description: _id of user is required.
*         in: path
*         required: true
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/getcustomerProfile/:_id', auth.verifyToken, userController.getcustomerProfile);
/**
* @swagger
* /api/v1/user/acceptProposal:
*   post:
*     tags:
*       - USER
*     description: Creating Docs for user acceptProposal 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: rideId
*         description: rideId of user is required.
*         in: formData
*         required: true
*       - name: chatId
*         description: chatId of user is required.
*         in: formData
*         required: true
*       - name: commentId
*         description: commentId of user is required.
*         in: formData
*         required: true   
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/acceptProposal', auth.verifyToken, userController.acceptProposal);
/**
* @swagger
* /api/v1/user/acceptProposalfromDriverSide:
*   post:
*     tags:
*       - USER
*     description: Creating Docs for user acceptProposalfromDriverSide 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: rideId
*         description: rideId of user is required.
*         in: formData
*         required: true
*       - name: chatId
*         description: chatId of user is required.
*         in: formData
*         required: true
*       - name: commentId
*         description: commentId of user is required.
*         in: formData
*         required: true   
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/acceptProposalfromDriverSide', auth.verifyToken, userController.acceptProposalfromDriverSide);
/**
* @swagger
* /api/v1/user/bookingDetails:
*   post:
*     tags:
*       - USER/PROVIDER
*     description: Creating Docs for user bookingDetails 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: _id
*         description: _id.
*         in: formData
*         required: true 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/bookingDetails', auth.verifyToken, userController.bookingDetails);
/**
* @swagger
* /api/v1/user/bookinglist:
*   get:
*     tags:
*       - USER/PROVIDER
*     description: Creating Docs for user bookinglist 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: bookingStatus
*         description: bookingStatus.
*         in: query
*         required: false 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.get('/bookinglist', auth.verifyToken, userController.bookingList);
/**
* @swagger
* /api/v1/user/viewRide:
*   post:
*     tags:
*       - USER/PROVIDER
*     description: Creating Docs for user viewRide 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: _id
*         description: _id.
*         in: formData
*         required: true 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/viewRide', auth.verifyToken, userController.viewRide);
/**
* @swagger
* /api/v1/user/rideList:
*   get:
*     tags:
*       - USER/PROVIDER
*     description: Creating Docs for user rideList 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: auctionStaus
*         description: auctionStaus.
*         in: query
*         required: false 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.get('/rideList', auth.verifyToken, userController.rideList);
/**
* @swagger
* /api/v1/user/viewrequestDrivers:
*   get:
*     tags:
*       - USER/PROVIDER
*     description: Creating Docs for user viewrequestDrivers 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: _id
*         description: _id.
*         in: query
*         required: true 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.get('/viewrequestDrivers', auth.verifyToken, userController.viewrequestDrivers);
/**
* @swagger
* /api/v1/user/startRide:
*   post:
*     tags:
*       - PROVIDER
*     description: Creating Docs for user startRide 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: _id
*         description: _id.
*         in: formData
*         required: false 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/startRide', auth.verifyToken, userController.startRide);
/**
* @swagger
* /api/v1/user/endRide:
*   post:
*     tags:
*       - PROVIDER
*     description: Creating Docs for user endRide 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: _id
*         description: _id.
*         in: formData
*         required: false 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/endRide', auth.verifyToken, userController.endRide);
/**
* @swagger
* /api/v1/user/cancelRequest:
*   post:
*     tags:
*       - USER
*     description: Creating Docs for user cancelRequest 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: _id
*         description: _id.
*         in: formData
*         required: false 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/cancelRequest', auth.verifyToken, userController.cancelRequest);
/**
* @swagger
* /api/v1/user/cancelBooking:
*   post:
*     tags:
*       - USER
*     description: Creating Docs for user cancelBooking 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: _id
*         description: _id.
*         in: formData
*         required: false 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/cancelBooking', auth.verifyToken, userController.cancelBooking);
/**
* @swagger
* /api/v1/user/ridePayment:
*   post:
*     tags:
*       - USER
*     description: Creating Docs for user ridePayment 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: _id
*         description: _id.
*         in: formData
*         required: false 
*       - name: paymentMode
*         description: paymentMode -> CASH || WALLET.
*         in: formData
*         required: false 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/ridePayment', auth.verifyToken, userController.ridePayment);
/**
 * @swagger
 * /api/v1/user/vehicalList:
 *   post:
 *     tags:
 *       - VEHICAL
 *     description: Creating Docs for user vehicalList 
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post('/vehicalList', userController.vehicalList);
/**
* @swagger
* /api/v1/user/viewVehical:
*   post:
*     tags:
*       - VEHICAL
*     description: Creating Docs for user viewVehical 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: _id
*         description: _id.
*         in: formData
*         required: true 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.post('/viewVehical', auth.verifyToken, userController.viewVehical);
/**
* @swagger
* /api/v1/user/transactionList:
*   get:
*     tags:
*       - USER
*     description: Creating Docs for user transactionList 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.get('/transactionList', auth.verifyToken, userController.transactionList);
/**
* @swagger
* /api/v1/user/viewTransaction/{_id}:
*   get:
*     tags:
*       - USER
*     description: Creating Docs for user viewTransaction 
*     produces:
*       - application/json
*     parameters:
*       - name: _id
*         description: _id of user is required.
*         in: path
*         required: true
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.get('/viewTransaction/:_id', userController.viewTransaction);
/**
 * @swagger
 * /api/v1/user/addMoneytowallet:
 *   post:
 *     tags:
 *       - USER DASHBOARD
 *     description: addMoneytowallet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: amount
 *         description: amount
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Returns success message
 */
router.post('/addMoneytowallet', auth.verifyToken, userController.addMoneytowallet);
/**
 * @swagger
 * /api/v1/user/paymentVerify:
 *   post:
 *     tags:
 *       - USER DASHBOARD
 *     description: paymentVerify
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: transactionId
 *         description: transactionId
 *         in: formData
 *         required: true
 *       - name: status
 *         description: status
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Returns success message
 */
router.post('/paymentVerify', auth.verifyToken, userController.paymentVerify);
/**
* @swagger
* /api/v1/user/withdrawRequest:
*   post:
*     tags:
*       - USER DASHBOARD
*     description: withdrawRequest
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: paymentMethod
*         description: paymentMethod --> GOOGLE_PAY || BANK || PAYTM
*         in: formData
*         required: true
*       - name: ifsc
*         description: ifsc ---> BANK
*         in: formData
*         required: false
*       - name: accountNumber
*         description: accountNumber ---> BANK
*         in: formData
*         required: false
*       - name: amount
*         description: amount ---> BANK || GOOGLE_PAY || PAYTM
*         in: formData
*         required: true
*       - name: name
*         description: name ---> BANK || GOOGLE_PAY || PAYTM
*         in: formData
*         required: true
*       - name: upiId
*         description: upiId ----> GOOGLE_PAY
*         in: formData
*         required: false
*       - name: mobileNumber
*         description: mobileNumber ----> GOOGLE_PAY || PAYTM
*         in: formData
*         required: false
*       - name: message
*         description: message
*         in: formData
*         required: false
*     responses:
*       200:
*         description: Returns success message
*/
router.post('/withdrawRequest', auth.verifyToken, userController.withdrawRequest);
/**
 * @swagger
 * /api/v1/user/withdrawRequestList:
 *   get:
 *     tags:
 *       - USER DASHBOARD
 *     description: Creating Docs for user withdrawRequestList 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true 
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get('/withdrawRequestList', auth.verifyToken, userController.withdrawRequestList);

/**
 * @swagger
 * /api/v1/user/rideSummaryDetails:
 *   get:
 *     tags:
 *       - USER DASHBOARD
 *     description: Creating Docs for user rideSummaryDetails 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: rideId
 *         description: rideId
 *         in: query
 *         required: true 
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get('/rideSummaryDetails', userController.rideSummaryDetails);

/**
 * @swagger
 * /api/v1/user/updateLocation:
 *   put:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: currentLat
 *         description: currentLat is required.
 *         in: formData
 *         required: true
 *       - name: currentLong
 *         description: currentLong is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.put("/updateLocation", auth.verifyToken, userController.updateLocation);
/**
 * @swagger
 * /api/v1/user/bookingChat:
 *   put:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: rideId
 *         description: rideId is required.
 *         in: query
 *         required: true
 *       - name: message
 *         description: message is required.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.put("/bookingChat", auth.verifyToken, userController.bookingChat);
/**
 * @swagger
 * /api/v1/user/viewBookingChat:
 *   get:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: rideId
 *         description: rideId is required.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get("/viewBookingChat", auth.verifyToken, userController.viewBookingChat);
/**
 * @swagger
 * /api/v1/user/bookingPaymentList:
 *   get:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get("/bookingPaymentList", auth.verifyToken, userController.bookingPaymentList);
/**
 * @swagger
 * /api/v1/user/addVehicalDocument:
 *   put:
 *     tags:
 *       - PROVIDER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: vehicalType
 *         description: vehicalType is required.
 *         in: formData
 *         required: false
 *       - name: numberPlate
 *         description: numberPlate is required.
 *         in: formData
 *         type: file
 *         required: true
 *       - name: vehicalRc
 *         description: vehicalRc is required.
 *         in: formData
 *         type: file
 *         required: true
 *       - name: drivingLicence
 *         description: drivingLicence is required.
 *         in: formData
 *         type: file
 *         required: true
 *       - name: vehicleInsurance
 *         description: vehicleInsurance is required.
 *         in: formData
 *         type: file
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.put("/addVehicalDocument", auth.verifyToken, cpUpload, userController.addVehicalDocument);
/**
 * @swagger
 * /api/v1/user/listVehicalDocument:
 *   get:
 *     tags:
 *       - PROVIDER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get("/listVehicalDocument", auth.verifyToken, userController.listVehicalDocument);
/**
 * @swagger
 * /api/v1/user/viewVehicalDocument:
 *   get:
 *     tags:
 *       - PROVIDER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: _id
 *         description: _id is required.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get("/viewVehicalDocument", auth.verifyToken, userController.viewVehicalDocument);

/**
 * @swagger
 * /api/v1/user/serviceAvailable:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: latitude
 *         description: latitude of service start is required.
 *         in: formData
 *         required: true
 *       - name: longitude
 *         description: longitude of service start is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post("/serviceAvailable", auth.verifyToken, userController.serviceAvailable);

/**
 * @swagger
 * /api/v1/user/findLocation:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: latitude
 *         description: latitude of service start is required.
 *         in: formData
 *         required: true
 *       - name: longitude
 *         description: longitude of service start is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.post("/findLocation", userController.findLocation);
/**
* @swagger
* /api/v1/user/viewBookingPayment/{_id}:
*   get:
*     tags:
*       - USER
*     description: Creating Docs for user viewBookingPayment 
*     produces:
*       - application/json
*     parameters:
*       - name: _id
*         description: _id of user is required.
*         in: path
*         required: true
*     responses:
*       200:
*         description: You have successfully sign up.
*       409:
*         description: Already exist.
*       500:
*         description: Internal server error.
*/
router.get('/viewBookingPayment/:_id', userController.viewBookingPayment);

/**
 * @swagger
 * /api/v1/user/findBooking:
 *   get:
 *     tags:
 *       - USER/PROVIDER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: _id
 *         description: _id is required.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get("/findBooking", auth.verifyToken, userController.findBooking);

/**
 * @swagger
 * /api/v1/user/adminDriverCash:
 *   get:
 *     tags:
 *       - PROVIDER
 *     description: Creating Docs for user signUp 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.get("/adminDriverCash", auth.verifyToken, userController.adminDriverCash);
/**
* @swagger
* /api/v1/user/getNotification/{_id}:
*  post:
*    tags:
*      - NOTIFICATION MANAGEMENT
*    description: Check for Social existence and give the access Token 
*    produces:
*      - application/json
*    parameters:
*      - name: _id
*        description: _id
*        in: path
*        required: true  
*    responses:
*      200:
*        description: Details have been fetched successfully.
*      404: 
*        description: This user does not exist.
*      500:
*        description: Internal Server Error.
*      501:
*        description: Something went wrong!
*      401:
*        description: Invalid JWT token.
*      403:
*        description: You are not authorized, please contact Admin.
*/
router.post("/getNotification/:_id", userController.getNotification);
/**
* @swagger
* /api/v1/user/notificationList:
*   get:
*     tags:
*       - NOTIFICATION MANAGEMENT
*     description: Check for Social existence and give the access Token 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*     responses:
*       200:
*         description: Details have been fetched successfully.
*       404: 
*         description: This user does not exist.
*       500:
*         description: Internal Server Error.
*       501:
*         description: Something went wrong!
*       401:
*         description: Invalid JWT token.
*       403:
*         description: You are not authorized, please contact Admin.
*/
router.get("/notificationList", auth.verifyToken, userController.notificationList);
/**
* @swagger
* /api/v1/user/notificationStatus:
*   get:
*     tags:
*       - NOTIFICATION MANAGEMENT
*     description: Check for Social existence and give the access Token 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*     responses:
*       200:
*         description: Details have been fetched successfully.
*       404: 
*         description: This user does not exist.
*       500:
*         description: Internal Server Error.
*       501:
*         description: Something went wrong!
*       401:
*         description: Invalid JWT token.
*       403:
*         description: You are not authorized, please contact Admin.
*/
router.get("/notificationStatus", auth.verifyToken, userController.notificationStatus);

/**
* @swagger
* /api/v1/user/userNotificationList:
*   get:
*     tags:
*       - NOTIFICATION MANAGEMENT
*     description: Check for Social existence and give the access Token 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*     responses:
*       200:
*         description: Details have been fetched successfully.
*       404: 
*         description: This user does not exist.
*       500:
*         description: Internal Server Error.
*       501:
*         description: Something went wrong!
*       401:
*         description: Invalid JWT token.
*       403:
*         description: You are not authorized, please contact Admin.
*/
router.get("/userNotificationList", auth.verifyToken, userController.userNotificationList);
/**
* @swagger
* /api/v1/user/userNotificationStatus:
*   get:
*     tags:
*       - NOTIFICATION MANAGEMENT
*     description: Check for Social existence and give the access Token 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*     responses:
*       200:
*         description: Details have been fetched successfully.
*       404: 
*         description: This user does not exist.
*       500:
*         description: Internal Server Error.
*       501:
*         description: Something went wrong!
*       401:
*         description: Invalid JWT token.
*       403:
*         description: You are not authorized, please contact Admin.
*/
router.get("/userNotificationStatus", auth.verifyToken, userController.userNotificationStatus);
module.exports = router;   
