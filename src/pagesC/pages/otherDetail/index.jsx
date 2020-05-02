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
import Footer from './../../../components/foodFooter/index'
import api from './../../../utils/api'
import './index.less'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class OtherDetail extends Component {
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
    type: null,
    openShare: false,
  };

  config = {
    navigationBarTitleText: '美城美事365'
  }
  
  componentWillMount() {
    
  }
  componentDidMount() {
    let id = this.$router.params.id;
    let type = this.$router.params.type;
    this.setState({
      shopId: id,
      type,
    })
    this.getData(id);
    this.getChatList(id);
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
      console.log('iiiiiii', res)
      if(res.data.code == 200) {
        this.setState({
          goodsInfo: res.data.data
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
      console.log('JJJ', res)
      if(res.data.code == 200) {
        this.setState({
          chatList: res.data.data.list
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

  openMessage() {
    this.setState({
      openMessage: true,
      isOpenToast: false,
    })
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

  aa(item) {
    console.log('????')
    this.setState({
      openMessage: true,
      memberId: item.id
    })

  }

  publishMessage() {
    const { shopId, myMessage, memberId } = this.state;
    if(memberId == '') { /// 评论
      let obj = {
        productId: shopId,
        content: myMessage,
        anonymous: 0,
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
        anonymous: 0,
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

  shareHandleClose() {
    this.setState({
      openShare: false
    })
  }

  onShareAppMessage() {
    const { shopId, type } = this.state;
    return {
      title: '分享',
      path: `/pagesC/pages/otherDetail/index?id=${shopId}&type=${type}`,
      success: function (res) {
        console.log('成功', res)
      }
    }
  }

  shareClick() {
    this.setState({
      openShare: true
    })
  }

  shareFriend() {
    const { shopId } = this.state;
    this.setState({
      isOpenToast: true,
      toastText: '开始保存图片，请稍后~~'
    })
    api.post('/product/shareProd',{id: shopId}).then(res => {
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


  render () {
    const {
      goodsInfo,
      chatList,
      shopId,
      isOpenToast,
      openMessage,
      myMessage,
      type,
      openShare,
      toastText } = this.state;
    console.log('JJJJKKK', type)

    let url = `/pagesC/pages/otherDetail/index?id=${shopId}&type=${type}`
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
            {
              (type == 3 || type == 4) &&
              <View className='priceBox'>
                <Text>$</Text>
                <Text className='price'>{goodsInfo.price}</Text>
              </View>
            }
          </View>
          <View className='timeBox' style='justify-content: space-between;'>
            <View className='peopleInfo'>
              <Image className='pic' src={goodsInfo.icon} />
              <Text>{goodsInfo.nickname}</Text>
            </View>
            <Text className='timeInfo'>{goodsInfo.createTimeString}发布</Text>
          </View>
          <View className='timeBox bt'>
            {
              type != 5 ?
              <View className='left'>
                <AtIcon className='icon' value='phone' size='16' color='#666'></AtIcon>
                <Text className='info'>{goodsInfo.address}</Text>
              </View>
              :
              <View className='left'></View>
            }
            <View className='share' onClick={() => this.shareClick()}>
              <Image className='img' src={require('./../../../image/share.png')} />
              <Text className='text'>分享</Text>
            </View>
          </View>
          <View className='fuwu'>
            <View className='titleBox'>
            <Text className='title'>
              {type == 2 ? '生活详情' : type == 5 ? '部落详情' : '商品详情'}
            </Text>
            </View>
            <Text>{goodsInfo.detail}</Text>
          </View>
          {
            type != 5 &&
            <View className='fuwu'>
              <View className='titleBox'>
                <Text className='title'>特别提醒</Text>
              </View>
              <Text>{goodsInfo.note}</Text>
            </View>
          }
          {
            type != 5 &&
            <View className='fuwu'>
              <View className='titleBox'>
                <Text className='title'>类型</Text>
              </View>
              <Text>{goodsInfo.productType}</Text>
            </View>
          }
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
                            <Text className='name'>{item.memberNickName}</Text>
                            <View className='detailBox'>
                              <Text>{item.content}</Text>
                            </View>
                            <View className='huifuBox' onClick={() => this.aa(item)}>
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
                <View className='btnBox' onClick={() => this.publishMessage()}>
                  <Text>发布</Text>
                </View>
              </View>
            </View>
          </AtActionSheetItem>
        </AtActionSheet>

        <AtActionSheet isOpened={openShare} onClose={() => this.shareHandleClose()}>
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
      </View>
    )
  }
}

export default OtherDetail
