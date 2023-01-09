import axios from 'axios'
import store from '@/store/index'

// create axios example
const instance = axios.create({
  baseURL: 'https://dog.ceo' // base_url of api
})

// request interceptor
instance.interceptors.request.use(
  (config) => {
    // loading + true
    store.dispatch('SetLoading', true)

    return config
  },
  (error) => {
    // Handle some request errors here

    // loading false
    setTimeout(function () {
      store.dispatch('SetLoading', false)
    }, 300)

    console.log(error)
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const res = response.data
    // loading - false
    store.dispatch('SetLoading', false)
    if (res.status === 'success') {
      return res.message
    } else {
      console.log(res.status)
      return Promise.reject(response)
    }
    // Here we process some logic when the response is returned normally
  },
  (error) => {
    // here to deal with some response logic when error occurs

    // loading - false
    store.dispatch('SetLoading', false)

    return Promise.reject(error)
  }
)

export default instance
