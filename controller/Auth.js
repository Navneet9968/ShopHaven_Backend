const { User } = require("../model/User");

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const doc = await user.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).exec();
  console.log(user);
  //this is temporaray, we will use bcrypt to compare password
  if (!user) {
    res.status(401).json({ message: "User not found" });
  } else if (user.password === req.body.password) {
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      addresses: user.addresses,
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};