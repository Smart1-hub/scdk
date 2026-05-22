const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* TEMP USER DATABASE */
const users = [
  {
    id: 1,
    email: "admin@scdk.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "admin",
  },
];

/* LOGIN */
exports.login = async (req, res) => {

  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {

    return res.status(401).json({
      message: "Invalid credentials",
    });

  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {

    return res.status(401).json({
      message: "Invalid credentials",
    });

  }

  const token = jwt.sign(

    {
      id: user.id,
      role: user.role,
    },

    process.env.JWT_SECRET,

    {
      expiresIn: "1d",
    }

  );

  res.json({
    token,
    role: user.role,
  });

};