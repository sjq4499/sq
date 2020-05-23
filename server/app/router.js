'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const aouth = middleware.aouth();
  router.get('/', controller.home.index);

  router.post('/user/login', controller.user.login); // 登录
};
