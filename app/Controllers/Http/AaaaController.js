"use strict";

class AaaaController {
  async login({ request, response, auth }) {
    const user = request.only([
      Env.get("LOGIN_ID"),
      "password",
      "device_uuid",
      "device_info",
    ]);
    try {
      const authentication = await auth
        .authenticator("jwt")
        .attempt(user[Env.get("LOGIN_ID")], user.password);
      const super_users = Env.get("SUPER_USERS");
      const existUser = await this._userService.getUserByLoginId(
        user[Env.get("LOGIN_ID")]
      );
      const checkSuperUser = super_users.includes(existUser[0].phone);
      if (!checkSuperUser) {
        if (existUser[0].device_uuid == null) {
          await User.query().where("id", existUser[0].id).update({
            device_uuid: user.device_uuid,
            device_info: user.device_info,
          });
        } else {
          if (existUser[0].device_uuid != user.device_uuid) {
            return response.apiError(
              "Device uuid is wrong",
              "E_VALIDATE_DEVICE_UUID"
            );
          }
        }
      }

      const data = {
        profile: existUser[0],
        token: authentication.token,
        //refresh_token: authentication.refreshToken,
        is_first_login: existUser[0].is_first_login,
      };

      return this.responseJson(response, data, 1, "Đăng nhập thành công");
    } catch (error) {
      if (
        error.name == "UserNotFoundException" ||
        error.name == "PasswordMisMatchException"
      ) {
        console.log("222");
        return this.responseJson(
          response,
          undefined,
          undefined,
          "Sai số điện thoại hoặc mật khẩu"
        );
      }
      return this.responseJson(
        response,
        undefined,
        undefined,
        "Đăng nhập thất bại"
      );
    }
  }
}

module.exports = AaaaController;
