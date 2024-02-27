const router = require('express').Router();
const auth = require('../../middleware/auth')

const staticController = require('../../controllers/staticController');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var cpUpload = upload.fields([{ name: 'afterImage', maxCount: 1 }, { name: 'beforeImage', maxCount: 1 }])

/**
* @swagger
* /api/v1/static/addStatic:
*   post:
*     tags:
*       - STATIC MANAGEMENT
*     description: Creating Docs for update static content
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: Admin token is required.
*         in: header
*         required: true
*       - name: title
*         description: Title is required.
*         in: formData
*         required: false
*       - name: type
*         description: type is required.
*         in: formData
*         required: false 
*       - name: description
*         description: description is required.
*         in: formData
*         required: false
*     responses:
*       200:
*         description: Data updated successfully.
*       404:
*         description: NOT FOUND.
*       500:
*         description: Internal server error.
*/
router.post('/addStatic', auth.verifyToken, staticController.addStatic);
/**
 * @swagger
 * /api/v1/static/getstaticList:
 *   get:
 *     tags:
 *       - STATIC MANAGEMENT
 *     description: Creating Docs for get static content
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Data fetch successfully.
 *       404:
 *         description: NOT FOUND.
 *       500:
 *         description: Internal server error.
 */
router.get('/getstaticList', staticController.getstaticList);
/**
 * @swagger
 * /api/v1/static/getStaticContent:
 *   get:
 *     tags:
 *       - STATIC MANAGEMENT
 *     description: Creating Docs for get static content
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: _id
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Data fetch successfully.
 *       404:
 *         description: NOT FOUND.
 *       500:
 *         description: Internal server error.
 */
router.get('/getStaticContent', staticController.getStaticContent);
/**
 * @swagger
 * /api/v1/static/getStaticContentAPP:
 *   get:
 *     tags:
 *       - STATIC MANAGEMENT
 *     description: Creating Docs for get static content
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Type
 *         description: Type
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Data fetch successfully.
 *       404:
 *         description: NOT FOUND.
 *       500:
 *         description: Internal server error.
 */
router.get('/getStaticContentAPP', staticController.getStaticContentAPP);
/**
 * @swagger
 * /api/v1/static/updateStaticContent/{_id}:
 *   put:
 *     tags:
 *       - STATIC MANAGEMENT
 *     description: Creating Docs for update static content
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Admin token is required.
 *         in: header
 *         required: true
 *       - name: _id
 *         description: Type is required.
 *         in: path
 *         required: true
 *       - name: title
 *         description: Title is required.
 *         in: formData
 *         required: false
 *       - name: description
 *         description: description is required.
 *         in: formData
 *         required: false
 *     responses:
 *       200:
 *         description: Data updated successfully.
 *       404:
 *         description: NOT FOUND.
 *       500:
 *         description: Internal server error.
 */
router.put('/updateStaticContent/:_id',  auth.verifyToken, staticController.updateStaticContent);
/**
* @swagger
* /api/v1/static/deleteStaticData:
*   delete:
*     tags:
*       - STATIC MANAGEMENT
*     description: Creating Docs for user deleteStaticData 
*     produces:
*       - application/json
*     parameters:
*       - name: token
*         description: token
*         in: header
*         required: true
*       - name: title
*         description: title is required.
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
router.delete('/deleteStaticData', auth.verifyToken, staticController.deleteStaticData);

// /**
//  * @swagger
//  * /api/v1/static/addCommission:
//  *   post:
//  *     tags:
//  *       - COMMISSION MANAGEMENT
//  *     description: Creating Docs for update static content
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: token
//  *         description: Admin token is required.
//  *         in: header
//  *         required: true
//  *       - name: tax
//  *         description: tax is required.
//  *         in: formData
//  *         required: false
//  *       - name: Commission
//  *         description: Commission is required.
//  *         in: formData
//  *         required: false
//  *     responses:
//  *       200:
//  *         description: Data updated successfully.
//  *       404:
//  *         description: NOT FOUND.
//  *       500:
//  *         description: Internal server error.
//  */
router.post('/addCommission', auth.verifyToken, staticController.addCommission);
// /**
//  * @swagger
//  * /api/v1/static/viewCommission:
//  *   get:
//  *     tags:
//  *       - COMMISSION MANAGEMENT
//  *     description: Creating Docs for get static content
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: _id
//  *         description: _id
//  *         in: query
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: Data fetch successfully.
//  *       404:
//  *         description: NOT FOUND.
//  *       500:
//  *         description: Internal server error.
//  */
router.get('/viewCommission', staticController.viewCommission);
// /**
// * @swagger
// * /api/v1/static/EditCommission/{_id}:
// *   put:
// *     tags:
// *       - COMMISSION MANAGEMENT
// *     description: Creating Docs for update static content
// *     produces:
// *       - application/json
// *     parameters:
// *       - name: token
// *         description: Admin token is required.
// *         in: header
// *         required: true
// *       - name: _id
// *         description: _id is required.
// *         in: path
// *         required: true
// *       - name: tax
// *         description: tax is required.
// *         in: formData
// *         required: false
// *       - name: Commission
// *         description: Commission is required.
// *         in: formData
// *         required: false 
// *     responses:
// *       200:
// *         description: Data updated successfully.
// *       404:
// *         description: NOT FOUND.
// *       500:
// *         description: Internal server error.
// */
router.put('/EditCommission/:_id', auth.verifyToken, staticController.EditCommission);
// /**
// * @swagger
// * /api/v1/static/deleteCommission:
// *   delete:
// *     tags:
// *       - COMMISSION MANAGEMENT
// *     description: Creating Docs for user deleteCommission 
// *     produces:
// *       - application/json
// *     parameters:
// *       - name: token
// *         description: token
// *         in: header
// *         required: true
// *       - name: _id
// *         description: _id is required.
// *         in: formData
// *         required: true
// *     responses:
// *       200:
// *         description: You have successfully sign up.
// *       409:
// *         description: Already exist.
// *       500:
// *         description: Internal server error.
// */
router.delete('/deleteCommission', auth.verifyToken, staticController.deleteCommission);
// /**
//  * @swagger
//  * /api/v1/static/listCommission:
//  *   get:
//  *     tags:
//  *       - COMMISSION MANAGEMENT
//  *     description: Creating Docs for get static content
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: Data fetch successfully.
//  *       404:
//  *         description: NOT FOUND.
//  *       500:
//  *         description: Internal server error.
//  */
router.get('/listCommission', staticController.listCommission);
// /**
// * @swagger
// * /api/v1/static/activeBlockCommission/{_id}:
// *   put:
// *     tags:
// *       - COMMISSION MANAGEMENT
// *     description: Creating Docs for update static content
// *     produces:
// *       - application/json
// *     parameters:
// *       - name: token
// *         description: Admin token is required.
// *         in: header
// *         required: true
// *       - name: _id
// *         description: _id is required.
// *         in: path
// *         required: true
// *     responses:
// *       200:
// *         description: Data updated successfully.
// *       404:
// *         description: NOT FOUND.
// *       500:
// *         description: Internal server error.
// */
router.put('/activeBlockCommission/:_id', auth.verifyToken, staticController.activeBlockCommission);
module.exports = router;
