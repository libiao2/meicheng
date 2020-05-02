import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtActionSheet,
  AtActionSheetItem
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat, asyncAdd } from '../../../actions/counter'
import './index.less'
import api from '../../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class GroupBuyingDetail extends Component {
  state = {
    dataList: [],
    pageNum: 1,
    pageSize: 10,
    openShare: false,
    shareItem: {}
  };

  config = {
    navigationBarTitleText: '拼团详情',
    "enablePullDownRefresh": true,
    onReachBottomDistance:50
  }

  componentWillMount() {
  }
  componentDidMount() {
    this.getData()
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidShow () {
  }

  componentDidHide () { }

  onPullDownRefresh(){ /// 下拉事件
    this.setState({
      pageNum: 1,
      pageSize: 10,
      dataList: [],
    }, () => {this.getData()});
  }

  onReachBottom(){ //上拉事件监听
    this.setState({
      pageNum: this.state.pageNum + 1,
    }, () => {this.getData()})
  }

  getData() {
    const { pageNum, pageSize, dataList } = this.state;
    let obj = {pageNum, pageSize};
    api.post('/order/listGroupOrderPage', obj).then(res => {
      console.log('mmm', res)
      if(res.data.code == 200) {
        let list = dataList;
        if(pageNum == 1) {
          this.setState({
            dataList: res.data.data.list
          })
        } else {
          this.setState({
            dataList: [...list, ...res.data.data.list]
          })
        }
      }
    })
  }

  handleClose() {
    this.setState({
      openShare: false
    })
  }

  shareOther(item) {
    console.log('000000', item)
    this.setState({
      openShare: true,
      shareItem: item
    })
  }

  onShareAppMessage() {
    
    const { shareItem } = this.state;
    console.log('nnnmmm', shareItem)
    return {
      title: '分享',
      path: `/pagesA/pages/foodTuan/index?goodsId=${shareItem.productItemId}`,
      success: function (res) {
        console.log('成功', res)
      }
    }
  }

  shareFriend() {
    const { shareItem } = this.state;
    this.setState({
      isOpenToast: true,
      toastText: '开始保存图片，请稍后~~'
    })
    api.post('/product/shareProdItem',{id: shareItem.id}).then(res => {
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
    const { dataList, openShare } = this.state;
    return (
      <View className='container'>
        {
          dataList.length > 0 ?
          dataList.map((item,index) =>{
            return (
              <View className='itemBox'>
                <View className='titleBox'>
                  <View className='title'>
                    <Image className='shopIcon' src={require('./../../../image/shop.jpg')} />
                    <View>{item.name}</View>
                  </View>
                  <View className='needP'>待分享，差{item.chaNum}人</View>
                </View>
                {
                  item.orderItemList.map((item2,index2) => {
                    return (
                      <View className='listBox'>
                        <View className='orderInfoBox'>
                          <Image className='goodsImg' src={item2.pic} />
                          <View className='rightInfo'>
                            <View className='nameBox'>
                              <Text className='name'>{item2.productItemName}</Text>
                              <Text>x{item2.quantity}</Text>
                            </View>
                            <View className='priceBox'>
                              <View className='moneyBox'>
                                <Text className='now'>现价:${item2.price}</Text>
                                <View className='old'>原价:<Text className='oldP'>${item2.groupOriginalPrice}</Text></View>
                              </View>
                              <View className='btn yao' onClick={() => this.shareOther(item2)}>邀请拼团</View>
                            </View>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
                <View className='footerBox'>
                  <View className='needPay'>实付：${item.orderFee}</View>
                  {/* <View className='btnList'>
                    <View className='btn'>取消订单</View>
                    <View className='btn yao' onClick={() => this.shareOther(item)}>邀请拼团</View>
                  </View> */}
                </View>
              </View>
            )
          })
          :
          <View className='noData'>暂无更多数据~</View>
        }
        <AtActionSheet isOpened={openShare} onClose={() => this.handleClose()}>
          <AtActionSheetItem>
            <View className='shareTitle'>
              <Text>邀请好友拼团</Text>
            </View>
            <View className='shareBox'>
              <Button className='shareItem' openType='share'>
                <View className='wechatBox'>
                  <Image
                    src={require('./../../../image/wechatP.png')}
                    className='wechatIconImg' />
                  <Text>微信好友</Text>
                </View>
              </Button>
              {/* <Button className='shareItem' onClick={() => this.shareFriend()}>
                <View className='wechatBox'>
                  <Image
                    src={require('./../../../image/wechatP.png')}
                    className='wechatIconImg' />
                  <Text>朋友圈</Text>
                </View>
              </Button> */}
            </View>
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}

export default GroupBuyingDetail
