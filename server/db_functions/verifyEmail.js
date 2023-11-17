const { mongo, default: mongoose } = require("mongoose");

const user = require("../models/user");

const x = require("../mailer/mailer");
const mail = x.signup;



const verifyEmail = (async(req,res)=>{

    const email = req.body.email;

    const match = await user.findOne({email:email});

    if(match){
        res.status(222).send("Email Already Exist");
    }
    else{

        const otp_number = otpGenerator.generate(6, { lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });
        const mailer = mail(email,otp_number);
        const data = new otp({
            email : email,
            otp : otp_number
        })
        try {
            const saved = data.save();
        } catch (error) {
            console.log("This is error from signup.js -> mailer part");
            console.log(error);
            res.status(400).send();
        }

    }


})

module.exports = verifyEmail;