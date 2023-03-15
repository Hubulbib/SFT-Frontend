import { makeAutoObservable } from 'mobx'
import EmployeeService from '../services/EmployeeService'

export class EmployeeStore {
  userList = []
  user = {}
  isLoadingAdmin = false

  constructor() {
    makeAutoObservable(this)
  }

  setUserList = (userList) => {
    this.userList = userList
  }

  setUser = (user) => {
    this.user = user
  }

  setLoading = (bool) => {
    this.isLoadingAdmin = bool
  }

  getAllUsers = async() => {
    this.setLoading(true)
    try {
      const response = await EmployeeService.getAllUsers()

      this.setUserList(response.data.users.map(el => [el._id, el.username, el.fullName, el.phone, el.email]))
    } catch (err) {
      throw err
    } finally {
      this.setLoading(false)
    }
  }

  getUserById = async (userId) => {
    this.setLoading(true)
    try {
      const response = await EmployeeService.getUserById(userId)

      this.setUser(response.data.user)
    } catch (err) {
      throw err
    } finally {
      this.setLoading(false)
    }
  }

  createUser = async (userData) => {
    this.setLoading(true)
    try {
      const response = await EmployeeService.createUser(userData)

      return response.data.user._id
    } catch (err) {
      throw err
    } finally {
      this.setLoading(false)
    }
  }

  editUser = async (userId, userData) => {
    this.setLoading(true)
    try {
      await EmployeeService.editUser(userId, userData)
    } catch (err) {
      throw err
    } finally {
      this.setLoading(false)
    }
  }
}