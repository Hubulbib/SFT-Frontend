import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { BASE_URL } from '../http'
import AuthService from '../services/AuthService'

export class AuthStore {
  user = {}
  isAuth = false
  isLoadingAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth = (bool) => {
    this.isAuth = bool
  }

  setUser = (user) => {
    this.user = user
  }

  setLoading = (bool) => {
    this.isLoadingAuth = bool
  }

  login = async(username, password) => {
    this.setLoading(true)
    try {
      const response = await AuthService.login(username, password)
      localStorage.setItem('token', response.data.token)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (err) {
      throw err
    } finally {
      this.setLoading(false)
    }
  }

  checkAuth = async() => {
    this.setLoading(true)
    try {
      const response = await axios.get(`${BASE_URL}/auth/refresh`, { withCredentials: true })
      localStorage.setItem('token', response.data.token)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (err) {
      throw err
    } finally {
      this.setLoading(false)
    }
  }

  logout = async() => {
    this.setLoading(true)
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({})
    } catch (err) {
      throw err
    } finally {
      this.setLoading(false)
    }
  }
}