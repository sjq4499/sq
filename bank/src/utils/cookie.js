/*
 * @Author: mikey.zhaopeng
 * @Date: 2020-05-21 17:33:26
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-05-21 17:36:17
 */

export const getLocalStorage = function (key) {
  return window.localStorage.getItem(key)
}
export const setLocalStorage = function (key, val) {
  window.localStorage.setItem(key, val)
}
