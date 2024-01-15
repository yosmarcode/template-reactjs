import { UserKey } from '../constant/User'

let userStore: any = null

try {
  userStore = JSON.parse(localStorage.getItem(UserKey) || '')
} catch (error: any) {
  console.log(error.message)
  // window.location.replace(PublicRoutes.LOGIN)
  userStore = null
}

export default userStore
