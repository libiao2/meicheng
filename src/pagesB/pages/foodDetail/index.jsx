import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import {
  AtIcon,
  AtRate,
  AtToast,
  AtTextarea,
  AtActionSheet,
  AtActionSheetItem,
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../../actions/counter'
import Footer from '../../../components/foodFooter/index'
import api from '../../../utils/api'
import './index.less'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class FoodDetail extends Component {
  state = {
    goodsInfo: {},
    shopId: '',
    chatList: [],
    pageNum: 1,
    pageSize: 10,
    toastText: '',
    isOpenToast: false,
    openMessage: false,
    myMessage: '', /// 评论信息
    memberId: '', /// 评论时保留评论id
    carCount: null,
    dianCount: 0,
  };

  config = {
    navigationBarTitleText: '美城美事365'
  }

  componentWillMount() {

  }
  componentDidMount() {
    let id = this.$router.params.id;
    this.setState({
      shopId: id,
    })
    this.getData(id);
    this.getChatList(id);
    if(Taro.getStorageSync('token') != '') {
      this.getCarCount()
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

  getData(id) {
    api.post('/home/getProductInfo',{id}).then(res => {
      if(res.data.code == 200) {
        this.setState({
          goodsInfo: res.data.data,
          dianCount: res.data.data.upvote,
        })
      }
    })
  }

  getChatList(id) {
    const { pageNum, pageSize } = this.state;
    let obj = {
      productId: parseInt(id),
      pageNum,
      pageSize
    }
    api.post('/comment/commentListByProductId',obj).then(res => {
      if(res.data.code == 200) {
        this.setState({
          chatList: res.data.data.list
        })
      }
    })
  }

  goCai(list) {
    Taro.navigateTo({
      url: `/pagesB/pages/menu/index?list=${encodeURIComponent(JSON.stringify(list))}`
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

  getCarCount() {
    api.post('/cart/count',{}).then(res => {
      console.log('sssss', res)
      if(res.data.code == 200) {
        if(res.data.data != 0) {
          this.setState({
            carCount: res.data.data,
          });
          Taro.setTabBarBadge({
            index: 2,
            text: `${res.data.data}`
          })
        } else {
          Taro.removeTabBarBadge({
            index: 2,
          });
        }
      }
    })
  }

  addCard(item) {
    console.log('HHHHH', item)
    const { shopId, goodsInfo } = this.state;
    let obj = {
      productId: shopId,
      productItemId: item.id,
      quantity: 1,
      price:item.price,
      productPic: item.pic,
      productName: goodsInfo.name,
      productItemName: item.name,
    }
    if(Taro.getStorageSync('token') != '') {
      api.post('/cart/add',obj).then(res => {
        if(res.data.code == 200) {
          this.setState({
            isOpenToast: true,
            toastText: '成功添加购物车！'
          })
          this.getCarCount()
        }
      })
    } else {
      Taro.switchTab({
        url: `/pages/my/index`
      })
    }
  }

  goTuan(id) {
    Taro.navigateTo({
      url: `/pagesA/pages/foodTuan/index?goodsId=${id}`,
    })
  }

  openMessage() {
    if(Taro.getStorageSync('token') != '') {
      this.setState({
        openMessage: true,
        isOpenToast: false,
      })
    } else {
      Taro.switchTab({
        url: `/pages/my/index`
      })
    }
    
  }

  handleClose() {
    this.setState({
      openMessage: false
    })
  }

  messageChange(e) {
    this.setState({
      myMessage: e
    })
  }

  huifuClick(item) {
    if(Taro.getStorageSync('userInfo') != '') {
      this.setState({
        openMessage: true,
        memberId: item.id
      })
    } else {
      Taro.switchTab({
        url: `/pages/my/index`
      })
    }

  }

  tujianDetail(item) {
    Taro.navigateTo({
      url: `/pagesA/pages/foodInfo/index?goodsId=${item.id}`,
    })
  }

  publishMessage(type) {
    const { shopId, myMessage, memberId } = this.state;
    if(memberId == '') { /// 评论
      let obj = {
        productId: shopId,
        content: myMessage,
        anonymous: type,
      }
      api.post('/comment/create',obj).then(res => {
        console.log('mmmmm', res)
        if(res.data.code == 200) {
          this.setState({
            isOpenToast: true,
            toastText: '评论成功！',
            openMessage: false,
            pageNum: 1,
            pageSize: 10,
          }, () => {this.getChatList(shopId)})
        }
      })
    } else {
      let obj = {
        commentId: memberId,
        content: myMessage,
        anonymous: type,
      }

      api.post('/comment/replay',obj).then(res => {
        console.log('hhhhh', res)
        if(res.data.code == 200) {
          this.setState({
            isOpenToast: true,
            toastText: '评论成功！',
            openMessage: false,
            pageNum: 1,
            pageSize: 10,
            memberId: '',
          }, () => {this.getChatList(shopId)})
        }
      })
    }


  }

  onShareAppMessage() {
    return {
      title: '美城美事365',
      path: `/pagesA/foodDetail/index?id=${shopId}`,
      success: function (res) {
        console.log('成功', res)
      }
    }
  }

  openMap() {
    const { goodsInfo } = this.state;
    ////使用微信内置地图查看标记点位置，并进行导航
    Taro.openLocation({
      latitude: parseInt(goodsInfo.latitude),//要去的纬度-地址
      longitude: parseInt(goodsInfo.longitude),//要去的经度-地址
    })
  }

  dianCountChange() {
    const {dianCount} = this.state;
    let val = dianCount;
    val +=1;
    this.setState({
      dianCount: val
    })
  }


  render () {
    const {
      goodsInfo,
      chatList,
      shopId,
      isOpenToast,
      openMessage,
      myMessage,
      dianCount,
      carCount,
      toastText } = this.state;
    let hotL = []
    if(goodsInfo.hotList) {
      hotL = goodsInfo.hotList.length > 3 ?
      [goodsInfo.hotList[0], goodsInfo.hotList[1],goodsInfo.hotList[2]] :
      goodsInfo.hotList;
    }

    let url = `/pagesA/foodDetail/index?id=${shopId}`
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
          <View className='timeBox'>
            <Image
              src={require('./../../../image/time.png')}
              style='width:15px;height:15px;margin-right: 6px;' />
            <Text className='info'>营业时间: {goodsInfo.openTimeStart}-{goodsInfo.openTimeEnd}</Text>
          </View>
          <View className='timeBox' onClick={() => this.openMap()}>
            <Image
              src={require('./../../../image/dingwei.png')}
              style='width:15px;height:15px;margin-right: 6px' />
            <Text className='info'>{goodsInfo.address}</Text>
          </View>
          {
            goodsInfo.groupList && goodsInfo.groupList.length > 0 &&
            <View className='youhui'>
              <View className='titleBox'>
                <Text className='title'>优惠</Text>
              </View>
              <View className='youhuiItmeBox'>
                {
                  goodsInfo.groupList && goodsInfo.groupList.length > 0 &&
                  goodsInfo.groupList.map((item,index) => {
                    return (
                      <View className='itemBox' onClick={() => this.goTuan(item.id)}>
                        <Image className='img' src={item.pic} />
                        <View className='content'>
                          <Text className='name'>{item.name}</Text>
                          <Text className='detail'>{item.detail}</Text>
                          <View className='priceBox'>
                            <Text className='nowTitle'>现价:</Text>
                            <Text className='danw'>$</Text>
                            <Text className='nowPrice'>{item.groupPrice}</Text>
                            <View className='oldBox'>
                              <Text>原价:</Text>
                              <Text className='price'>${item.price}</Text>
                            </View>
                          </View>
                        </View>
                        <View className='btn'>团</View>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          }
          {
            hotL && hotL.length > 0 &&
            <View className='tuijian'>
              <View className='titleBox' onClick={() => this.goCai(goodsInfo.hotList)}>
                <Text className='title'>推荐菜</Text>
                <Text className='readMore'>查看更多</Text>
              </View>
              <View className='tuijianItemBox'>
                {
                  hotL.map((item,index) => {
                    return (
                      <View className='item'>
                        <Image className='img' src={item.pic} onClick={() => this.tujianDetail(item)} />
                        <View className='info'>
                          <View className='smallBox' onClick={() => this.tujianDetail(item)}>
                            <Text className='name'>{item.name}</Text>
                            <Text className='price'>${item.price}</Text>
                          </View>
                          <View onClick={() => this.addCard(item)} className='addBox'>
                            <AtIcon
                              value='add-circle'
                              size='16' color='rgb(36, 200, 178)'>
                            </AtIcon>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          }
          <View className='fuwu'>
            <View className='titleBox'>
              <Text className='title'>服务支持</Text>
            </View>
            <Text>{goodsInfo.serviceSupport}</Text>
          </View>
          <View className='pingjia'>
            <View className='titleBox'>
              <Text className='title'>评价</Text>
              <View className='pinglunBox' onClick={() => this.openMessage()}>
                <Text className='pinglun'>我要评论</Text>
                <AtIcon className='pinglunIcon' value='message' size='15' color='#999'></AtIcon>
              </View>
            </View>
            {
              chatList.length > 0 ?
              <View className='pinjiaList'>
                {
                  chatList.map((item, index) => {
                    return (
                      <View className='bigBxo'>
                        <View className='pinglunItem'>
                          <Image className='img' src={item.memberIcon} />
                          <View className='right'>
                            <Text className='name'>{item.memberNickName }</Text>
                            <View className='detailBox'>
                              <Text>{item.content}</Text>
                            </View>
                            <View className='huifuBox' onClick={() => this.huifuClick(item)}>
                              <Text>{item.createTimeString}</Text>
                              <View className='huifu'>
                                <Text>回复</Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        {
                          item.commentReplayList.map(item2 => {
                            return (
                              <View className='othersPinglun'>
                                <Image className='otherImg' src={item2.memberIcon} />
                                <View className='otherDetail'>
                                  <Text className='otherName'>{item2.memberNickName}</Text>
                                  <Text>{item2.content}</Text>
                                </View>
                              </View>
                            )
                          })
                        }
                      </View>
                    )
                  })
                }
              </View>
              :
              <View className='noPinglun'>
                <Text>暂无评论~~</Text>
              </View>
            }
          </View>
        </View>
        <Footer
          shopId={this.state.shopId}
          shopName={goodsInfo.name}
          url={url}
          carCount={carCount}
          dianCount={dianCount}
          changeDian={this.dianCountChange}
          isDian={goodsInfo.upvoteIs}
          list={goodsInfo.commonList} />
        <AtToast
          isOpened={isOpenToast}
          text={toastText}>
        </AtToast>
        <AtActionSheet isOpened={openMessage} onClose={() => this.handleClose()}>
          <AtActionSheetItem>
            <View className='messageToastBox'>
              <View className='title'>
                <Text>发表评论</Text>
              </View>
              <AtTextarea
                className='text'
                count={false}
                value={myMessage}
                onChange={this.messageChange.bind(this)}
              />
              <View className='btn'>
                <View className='btnBox' onClick={() => this.publishMessage(1)}>
                  <Text>匿名发布</Text>
                </View>
                <View className='btnBox' onClick={() => this.publishMessage(0)}>
                  <Text>发布</Text>
                </View>
              </View>
            </View>
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}

export default FoodDetail
