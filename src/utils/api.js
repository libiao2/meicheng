import Taro from '@tarojs/taro'
import { base } from './config'
import { getGlobalData } from './../utils/global_data'

export default {
  baseOptions(params, method = 'POST') {
    let { url, data } = params
    console.log('params', params)
    let contentType = 'application/json'
    contentType = params.contentType || contentType
    const option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: base + url,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'token': Taro.getStorageSync('token') },
      success(res) {
        if(res.data.code == 200) {
          return res.data.data
        }else if(res.data.code == 401) {
          console.log('token过期')
          Taro.setStorageSync('token', '');
          Taro.navigateTo({
            url: '/pagesB/pages/login/index'
          })
        }else  {
          console.log('发生错误')
          Taro.showToast({
            title: res.data.message,
            icon: 'none'
          });
        }
      },
      error(e) {
        console.log('????', e)
        // logError('api', '请求接口出现问题', e)
      }
    }
    return Taro.request(option)
  },
  get(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option)
  },
  post: function (url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  }
}
