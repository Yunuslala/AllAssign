const express = require('express')
const router = express.Router()
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const fileExt = file.originalname.split(".").pop();
        const filename = `${new Date().getTime()}.${fileExt}`;
        cb(null, filename);
    },
});
// Filter the file to validate if it meets the required audio extension
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "audio/mp3" || file.mimetype === "audio/mpeg") {
        cb(null, true);
    } else {
        cb(
            {
                message: "Unsupported File Format",
            },
            false
        );
    }
};
const upload2 = multer({
    storage,
    limits: {
        fieldNameSize: 200,
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter,
})
const auth = require('../../middleware/auth')
const adminController = require('../../controllers/adminController');
/**
 * @swagger
 * /api/v1/admin/loginAdmin:
 *   post:
 *     tags:
 *       - ADMIN
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: mobileNumber
 *         description: mobileNumber
 *         in: formData
 *         required: true
 *       - name: password
 *         description: password
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
 *         description: Login successfully
 *       404:
 *         description: Invalid credentials
 *       500:
 *         description: Internal Server Error
 */
router.post("/loginAdmin", adminController.loginAdmin)
/**
 * @swagger
 * /api/v1/admin/forgetPassword:
 *   post:
 *     tags:
 *       - ADMIN
 *     description: OTP send to admin mobile number
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: mobileNumber
 *         description: mobileNumber
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP sent on your registered mobile Number
 *       404:
 *         description: Invalid credentials
 *       500:
 *         description: Internal Server Error
 */
router.post("/forgetPassword", adminController.forgetPassword);
/**
  * @swagger
  * /api/v1/admin/verifyOtp:
  *   post:
  *     tags:
  *       - ADMIN
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
  *     responses:
  *       200:
  *         description: OTP verified successfully
  *       404:
  *         description: Invalid credentials
  *       500:
  *         description: Internal Server Error
  */
router.post("/verifyOtp", adminController.verifyOtp);
/**
 * @swagger
 * /api/v1/admin/resendOtp:
 *   post:
 *     tags:
 *       - ADMIN
 *     description: OTP send to admin mobile number
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: mobileNumber
 *         description: mobileNumber
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP sent on your registered mobile Number
 *       404:
 *         description: Invalid credentials
 *       500:
 *         description: Internal Server Error
 */
router.post("/resendOtp", adminController.resendOtp);
/**
 * @swagger
 * /api/v1/admin/resetPassword:
 *   put:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for admin resetting password
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token of admin is required.
 *         in: header
 *         required: true
 *       - name: password
 *         description: password is required.
 *         in: formData
 *         required: true
 *       - name: confirmPassword
 *         description: confirmPassword is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Password reset successfully.
 *       404:
 *         description: NOT FOUND.
 *       500:
 *         description: Internal server error.
 */
router.put('/resetPassword', auth.verifyToken, adminController.resetPassword)
/**
 * @swagger
 * /api/v1/admin/changePassword:
 *   put:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for admin changing password
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token of admin is required.
 *         in: header
 *         required: true
 *       - name: oldPassword
 *         description: oldPassword is required.
 *         in: formData
 *         required: true
 *       - name: newPassword
 *         description: newPassword is required.
 *         in: formData
 *         required: true
 *       - name: confirmPassword
 *         description: confirmPassword is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Password change successfully.
 *       404:
 *         description: NOT FOUND.
 *       500:
 *         description: Internal server error.
 */
router.put('/changePassword', auth.verifyToken, adminController.changePassword)
/**
 * @swagger
 * /api/v1/admin/viewProfile:
 *   get:
 *     tags:
 *       - ADMIN
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
router.get("/viewProfile", auth.verifyToken, adminController.viewProfile)
/**
 * @swagger
 * /api/v1/admin/editProfile:
 *   put:
 *     tags:
 *       - ADMIN
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
router.put("/editProfile", auth.verifyToken, upload.single('image'), adminController.editProfile);

/**
 * @swagger
 * /api/v1/admin/deleteUser:
 *   delete:
 *     tags:
 *       - ADMIN
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: _id
 *         description: _id
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully deleted.
 *       404:
 *         description: This user does not exist
 *       500:
 *         description: Internal Server Error
 */
router.delete('/deleteUser', auth.verifyToken, adminController.deleteUser)
/**
 * @swagger
 * /api/v1/admin/viewUser/{_id}:
 *   get:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for user viewUser 
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
router.get('/viewUser/:_id', auth.verifyToken, adminController.viewUser);
/**
 * @swagger
 * /api/v1/admin/userEditprofile/{_id}:
 *   put:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for admin
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
 *       - name: name
 *         description: Full Name is required.
 *         in: formData
 *         required: false
 *       - name: image
 *         description: image ?? base64
 *         in: formData
 *         type: file
 *       - name: lat
 *         description: latitude is required.
 *         in: formData
 *         required: false
 *       - name: long
 *         description: longitude is required.
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
router.put("/userEditprofile/:_id", auth.verifyToken, upload.single('image'), adminController.userEditprofile);
/**
 * @swagger
 * /api/v1/admin/viewDocument/{_id}:
 *   get:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for admin
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: _id
 *         description: userId of user is required.
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
router.get("/viewDocument/:_id", auth.verifyToken, adminController.viewDocument);
/**
 * @swagger
 * /api/v1/admin/checkDocument/{_id}:
 *   post:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for admin
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: _id
 *         description: userId of user is required.
 *         in: path
 *         required: true
 *       - name: documentId
 *         description: documentId is required.
 *         in: formData
 *         required: true
 *       - name: status
 *         description: status-----> APPROVE || REJECT.
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
router.post("/checkDocument/:_id", auth.verifyToken, adminController.checkDocument);
/**
* @swagger
* /api/v1/admin/bookingDetails:
*   post:
*     tags:
*       - ADMIN
*     description: Creating Docs for user bookingDetails 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: userId
*         description: userId is required.
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
router.post('/bookingDetails', auth.verifyToken, adminController.bookingDetails);
/**
 * @swagger
 * /api/v1/admin/blockUnblockUser:
 *   put:
 *     tags:
 *       - ADMIN
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: _id
 *         description: _id
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully deleted.
 *       404:
 *         description: This user does not exist
 *       500:
 *         description: Internal Server Error
 */
router.put('/blockUnblockUser', auth.verifyToken, adminController.blockUnblockUser)
/**
 * @swagger
 * /api/v1/admin/withdrawApprove/{_id}:
 *   put:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for admin
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
 *       - name: status
 *         description: status is required.
 *         in: formData
 *         required: false
 *       - name: paymentReply
 *         description: paymentReply is required.
 *         in: formData
 *         required: false
 *       - name: screenShot
 *         description: screenShot ?? base64
 *         in: formData
 *         type: file
 *         required: false
 *     responses:
 *       200:
 *         description: You have successfully sign up.
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
router.put("/withdrawApprove/:_id", auth.verifyToken, upload.single('screenShot'), adminController.withdrawApprove);
/**
* @swagger
* /api/v1/admin/addVehicaltype:
*   post:
*     tags:
*       - VEHICAL
*     description: Creating Docs for user addVehicaltype 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: vehicalName
*         description: vehicalName is required.
*         in: formData
*         required: true
*       - name: tax
*         description: Commission is required if tax is given.
*         in: formData
*         required: false
*       - name: Commission
*         description: tax is required if Commission is given.
*         in: formData
*         required: false
*       - name: disCountType
*         description: disCountType ---> FLAT || PERCENTAGE.
*         in: formData
*         required: false
*       - name: image
*         description: vehicalImage ?? base64
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
router.post('/addVehicaltype', auth.verifyToken, upload.single('image'), adminController.addVehicaltype);
/**
* @swagger
* /api/v1/admin/editVehicaltype:
*   put:
*     tags:
*       - VEHICAL
*     description: Creating Docs for user editVehicaltype 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: _id
*         description: _id is required.
*         in: formData
*         required: true
*       - name: vehicalName
*         description: vehicalName is required.
*         in: formData
*         required: false
*       - name: tax
*         description: Commission is required if tax is given.
*         in: formData
*         required: false
*       - name: Commission
*         description: tax is required if Commission is given.
*         in: formData
*         required: false
*       - name: disCountType
*         description: disCountType ---> FLAT || PERCENTAGE.
*         in: formData
*         required: false
*       - name: image
*         description: vehicalImage ?? base64
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
router.put('/editVehicaltype', auth.verifyToken, upload.single('image'), adminController.editVehicaltype);
/**
* @swagger
* /api/v1/admin/deleteVehicaltype:
*   delete:
*     tags:
*       - VEHICAL
*     description: Creating Docs for user deleteVehicaltype 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: _id
*         description: _id is required.
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
router.delete('/deleteVehicaltype', auth.verifyToken, adminController.deleteVehicaltype);
/**
 * @swagger
 * /api/v1/admin/dashboard:
 *   get:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for user dashboard 
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
router.get('/dashboard', auth.verifyToken, adminController.dashboard);
/**
 * @swagger
 * /api/v1/admin/providerList:
 *   post:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for ADMIN LIST
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: search
 *         description: search
 *         in: formData
 *         required: false
 *       - name: page
 *         description: page
 *         in: formData
 *         required: false
 *       - name: limit
 *         description: limit
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
router.post('/providerList', auth.verifyToken, adminController.providerList);
/**
* @swagger
* /api/v1/admin/providerBookingBlockList:
*   post:
*     tags:
*       - ADMIN LIST
*     description: Creating Docs for ADMIN LIST
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: search
*         description: search
*         in: formData
*         required: false
*       - name: page
*         description: page
*         in: formData
*         required: false
*       - name: limit
*         description: limit
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
router.post('/providerBookingBlockList', auth.verifyToken, adminController.providerBookingBlockList);
/**
 * @swagger
 * /api/v1/admin/userList:
 *   post:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for ADMIN LIST
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: search
 *         description: search
 *         in: formData
 *         required: false
 *       - name: page
 *         description: page
 *         in: formData
 *         required: false
 *       - name: limit
 *         description: limit
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
router.post('/userList', auth.verifyToken, adminController.userList);
/**
 * @swagger
 * /api/v1/admin/transactionList:
 *   post:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for user transactionList 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true 
 *       - name: userId
 *         description: userId
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
router.post('/transactionList', auth.verifyToken, adminController.transactionList);
/**
 * @swagger
 * /api/v1/admin/transactionListforAdmin:
 *   get:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for user transactionListforAdmin 
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
router.get('/transactionListforAdmin', auth.verifyToken, adminController.transactionListforAdmin);
/**
 * @swagger
 * /api/v1/admin/bookinglist:
 *   post:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for user bookinglist 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: userId
 *         description: userId is required.
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
router.post('/bookinglist', auth.verifyToken, adminController.bookinglist);
/**
 * @swagger
 * /api/v1/admin/ridelList:
 *   post:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for user ridelList 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true 
 *       - name: userId
 *         description: userId
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
router.post('/ridelList', auth.verifyToken, adminController.ridelList);
/**
 * @swagger
 * /api/v1/admin/ridelListforAdmin:
 *   get:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for user ridelListforAdmin 
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
router.get('/ridelListforAdmin', auth.verifyToken, adminController.ridelListforAdmin);
/**
 * @swagger
 * /api/v1/admin/bookingPaymentList:
 *   post:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for user bookingPaymentList 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: userId
 *         description: userId is required.
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
router.post('/bookingPaymentList', auth.verifyToken, adminController.bookingPaymentList);
/**
 * @swagger
 * /api/v1/admin/bookingPaymentforAdmin:
 *   get:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for user bookingPaymentforAdmin 
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
router.get('/bookingPaymentforAdmin', auth.verifyToken, adminController.bookingPaymentforAdmin);
/**
 * @swagger
 * /api/v1/admin/withdrawRequestListforAdmin:
 *   get:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for user withdrawRequestListforAdmin 
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
router.get('/withdrawRequestListforAdmin', auth.verifyToken, adminController.withdrawRequestListforAdmin);
/**
 * @swagger
 * /api/v1/admin/stateList:
 *   get:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for user stateList 
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
router.get('/stateList', adminController.stateList);
/**
* @swagger
* /api/v1/admin/statecityList:
*   get:
*     tags:
*       - ADMIN
*     description: Creating Docs 
*       - application/json
*     parameters:
*       - name: _id
*         description: stateId is required.
*         in: query
*         required: true
*     responses:
*       200:
*         description: Data updated successfully.
*       404:
*         description: NOT FOUND.
*       500:
*         description: Internal server error.
*/
router.get('/statecityList', adminController.statecityList);
/**
* @swagger
* /api/v1/admin/addSelectedcity:
*   post:
*     tags:
*       - ADMIN
*     description: Creating Docs 
*       - application/json
*     parameters:
*       - name: token
*         description: Admin token is required.
*         in: header
*         required: true
*       - in: body
*         name: image
*         description: image Edit.
*         schema:
*           type: object
*           required:
*             - stateId
*           properties:
*             stateId:
*               type: string
*             city:
*               type: array
*               items:
*                type: string  
*     responses:
*       200:
*         description: Data updated successfully.
*       404:
*         description: NOT FOUND.
*       500:
*         description: Internal server error.
*/
router.post('/addSelectedcity', auth.verifyToken, adminController.addSelectedcity);
/**
 * @swagger
 * /api/v1/admin/selectedcityList:
 *   get:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for user selectedcityList 
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
router.get('/selectedcityList', adminController.selectedcityList);
/**
* @swagger
* /api/v1/admin/removeSelectedCity:
*   put:
*     tags:
*       - ADMIN
*     description: Creating Docs 
*       - application/json
*     parameters:
*       - name: token
*         description: Admin token is required.
*         in: header
*         required: true
*       - name: stateId
*         description: stateId is required.
*         in: query
*         required: true
*       - name: cityId
*         description: cityId is required.
*         in: query
*         required: false 
*     responses:
*       200:
*         description: Data updated successfully.
*       404:
*         description: NOT FOUND.
*       500:
*         description: Internal server error.
*/
router.put('/removeSelectedCity', auth.verifyToken, adminController.removeSelectedCity);
/**
* @swagger
* /api/v1/admin/bookingDetails:
*   post:
*     tags:
*       - ADMIN
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
router.post('/bookingDetails', auth.verifyToken, adminController.bookingDetails);
/**
 * @swagger
 * /api/v1/admin/bookinglistforAdmin:
 *  post:
 *    tags:
 *       - ADMIN LIST
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: fromDate
 *         description: fromDate
 *         in: formData
 *         required: false
 *       - name: toDate
 *         description: toDate
 *         in: formData
 *         required: false
 *       - name: page
 *         description: page
 *         in: formData
 *         required: false
 *       - name: limit
 *         description: limit
 *         in: formData
 *         required: false
 *    responses:
 *       200:
 *         description: Data fetched successfully.
 *       409:
 *         description: Requested data not found.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!
 */
router.post('/bookinglistforAdmin', auth.verifyToken, adminController.bookinglistforAdmin);

/**
 * @swagger
 * /api/v1/admin/pendingBookinglistforAdmin:
 *  post:
 *    tags:
 *       - ADMIN LIST
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: fromDate
 *         description: fromDate
 *         in: formData
 *         required: false
 *       - name: toDate
 *         description: toDate
 *         in: formData
 *         required: false
 *       - name: page
 *         description: page
 *         in: formData
 *         required: false
 *       - name: limit
 *         description: limit
 *         in: formData
 *         required: false
 *    responses:
 *       200:
 *         description: Data fetched successfully.
 *       409:
 *         description: Requested data not found.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!
 */
router.post('/pendingBookinglistforAdmin', auth.verifyToken, adminController.pendingBookinglistforAdmin);
/**
 * @swagger
 * /api/v1/admin/completeBookinglistforAdmin:
 *  post:
 *    tags:
 *       - ADMIN LIST
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: fromDate
 *         description: fromDate
 *         in: formData
 *         required: false
 *       - name: toDate
 *         description: toDate
 *         in: formData
 *         required: false
 *       - name: page
 *         description: page
 *         in: formData
 *         required: false
 *       - name: limit
 *         description: limit
 *         in: formData
 *         required: false
 *    responses:
 *       200:
 *         description: Data fetched successfully.
 *       409:
 *         description: Requested data not found.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!
 */
router.post('/completeBookinglistforAdmin', auth.verifyToken, adminController.completeBookinglistforAdmin);
/**
 * @swagger
 * /api/v1/admin/cancelBookinglistforAdmin:
 *  post:
 *    tags:
 *       - ADMIN LIST
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: fromDate
 *         description: fromDate
 *         in: formData
 *         required: false
 *       - name: toDate
 *         description: toDate
 *         in: formData
 *         required: false
 *       - name: page
 *         description: page
 *         in: formData
 *         required: false
 *       - name: limit
 *         description: limit
 *         in: formData
 *         required: false
 *    responses:
 *       200:
 *         description: Data fetched successfully.
 *       409:
 *         description: Requested data not found.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!
 */
router.post('/cancelBookinglistforAdmin', auth.verifyToken, adminController.cancelBookinglistforAdmin)
/**
 * @swagger
 * /api/v1/admin/dayBookingList:
 *  post:
 *    tags:
 *       - ADMIN LIST
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: day
 *         description: day ---> 7 || 15 || 30
 *         in: formData
 *         required: true
 *       - name: bookingStatus
 *         description: bookingStatus
 *         in: formData
 *         required: false 
 *    responses:
 *       200:
 *         description: Data fetched successfully.
 *       409:
 *         description: Requested data not found.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!
 */
router.post('/dayBookingList', auth.verifyToken, adminController.dayBookingList);

/**
* @swagger
* /api/v1/admin/uploadAudio:
*   post:
*     tags:
*       - UPLOADS
*     description: Check for Social existence and give the access Token 
*     produces:
*       - application/json
*     parameters:
*       - name: audio
*         description: audio ?? base64
*         in: formData
*         type: file
*         required: false
*     responses:
*       200:
*         description: Your login is successful
*       402:
*         description: Invalid credentials
*       404:
*         description: Entered email/mobile number is not registered.
*       500:
*         description: Internal Server Error
*       501:
*         description: Something went wrong!
*       400:
*         description: Fields are required.
*/
router.post('/uploadAudio', upload2.single('audio'), adminController.uploadAudio);
/**
* @swagger
* /api/v1/admin/notificationAudio:
*   post:
*     tags:
*       - UPLOADS
*     description: Check for Social existence and give the access Token 
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Your login is successful
*       402:
*         description: Invalid credentials
*       404:
*         description: Entered email/mobile number is not registered.
*       500:
*         description: Internal Server Error
*       501:
*         description: Something went wrong!
*       400:
*         description: Fields are required.
*/
router.post('/notificationAudio', adminController.notificationAudio);
/**
* @swagger
* /api/v1/admin/adminDriverCash:
*   post:
*     tags:
*       - ADMIN
*     description: Creating Docs for user adminDriverCash 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: userId
*         description: userId.
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
router.post('/adminDriverCash', auth.verifyToken, adminController.adminDriverCash);
/**
 * @swagger
 * /api/v1/admin/activeBlockBooking:
 *   put:
 *     tags:
 *       - ADMIN
 *     description: Check for Social existence and give the access Token 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: _id
 *         description: _id
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully deleted.
 *       404:
 *         description: This user does not exist
 *       500:
 *         description: Internal Server Error
 */
router.put('/activeBlockBooking', auth.verifyToken, adminController.activeBlockBooking);
/**
* @swagger
* /api/v1/admin/editAdminDriverCash:
*   put:
*     tags:
*       - ADMIN
*     description: Creating Docs for user editAdminDriverCash 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: userId
*         description: userId.
*         in: query
*         required: true 
*       - name: amountCollect
*         description: amountCollect.
*         in: formData
*         required: true 
*       - name: totalCashbooking
*         description: totalCashbooking.
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
router.put('/editAdminDriverCash', auth.verifyToken, adminController.editAdminDriverCash);
/**
* @swagger
* /api/v1/admin/updateCash:
*   put:
*     tags:
*       - ADMIN
*     description: Creating Docs for user updateCash 
*     produces:
*       - application/json
*     parameters:
*       - name: userId
*         description: userId.
*         in: query
*         required: true 
*       - name: driverCash
*         description: driverCash.
*         in: formData
*         required: true 
*       - name: adminCash
*         description: adminCash.
*         in: formData
*         required: true 
*       - name: totalCashbooking
*         description: totalCashbooking.
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
router.put('/updateCash', adminController.updateCash);
/**
* @swagger
* /api/v1/admin/viewAdminCash:
*   get:
*     tags:
*       - ADMIN
*     description: Creating Docs for user viewAdminCash 
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
router.get('/viewAdminCash', auth.verifyToken, adminController.viewAdminCash);
/**
* @swagger
* /api/v1/admin/sendNotification:
*   post:
*     tags:
*       - NOTIFICATION MANAGEMENT
*     description: Creating Docs for user sendNotification 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: userId
*         description: userId.
*         in: query
*         required: true 
*       - name: subject
*         description: subject.
*         in: formData
*         required: true 
*       - name: body
*         description: body.
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
router.post('/sendNotification', auth.verifyToken, adminController.sendNotification);
/**
* @swagger
* /api/v1/admin/listNotification:
*   get:
*     tags:
*       - NOTIFICATION MANAGEMENT
*     description: Creating Docs for user listNotification 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true 
*       - name: userId
*         description: userId.
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
router.get('/listNotification', auth.verifyToken, adminController.listNotification);

/**
 * @swagger
 * /api/v1/admin/vehicalList:
 *   post:
 *     tags:
 *       - ADMIN LIST
 *     description: Creating Docs for ADMIN LIST
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         description: page
 *         in: formData
 *         required: false
 *       - name: limit
 *         description: limit
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
router.post('/vehicalList', adminController.vehicalList);
module.exports = router;   
