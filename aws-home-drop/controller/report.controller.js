const {ReportModel}=require("../models/report.model");
const {UserModel}=require("../models/user.model")
const fs=require("fs");
const PDFDocument=require('pdfkit');
const nodemailer=require('nodemailer');
require('dotenv').config();
const sendReport = async (req, res) => {
    try {
        const { email, userid } = req.body;
        console.log("email", userid);

        const findUser = await UserModel.findOne({ email });

        const doc = new PDFDocument();
        doc.fontSize(18).text('PDF Report', { align: 'center' });
        doc.fontSize(12).text('Generated on: ' + new Date().toLocaleString(), { align: 'center' });
        doc.moveDown(0.5);
        doc.fontSize(12).text('User Email: ' + email, { align: 'center' });

        // Create a promise-based function to generate the PDF buffer
        const generatePDFBuffer = () => {
            return new Promise(resolve => {
                const buffers = [];
                doc.on("data", buffer => buffers.push(buffer));
                doc.on("end", () => resolve(Buffer.concat(buffers)));
                doc.end();
            });
        };

        const pdfBuffer = await generatePDFBuffer();
        const pdfBase64 = pdfBuffer.toString("base64");

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'saifjava2@gmail.com',
                pass: 'hyzcsbbodglsntrr'
            },
        });

        const mailOptions = {
            from: 'saifjava2@gmail.com',
            to: email,
            subject: 'Report',
            text: 'Hey, this is your report.',
            attachments: [
                {
                    filename: 'report.pdf',
                    content: pdfBase64,
                    contentType: 'application/pdf', // Use 'contentType' instead of 'type'
                },
            ],
        };

        transporter.sendMail(mailOptions, async (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).send({ "error": "Error in sending email" });
            }
            console.log("Mail sent", info.response);

            const saveReport = new ReportModel({ "sent_to": email, "isSent": true, userId: userid });
            await saveReport.save();

            res.status(201).send({ "msg": "Report sent successfully" });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ "msg": "Internal server error", error });
    }
}



const sentHistory=async(req,res)=>{
    try {
        const {userid}=req.body;
        console.log(userid)
        const findHitory=await ReportModel.find({userId:userid});
        res.status(200).send({"msg":"all sent reports",findHitory})
    } catch (error) {
        console.log(error);
        res.staus(500).send({"msg":"Internal server error",error})
    }
}

module.exports={
    sendReport,sentHistory
}