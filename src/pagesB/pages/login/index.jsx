import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import {
  AtIcon,
  AtGrid
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../../actions/counter'
import api from './../../../utils/api'
import './index.less'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class Login extends Component {
  state = {
    userInfo: {}
  };

  config = {
    navigationBarTitleText: '登录'
  }
  
  componentWillMount() {
    console.log('ggggg',Taro.getStorageSync('userInfo'))
    this.setState({
      userInfo: Taro.getStorageSync('userInfo')
    })
  }
  componentDidMount() {
    
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {
    
  }

  componentDidShow () { 
  }

  componentDidHide () { }

  bindGetUserInfo(value) {
    console.log(value);
    if(value.detail.userInfo) {
      console.log('授权成功！')
      // 保存用户信息微信登录
      Taro.setStorageSync('userInfo', value.detail.userInfo);

      this.setState({
        isGetInfo: false,
      });
      let that = this;
      Taro.login({
        success: function (res) {
          if (res.code) {
            let obj = {
              withCredentials: true,
            }
            Taro.getSetting().then(a => {
              console.log('999900000', a)
              if (a.authSetting['scope.userInfo']) {
                Taro.getUserInfo(obj).then(e=> {
                  Taro.setStorageSync('userInfo', JSON.parse(e.rawData));
                  api.post('/me/weixiLogin',{
                    encryptedData: e.encryptedData,
                    code: res.code,
                    iv: e.iv
                  }).then(v => {
                    if(v.data.code == 200) {
                      Taro.setStorageSync('token', v.data.data.token);
                      Taro.setStorageSync('userId', v.data.data.userId);
                      Taro.switchTab({
                        url: '/pages/index/index'
                      })
                    }
                  });
                })
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  }

  render () {
    const { userInfo } = this.state;
    return (
      <View className='container'>
        <Image className='img' src={userInfo.avatarUrl} />
        <Text className='name'>{userInfo.nickName}</Text>
        <Button className='btnBox' open-type='getUserInfo' onGetUserInfo={this.bindGetUserInfo}>
          点击登录
        </Button>
      </View>
    )
  }
}

export default Login
