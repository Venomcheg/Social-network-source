import * as axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "cfd2697b-54f4-44ec-ac87-b52b20963435",
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getAuthUserData() {
    return instance.get("auth/me").then((response) => {
      return response.data
    })
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status })
  },
  savePhoto(file) {
    const formData = new FormData()
    formData.append("image", file)
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
}
export const authAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  },
}
