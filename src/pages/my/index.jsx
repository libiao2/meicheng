import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtModal,
  AtModalHeader,
  AtModalContent
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../actions/counter'
import './index.less'
import api from './../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class My extends Component {
  state = {
    tabList: [
      { num: 0, title: '我的发布' },
      { num: 0, title: '我卖出的' },
      { num: 0, title: '我的订单' },
    ],
    userInfo: {},
    isGetInfo: false, // 获取用户信息弹框
  };

  config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount() {
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
    if(Taro.getStorageSync('userInfo') != '') {
      this.getData()
    }
  }

  componentDidHide () { }

  getData() {
    const { tabList } = this.state;
    api.post('/me/content',{}).then(res => {
      console.log('mmm', res)
      if(res.data.code == 200) {
        let list = tabList;
        list[0].num = res.data.data.myPublish;
        list[1].num = res.data.data.mySell;
        list[2].num = res.data.data.myOrder;
        this.setState({
          tabList: list
        })
      }
    })
  }

  goMy(index) {
      switch(index) {
        case 0:
          Taro.navigateTo({
            url: '/pagesB/pages/myPublish/index'
          })
          break;
        case 1:
          Taro.navigateTo({
            url: '/pagesC/pages/mySale/index'
          })
          break;
        case 2:
          Taro.navigateTo({
            url: '/pagesC/pages/myOrder/index'
          })
          break;
      }
    
  }

qrCode(){
  let that = this
  Taro.scanCode({
    success(res) {
      console.log(res)
      let obj={
        orderNo: res.result
      }
      api.post('/order/scanQRCode',obj).then(res => {
        if(res.data.code == 200) {
          Taro.showToast({
            title: '扫码成功！',
            icon: 'none',
            mask:true,
          });
        }
      })

    }
  }, that)
}

  connectMe() {
    Taro.navigateTo({
      url: '/pagesC/pages/myConnect/index'
    })
  }

  groupBuying() {
    Taro.navigateTo({
      url: '/pagesC/pages/groupBuyingDetail/index'
    })
  }

  getUserInfo() {
    this.setState({
      isGetInfo: true,
    })
  }

  noShou() {
    this.setState({
      isGetInfo: false,
    })
  }

  bindGetUserInfo(value) {
    let that = this;
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
                  that.setState({
                    userInfo: Taro.getStorageSync('userInfo')
                  })
                  api.post('/me/weixiLogin',{
                    encryptedData: e.encryptedData,
                    code: res.code,
                    iv: e.iv
                  }).then(v => {
                    if(v.data.code == 200) {
                      Taro.setStorageSync('token', v.data.data.token);
                      Taro.setStorageSync('userId', v.data.data.userId);
                      that.getData();
                      
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
    const { userInfo, isGetInfo } = this.state;
    return (
      <View className='container'>
        <View className='header'>
          {
            Taro.getStorageSync('userInfo') != '' ?
            <View className='headerLeft'>
              <Image className='img' src={userInfo.avatarUrl} />
              <Text className='name'>{userInfo.nickName}</Text>
            </View>
            :
            <View className='headerLeft' onClick={() => this.getUserInfo()}>
              <Image className='img' src={require('./../../image/toux.jpg')} />
              <Text className='clickname'>点击登录！</Text>
          </View>
          }
          
          <Image className='headerRight' src={require('./../../image/qr.png')} onClick={() => this.qrCode()}/>
        </View>
        <View className='tabBox'>
          <View className='tab'>
            {
              this.state.tabList.map((item, index) => {
                return (
                  <View className='box' onClick={() => this.goMy(index)}>
                    <Text className='top'>{item.num}</Text>
                    <Text>{item.title}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View className='bottom'>
          <View className='flexBox'>
            <View className='smallBox' onClick={() => this.connectMe()}>
              <Image className='iconImg' src={require('./../../image/info.png')} />
              <Text className='text'>联系方式</Text>
            </View>
            <View className='smallBox' onClick={() => this.groupBuying()}>
              <Image className='iconImg' src={require('./../../image/pt.png')} />
              <Text className='text'>拼团详情</Text>
            </View>
            <Button className='smallBox' open-type='contact'>
              <Image className='iconImg' src={require('./../../image/kefu.png')} />
              <Text className='text'>联系客服</Text>
            </Button>
            <View className='smallBox'></View>
            <View className='smallBox'></View>
            <View className='smallBox'></View>
            <View className='smallBox'></View>
            <View className='smallBox'></View>
            <View className='smallBox'></View>
          </View>
        </View>

        {/* 授权操作 */}
        <AtModal isOpened={isGetInfo}>
          <AtModalHeader>授权提示</AtModalHeader>
          <AtModalContent>
            <View className='shouquan'>
              <Text style='margin-top: 10px'>需要使用你的微信昵称和头像</Text>
              <View className='btnList'>
                
                <Button className='myBtn noBtn' onClick={() => this.noShou()}>暂不授权</Button>
                <Button
                  className='myBtn'
                  open-type='getUserInfo'
                  onGetUserInfo={this.bindGetUserInfo}>点击授权</Button>
              </View>
            </View>
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}

export default My
