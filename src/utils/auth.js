/**
 * @description 封装token的操作方法
 *  @author zsy
 */

import Cookies from 'js-cookie'

const TokenKey = 'healthcare_token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
