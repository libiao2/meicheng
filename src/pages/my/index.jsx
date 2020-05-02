import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtIcon,
  AtGrid
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
    this.getData()
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {

  }

  componentDidShow () {
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


  render () {
    const { userInfo } = this.state;
    return (
      <View className='container'>
        <View className='header'>
          <View className='headerLeft'>
            <Image className='img' src={userInfo.avatarUrl} />
            <Text className='name'>{userInfo.nickName}</Text>
          </View>
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
      </View>
    )
  }
}

export default My
