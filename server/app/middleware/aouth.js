'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const { id, authorization } = ctx.request.headers;
    if (!id) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        msg: '没有权限，没id',
      };
    } else if (!authorization) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        msg: '没有权限，没authorization',
      };
    } else {
      const result = await ctx.service.user.selectToken(id);
      const { token } = result[0];
      if (token !== authorization) {
        ctx.status = 401;
        ctx.body = {
          code: 0,
          msg: '没有权限，不匹配',
        };
      } else {
        await next();
      }
    }
  };
};
