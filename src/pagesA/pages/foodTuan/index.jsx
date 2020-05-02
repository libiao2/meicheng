import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import {
  AtIcon,
  AtCountdown,
  AtActionSheet,
  AtActionSheetItem,
  AtToast
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


class FoodTuan extends Component {
  state = {
    goodsId: '',
    openShare: false,
    isOpenToast: false,
    toastText: ''
  };

  config = {
    navigationBarTitleText: '美城美食365'
  }
  
  componentWillMount() {
  }
  componentDidMount() {
    let id = this.$router.params.goodsId;
    this.setState({
      goodsId: id,
    })
    this.getData(id);
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {
    
  }

  componentDidShow () { 
  }

  componentDidHide () { }

  getData(id) {
    api.post('/home/getProductItemInfo',{id}).then(res => {
      console.log('gggggg', res)
      if(res.data.code == 200) {
        this.setState({
          goodsInfo: res.data.data
        })
      }
    })
  }

  callMe(phone) {
    Taro.makePhoneCall({
      phoneNumber: phone,
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  }

  onTimeUp() {

  }

  shareClick() {
    this.setState({
      openShare: true
    })
  }

  handleClose() {
    this.setState({
      openShare: false
    })
  }

  getSec(time) {
    let end = new Date(time);
    let endSec = end.getTime()/1000;
    let now = parseInt(new Date().getTime()/1000);
    return (endSec - now);
  }

  onShareAppMessage() {
    console.log('nnnmmm')
    const { goodsId } = this.state;
    return {
      title: '团购详情',
      path: `/pagesA/pages/foodTuan/index?goodsId=${goodsId}`,
      success: function (res) {
        console.log('成功', res)
      }
    }
  }

  shareFriend() {
    const { goodsId } = this.state;
    Taro.showToast({
      title: '开始保存图片，请稍后~~',
      icon: 'none',
      mask:true,
    })
    api.post('/product/shareProdItem',{id: goodsId}).then(res => {
      console.log('gggggg', res)
      if(res.data.code == 200) {
        let imgUrl = res.data.data;

        Taro.downloadFile({
          url: imgUrl,
          success: function (res) {
            console.log('UUUYYYYY', res);
            if (res.statusCode === 200) {
              Taro.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success(res) {
                  Taro.showToast({
                    title: '保存图片成功！',
                    icon: 'none',
                    mask:true,
                  })
                },
                fail(res) {
                  Taro.showToast({
                    title: '保存图片失败！',
                    icon: 'none',
                    mask:true,
                  })
                }
              })
            }
          }
        })
      }
    })
  }

  goPay() {
    const { goodsInfo } = this.state;
    let obj ={
      orderItemList: [
        {
          productItemId: goodsInfo.id,
          quantity: 1,
        }
      ]
    }

    api.post('/order/confirmOrder', obj).then(res => {
      if(res.data.code == 200) {
        Taro.navigateTo({
          url: `/pagesC/pages/confirmOrder/index?data=${encodeURIComponent(JSON.stringify(res.data.data))}&isPing=2&goodsId=${goodsInfo.id}`,
        })
      }
    })
  }

  goPay2(num) {
    const { goodsInfo } = this.state;
    let obj ={
      orderItemList: [
        {
          productItemId: goodsInfo.id,
          quantity: 1,
        }
      ]
    }

    api.post('/order/confirmOrder', obj).then(res => {
      if(res.data.code == 200) {
        Taro.navigateTo({
          url: `/pagesC/pages/confirmOrder/index?data=${encodeURIComponent(JSON.stringify(res.data.data))}&isPing=2&goodsId=${goodsInfo.id}&groupNo=${num}`,
        })
      }
    })
  }


  render () {
    const { goodsInfo, openShare, isOpenToast, toastText } = this.state;
    return (
      <View className='container'>
        <View className='topBox'>
          <Swiper
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='#fff'
            circular
            indicatorDots
            autoplay>
              {
                goodsInfo.picList.map((item, index) => {
                  return <SwiperItem key={index}>
                    <Image src={item} className='swiperImg' />
                    </SwiperItem>
                })
              }
          </Swiper>
          <View className='nameBox'>
            <Text className='name'>{goodsInfo.name}</Text>
            <AtIcon onClick={() => this.callMe(goodsInfo.telephone)} className='phoneIcon' value='phone' size='26' color='#666'></AtIcon>
          </View>
          <View className='TopShareBox'>
            <View className='addressBox'>
              <View className='timeBox'>
                <Image
                  src={require('./../../../image/time.png')}
                  style='width:15px;height:15px;margin-right: 6px' />
                <Text className='info'>营业时间: {goodsInfo.openTimeStart}-{goodsInfo.openTimeEnd}</Text>
              </View>
              <View className='timeBox'>
                <Image
                  src={require('./../../../image/dingwei.png')}
                  style='width:15px;height:15px;margin-right: 6px' />
                <Text className='info'>{goodsInfo.address}</Text>
              </View>
            </View>
            <View className='share' onClick={() => this.shareClick()}>
              <Image className='img' src={require('./../../../image/share.png')} />
              <Text className='text'>分享</Text>
            </View>
          </View>
          <View className='kaiTuanBox'>
            <View className='kaiTuanBtn' onClick={() => this.goPay()}>立即开团</View>
          </View>
          <View className='goodsBigBox'>
            {
              goodsInfo && goodsInfo.groupList &&
              goodsInfo.groupList.map((item,index) => {
                return (
                  <View className='goodsItemBox'>
                    <Image className='img' src={item.pic} />
                    <View className='content'>
                      <Text className='name'>{item.name}</Text>
                      <View className='priceBox'>
                        <Text className='nowTitle'>现价:</Text>
                        <Text className='danw'>$</Text>
                        <Text className='nowPrice'>{item.groupPrice}</Text>
                        <View className='oldBox'>
                          <Text>原价:</Text>
                          <Text className='price'>${item.price}</Text>
                        </View>
                      </View>
                      <View className='time'>
                        {
                          item && item.groupTime &&
                          <AtCountdown
                            format={{ hours: ':', minutes: ':', seconds: '' }}
                            seconds={item.countdownSecond}
                            onTimeUp={this.onTimeUp.bind(this)}
                          />
                        }
                        <Text>后结束</Text>
                      </View>
                    </View>
                    <View className='btn' onClick={() => this.goPay2(item.groupNo)}>参与拼团</View>
                  </View>
                )
              })
            }
          </View>
          <View className='fuwu'>
            <View className='titleBox'>
              <Text className='title'>商品详情</Text>
            </View>
            <Text>{goodsInfo.detail}</Text>
          </View>
          <View className='fuwu'>
            <View className='titleBox'>
              <Text className='title'>使用说明</Text>
            </View>
            <Text>{goodsInfo.note}</Text>
          </View>
        </View>
        <AtActionSheet isOpened={openShare} onClose={() => this.handleClose()}>
          <AtActionSheetItem>
            <View className='shareTitle'>
              <Text>分享</Text>
            </View>
            <View className='shareBox'>
              <Button className='shareItem' openType='share'>
                <View className='wechatBox'>
                  <Image src={require('./../../../image/wechatP.png')} className='wechatIconImg' />
                  <Text>微信好友</Text>
                </View>
              </Button>
              <Button className='shareItem' onClick={() => this.shareFriend()}>
                <View className='wechatBox'>
                  <Image src={require('./../../../image/wechatP.png')} className='wechatIconImg' />
                  <Text>朋友圈</Text>
                </View>
              </Button>
            </View>
          </AtActionSheetItem>
        </AtActionSheet>
        <AtToast
          isOpened={isOpenToast}
          text={toastText}>
        </AtToast>
      </View>
    )
  }
}

export default FoodTuan
