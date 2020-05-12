import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtModal,
  AtModalContent,
  AtCountdown
} from "taro-ui"
import { connect } from '@tarojs/redux'
import './index.less'
import api from '../../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))


class PayEnd extends Component {
  state = {
    isShow: false,
    pingID: '',
    goodsInfo: {}
  };

  config = {
    navigationBarTitleText: '支付结果'
  }

  componentWillMount() {
    let params = this.$router.params;
    this.setState({
      orderType: params.orderType,
      pingID: params.pingId
    })
    
  }
  componentDidMount() {
    const { orderType } = this.state;
    if(orderType == 2) {
      this.getInfo();
      this.setState({
        isShow: true,
      })
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {

  }

  componentDidShow () {
  }

  componentDidHide () { }

  onTimeUp() {}

  getInfo() {
    const { pingID } = this.state;
    api.post('/home/getProductItemInfo',{id: pingID}).then(res => {
      console.log('gggggg', res)
      if(res.data.code == 200) {
        this.setState({
          goodsInfo: res.data.data
        })
      }
    })
  }

  goOrder() {
    const { orderType } = this.state;
    if(orderType == 1) {
      Taro.navigateTo({
        url: `/pagesC/pages/myOrder/index`,
      })
    } else {
      Taro.navigateTo({
        url: `/pagesC/pages/groupBuyingDetail/index`,
      })
    }
  }

  onShareAppMessage() {
    const { pingID, goodsInfo } = this.state;
    
    return {
      title: `${goodsInfo.name},原价${goodsInfo.price},现价${goodsInfo.groupPrice},限时团购`,
      path: `/pagesA/pages/foodTuan/index?goodsId=${pingID}`,
      success: function (res) {
        console.log('成功', res)
        
      }
    }
    
  }


  render () {
    const { isShow, goodsInfo } = this.state;
    let userImg = Taro.getStorageSync('userInfo').avatarUrl;
    return (
      <View className='container'>
        <View className='topBox'>
          <Image className='okImg' src={require('./../../../image/ok.png')} />
          <View className='labelBox'>
            <Text className='title'>购买成功</Text>
            <Text className='label'>向商家出示二维码即可消费</Text>
          </View>
        </View>
        <View className='infoBox'>
          <View className='shopBox'>
            <Image className='icon' src={require('./../../../image/shop.jpg')} />
            <Text>美城美事365自营店</Text>
          </View>
          {/* <View className='shopInfoBox'>
            <Text className='name'>美城美事365自营店</Text>
            <Text className='num'>fregrg</Text>
          </View> */}
        </View>
        <View className='btnBox'>
          <View className='btn' onClick={() => this.goOrder()}>查看订单</View>
        </View>

        <AtModal isOpened={isShow}>
          <AtModalContent>
            <View className='toastBox'>
              <View className='toastTopBox'>
                <Image className='userImg' src={userImg} />
                <Text>快速邀请好友拼团，帮你更省钱！</Text>
              </View>
              <View className='line'></View>
              <View className='toastBottomBox'>
                <Image className='goodsImg' src={goodsInfo.pic} />
                <View className='goodsInfoBox'>
                  <Text className='goodsName'>{goodsInfo.name}</Text>
                  <Text className='goodsDetail'>{goodsInfo.detail}</Text>
                  <View className='priceBox'>
                    <Text className='now'>现价:${goodsInfo.groupPrice}</Text>
                    <Text className='oldBox'>原价: <Text className='old'>${goodsInfo.price}</Text></Text>
                  </View>
                  <AtCountdown
                    format={{ hours: ':', minutes: ':', seconds: '' }}
                    seconds={30}
                    onTimeUp={this.onTimeUp.bind(this)}
                  />
                </View>
              </View>
              <View className='line'></View>
              <View className='shareBox'>
                <Button openType='share' className='shareBtn'>邀请好友拼团</Button>
              </View>
            </View>
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}

export default PayEnd
