import $api from '../http'

export default class EmployeeService {
  static async getAllUsers() {
    return $api.get('/admin/users')
  }
  static async getUserById(userId) {
    return $api.get(`/admin/users/${userId}`)
  }
  static async createUser(userData) {
    return $api.post('/admin/users', {...userData})
  }
  static async editUser(userId, userData) {
    return $api.put(`/admin/users/${userId}`, {...userData})
  }
}