const bcrypt = require('bcrypt')
const {User} =require("../dbHandler/createtable")

const Login =async(req, res , next)=>{
    const {emailUser, password} = req.body;

    if(!emailUser || !password){
        res.status(400).json({error : "Isi dengan lengkap"})
    }
    try {
        const user =await User.findOne({where:{emailUser}})
        if(!user){
            res.status(400).json({error:"Email Salah "})
        }
        const passwordcari = await bcrypt.compare(password, user.password)
        if(!passwordcari){
            res.status(400).json({error:"password salah"})
        }
        res.status(200).json({status: "Login Success"});
    } catch (error) {
        console.error(error)
        res.status(400).json({error:"Server Error"});
    }
};
module.exports = Login