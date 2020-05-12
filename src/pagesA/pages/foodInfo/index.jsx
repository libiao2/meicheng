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


class FoodInfo extends Component {
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

  onShareAppMessage() {
    console.log('nnnmmm')
    const { goodsId } = this.state;
    return {
      title: '商品详情',
      path: `/pagesC/pages/leisureInfo/index?goodsId=${goodsId}`,
      success: function (res) {
        console.log('成功', res)
      }
    }
  }

  shareFriend() {
    const { goodsId } = this.state;
    this.setState({
      isOpenToast: true,
      toastText: '开始保存图片，请稍后~~'
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

  openMap() {
    const { goodsInfo } = this.state;
    ////使用微信内置地图查看标记点位置，并进行导航
    Taro.openLocation({
      latitude: parseInt(goodsInfo.latitude),//要去的纬度-地址
      longitude: parseInt(goodsInfo.longitude),//要去的经度-地址
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
            <Text className="price">${goodsInfo.price}</Text>
          </View>
          <View className='TopShareBox'>
            <View className='addressBox'>
              <View className='timeBox' style='margin-bottom: 8px'>
                <Image
                src={require('./../../../image/time.png')}
                style='width:15px;height:15px;margin-right: 6px' />
                <Text className='info'>营业时间: {goodsInfo.openTimeStart}-{goodsInfo.openTimeEnd}</Text>
              </View>
              <View className='timeBox' onClick={() => this.openMap()}>
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
          <View className='fuwu'>
            <View className='titleBox'>
              <Text className='title'>菜品详情</Text>
            </View>
            <Text>{goodsInfo.detail}</Text>
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

export default FoodInfo
