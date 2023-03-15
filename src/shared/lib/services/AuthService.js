import $api from '../http'

export default class AuthService {
  static login = async(username, password) => {
    return $api.post('/auth/login', { username, password })
  }
  static logout = async() => {
    return $api.post('/auth/logout')
  }
}