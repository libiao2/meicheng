import Taro, { Component, sendSocketMessage } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import './two.less'
import api from './../../../utils/api'

export default class Two extends Component {
  state = {
    isOpen: false
  }
  timeChange(time) {
    let newData = new Date(time).toJSON();
    return new Date(+new Date(newData)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
  }

  callMe() {
    this.setState({
      isOpen: true
    })
  }

  sendMessage(item) {
    console.log('uuuu', item)
    this.setState({
      isOpen:false
    })
    if(item.memberId == Taro.getStorageSync('userId')) {
      Taro.showToast({
        title: '不能给自己发送消息哦~~',
        icon: 'none',
        mask:true,
      })
      return;
    }
    api.post('/ws/openMessage',{sendToId: item.memberId,}).then(res => {
      if(res.data.code == 200) {
        Taro.navigateTo({
          url: `/pagesA/pages/chat/index?obj=${encodeURIComponent(JSON.stringify(item))}&dataList=${encodeURIComponent(JSON.stringify(res.data.data))}&pageFrom='index'`
        })
      }
    })
  }

  goDetail(item) {
    console.log('vv',item)
    Taro.navigateTo({
      url: `/pagesC/pages/otherDetail/index?id=${item.id}&type=${this.props.type}`
    })
  }

  render () {
    const { item, type } = this.props;
    console.log('-----------------', item)
    return (
      <View className='twoBox'>
        <View className="top">
          <View className='topLeft' onClick={() => this.goDetail(item)}>
            <Image className='goodsImg' src={item.icon} />
            <View className='infoBox'>
              <View className='leftTop'>
                <Text className='leftTopTitle'>{item.name}</Text>
                <Text className='time'>{item.createTimeString} 发布</Text>
              </View>
              <View className='leftBottom'>{item.detail}</View>
            </View>
          </View>
          {
            type != 5 &&
            <View className='topRight' onClick={() => this.callMe()}>请联系我</View>
          }
          
        </View>
        <View className='bottomBox' onClick={() => this.goDetail(item)}>
          {
            item && item.picList != null && item.picList.length > 0 &&
            <View
              style={{ width: (260 * item.picList.length) + 'rpx'}}
              className='box' >
              {
                item.picList.map(oneItem => {
                  return <Image className='img' src={oneItem} />
                })
              }
            </View>
          }
        </View>
        <AtModal isOpened={this.state.isOpen}>
          <AtModalContent>
            <View className='toastBox'>
              <Text className='text'>手机号：{item.telephone == '' ? '暂无' : item.telephone}</Text>
              <Text className='text'>微信号：{item.weixinno == '' ? '暂无' : item.weixinno}</Text>
              <Text className='text'>邮箱号：{item.email == '' ? '暂无' : item.email}</Text>
              <Text className='text last' onClick={() => this.sendMessage(item)}>站内消息</Text>
            </View>
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}