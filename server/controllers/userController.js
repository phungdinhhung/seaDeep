const userService = require("../services/userService");
class userController {
   getUser = async (req,res) => {
      await userService
      .getUser(req.params.id)
      .then((data) => {
         console.log("data:" + data)
         data ? res.status(200).send(data) : res.status(400).json("user not found")
      })
      .catch((err) => {
         return res.status(500).send(err.message)
      })
   };

   register = async (req, res) => {
      await userService
         .register(req.body)
         .then((data) => {
            if (data !== "EMAIL DUPPLICATE") return res.status(200).send(data);
            return res.status(400).json("Email already registered");
         })
         .catch((err) => {
            return res.status(500).send(err.message);
         });
   };

   login = async (req, res) => {
      await userService
         .login(req.body)
         .then((data) => {
            if (data === "Email not found" || data === "Invalid password!") return res.status(400).json("Wrong account or password");
            return res.status(200).send(data);
         })
         .catch((err) => {
            return res.status(500).send(err.message);
         });
   };

   profile = async (req, res) => {};
}

module.exports = new userController();
