'use strict';

const { Service } = require('egg');

class UserService extends Service {
  // 登录查找用户
  async login(username, password) {
    const $sql =
                'select u_id,token,username,identity_text from user,identity where username=? and password=? and user.u_type=identity.identity_type';
    const result = await this.app.mysql.query($sql, [ username, password ]);
    return result;
  }
  // 查找该用户是否存在
  async selectname(username) {
    const $sql = 'select * from user where username=? ';
    const result = await this.app.mysql.query($sql, [ username ]);
    return result;
  }
  // 保存token
  async saveToken(token, id) {
    const $sql = 'update user set token=? where u_id=?';
    const result = await this.app.mysql.query($sql, [ token, id ]);
    return result;
  }
}

module.exports = UserService;
