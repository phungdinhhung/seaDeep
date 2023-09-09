const userRoleService = require("../services/userRoleService");

class userRoleController {
   addUserRole = async (req, res) => {
      const user_role = req.body;
      console.log(user_role);
      await userRoleService
         .addUserRole(user_role)
         .then((data) => {
            if (data) {
               if (data !== "ROLEID USERID DUPPLICATE") return res.status(200).json(data);
               return res.status(400).json("Lỗi. Trùng roleID và userID");
            }
            return res.status(400).json("Lỗi thêm user_role");
         })
         .catch((err) => {
            return res.status(400).json(err);
            // next(err);s
         });
   };
}

module.exports = new userRoleController();
