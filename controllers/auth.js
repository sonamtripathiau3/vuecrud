const User = require("../models/user");
const bcrypt = require("bcryptjs");


exports.Signup = async (req, res, next) => {
  console.log("body", req.body);

  const {
    email,
    number,
    name,
    password,
  } = req.body;


    User.findOne({
      email: email,
      // {phone: phone}
    })
      .then((user) => {
        console.log("user", user);
        if (user) {
          return res.status(400)
            .json({
              error: "USER_EXISTS",
              msg: "User Already Exists!",
              status: false,
            });
        }

        bcrypt
          .hash(password, 12)
          .then((hashedPassword) => {
            const newUser = new User({
              email,
              number,
              name,
              password: hashedPassword,
            });

            newUser
              .save()
              .then(() => {
                return res.status(200).json({
                    msg: "User is registered successfully!",
                    status: true,
                  });
              })
              .catch((err) => {
                console.log(err);
                return res
                  .status(400)
                  .json({
                    error: "INTERNAL_SERVER",
                    msg: "Error in Saving User",
                    status: false,
                  });
              });
          })
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ msg: err, status: false });
      });
  ;
};

exports.Signin = async (req, res, next) => {
  const { email, password } = req.body;

  const re = new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+"
  );
  let user;
  if (re.test(email)) {
    user = await User.findOne({ email});
  }

  if (!user) {
    return res
      .status(401)
      .json({ error: "INVALID_USER", msg: "User not found!", status: false });
  }

  user.comparePassword(password, async (err, isMatch) => {
    if (err) {
      return res
        .status(400)
        .json({ error: "INTERNAL_SERVER", msg: err, status: false });
    }

    if (!isMatch) {
      return res
        .status(400)
        .send({
          error: "INVALID_PASSWORD",
          msg: "User Password Do Not Matched!",
          status: false,
        });
    }

    const response = {
     isLoggedIn:true,
      user: user,
      status: 200,
      msg:"Successfully logged in"
    };

    return res.status(200).json(response);
  });
};

