const bcrypt = require("bcrypt");
const { User } = require("../dbHandler/createtable");
const { sequelize } = require("../dbHandler/database");

const Register = async (req, res, next) => {
  const { name, password, tanggalLahir, jenisKelamin, emailUser } = req.body;

  if (!name || !password || !tanggalLahir || !jenisKelamin || !emailUser) {
    return res.status(400).json({ error: "Data belum lengkap" });
  }

  try {
    const cekUser = await User.findOne({
      where: {
        emailUser: emailUser,
      },
    });
    if (cekUser) {
      return res.status(400).json({ error: "email sama name sudah ada" });
    }
    const cekName = await User.findOne({
      where: {
        name:name,
      },
    });
    if (cekName) {
      return res.status(400).json({ error: "email sama name sudah ada" });
    }

    await sequelize.transaction(async (t) => {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);

      await User.create(
        {
          name: name,
          password: hashPassword,
          tanggalLahir: tanggalLahir,
          jenisKelamin: jenisKelamin,
          emailUser: emailUser,
        },
        { transaction: t }
      );
      res.status(200).json({ status: "User registered successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
module.exports = Register;
