import axios from 'axios'
import querystring from 'qs'
import config from './../config'

const { BASE_URL } = config

const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		Accept: 'application/json',
	},
	paramsSerializer: params => querystring.stringify(params),
})

export default {

	/**
   * @param {Sring} url '/path/to/endpoint'
   * @param {Object} json
   * @param {Object} form
  */
	put: (context, url, form = {}, json = {}) => {
		const token = context.app.$cookies.get('accessToken')
		if(token){
			api.defaults.headers.Authorization = `bearer ${token}`
		}
		api.defaults.headers.common['Content-Type'] = json ? 'application/json' : 'application/x-www-form-urlencoded'
		const data = querystring.stringify(form) || json
		return api.put(url, data, {
			params: querystring.stringify(form),
			baseURL: config.BASE_URL,
		}).then(response => Promise.resolve(response.data))
			.catch(err => Promise.reject(err))
	},


	/**
   * @param {Sring} url '/path/to/endpoint'
   * @param {Object} param query params
  */
	get: (context, url, customConfig = {}) =>{
		const token = context.app.$cookies.get('accessToken')
		if(token){
			api.defaults.headers.Authorization = `bearer ${token}`
		}
		return api.get(url, {
			baseURL: config.BASE_URL,
			...customConfig
		}).then(response => Promise.resolve(response.data))
			.catch(err => Promise.reject(err))
	},


	/**
   * @param {Sring} url '/path/to/endpoint'
   * @param {Object} json
   * @param {Object} form
   * @param {Object} reqConfig  custom config for request
  */
	post: (context, url, form = {}, json = {}, reqConfig = {}) => {
		const token = context.app.$cookies.get('accessToken')
		if (token) {
			api.defaults.headers.Authorization = `bearer ${token}`
		}
		api.defaults.headers['Content-Type'] = json ? 'application/json' : 'application/x-www-form-urlencoded'
		const data = querystring.stringify(form) || json
		return api.post(url, data, {
			params: querystring.stringify(form),
			baseURL: config.BASE_URL,
			...reqConfig,
		}).then(response => Promise.resolve(response.data))
			.catch(err => Promise.reject(err))
	},


	/**
   * Send request with Content-Type multipart/form
   * used to upload file
   * @param {Sring} url '/path/to/endpoint'
   * @param {Object} data
  */
	postData: (context, url, data = {}, customConfig = {}) => {
		const token = context.app.$cookies.get('accessToken')
		if (token) {
			api.defaults.headers.Authorization = `bearer ${token}`
		}
		api.defaults.headers['Content-Type'] = 'multipart/form-data'
		api.defaults.timeout = 30000
		const formData = new FormData()
		const keys = Object.keys(data)
		keys.forEach((key) => {
			(data[key] instanceof File)  ?
				formData.append(key, data[key], data[key].name)
				:
				formData.append(key, data[key])
		})
		return api.post(url, formData, {
			...customConfig
		}).then(response => Promise.resolve(response.data))
			.catch(err => Promise.reject(err))
	},


	/**
   * @param {Sring} url '/path/to/endpoint'
  */
	delete: (context, url) => {
		const token = context.app.$cookies.get('accessToken')
		if (token) {
			api.defaults.headers.Authorization = `bearer ${token}`
		}
		return api.delete(url, {
			baseURL: config.BASE_URL,
		}).then(response => Promise.resolve(response.data))
			.catch(err => Promise.reject(err))
	},
}