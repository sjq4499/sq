'use strict';

const md5 = require('md5');

function creatToken(id) {
  const token = JSON.stringify({
    id,
    time: new Date() * 1,
  });
  return md5(token);
}

module.exports = { creatToken };
