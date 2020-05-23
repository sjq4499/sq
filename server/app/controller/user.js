'use strict';

const Controller = require('egg').Controller;
const { creatToken } = require('../util/index');

class UserController extends Controller {
  // 登录接口
  async login(ctx) {
    const { username, password } = ctx.request.body;
    const result = await ctx.service.user.login(username, password);
    if (result.length) {
      const { u_id, username, identity_text } = result[0];
      const token = creatToken(u_id);
      await ctx.service.user.saveToken(token, u_id);
      ctx.status = 200;
      ctx.body = {
        code: 1,
        msg: '登录成功',
        u_id,
        username,
        identity_text,
        token,
      };
    } else {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        msg: '登录失败，该用户不存在',
      };
    }
  }
}

module.exports = UserController;
