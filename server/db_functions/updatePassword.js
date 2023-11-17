const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const user = require("../models/user");


const changePassword =(async (req,res)=>{

    const newPass = req.body.newPass;
    const email = req.body.email;

    try{

            const update = await user.updateOne({email:email},{password:newPass});
            res.status(200).send();

    }catch(error){
        console.log("This is error from changePassword.js");
        console.log(error);
        res.status(400).send();
    }

})


module.exports = changePassword;