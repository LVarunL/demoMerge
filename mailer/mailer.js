const { configDotenv } = require('dotenv');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const otpGenerator = require('otp-generator')




require('dotenv').config();



const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    service : 'gmail',
    port:'587',
    // secure:'true', 
    auth: {
        user: process.env.MAIL,
        pass: process.env.PSWD
    }
});



mailTransporter.verify((error, success) => {
    if (error) console.log(error);
    console.log("Server is ready to take our messages");
});

mailTransporter.use('compile', hbs({
    viewEngine: {
        extname: '.hbs',
        layoutsDir: './mailer/',
        defaultLayout: false,
        partialsDir: './mailer/',
    }, viewPath: './mailer/', extName: '.hbs'
}));



// let mailDetails = {
//     from: 'PayProtect',
//     to: '',
//     subject: '',
//     template: 'product_confirmation_template',
//     context: {
//         name: 'Anonymous Coder', products: products,
//     }
// };



const mailer = (async (username,mail)=>{
    const otp_ = otpGenerator.generate(6, { lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });
    
    const data = {
        name : username,
        otp : otp_
    }


    let mailDetails = {
        from: 'Stock Market',
        to: mail,
        subject: 'SSSSS',
        template: 'mail',
        context: {
            demo:data,
        }
    };


    console.log(otp_);


    // mailDetails.context.demo=data;
  
    const s = await mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
    // console.log("oooo");
})


module.exports = mailer;
