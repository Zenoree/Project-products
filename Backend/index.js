const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const Register = require("./Handler/register.js");
const Login = require("./Handler/login.js");
const ProductRoute = require("./router/ProductRouter.js");
const exp = require("constants");

app.use(cookiesParser());
app.use(express.json());
app.use(cors());

app.use("/images", express.static("public/images"));
app.use("/logo", express.static(path.join(__dirname, "../Frondend/src/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frondend/src/components/index.html"));
});

// app.get("/login",(req, res)=>{
//     res.sendFile(path.join(__dirname, "../Frondend/src/components/login.html"));
// })
// app.post("/login", (req, res) => {
//   // Handle login logic
//   // Redirect to another page after successful login if needed
//   res.redirect("/login");
// });
app.get("/:page?", (req, res) => {
  const { page } = req.params;
  const filePath = path.join(__dirname, `../Frondend/src/components/${page || "index"}.html`);
  if (require("fs").existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("Not Found");
  }
});

app.post('/products',ProductRoute);
app.post("/register", Register);
app.post("/login", Login);

app.listen(3000, () => {
  console.log("Berhasil terhubung");
});
