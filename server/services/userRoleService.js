const database = require("../models/index");

class UserService {
   //Thêm user_role
   addUserRole = async (user_role) => {
      return await database.UserRole.findOrCreate({
         where: {
            roleId: user_role.roleId,
            userId: user_role.userId,
         },
         defaults: user_role,
      });
      // let check = userRoleData.find((userRoleEle) => {
      //    return typeof userRoleEle === "boolean";
      // });
      // return check ? userRoleData[0] : "ROLEID USERID DUPPLICATE";
   };
}

module.exports = new UserService();
