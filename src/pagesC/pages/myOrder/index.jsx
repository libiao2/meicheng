import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtTabs, AtTabsPane,
  AtActionSheet,
  AtActionSheetItem,
  AtModal,
  AtModalContent,
  AtIcon
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../../actions/counter'
import './index.less'
import api from '../../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class MyOrder extends Component {
  state = {
    titleList: [
      {title: '全部订单'},
      {title: '待使用'},
      {title: '已使用'},
      {title: '退款/售后'},
    ],
    current: 0,
    orderStatus: 0,
    pageNum: 1,
    pageSize: 10,
    orderList: [],
    openPayType: false,
    isOpenCard: false,
    creditCardList: [],
    payOrderInfo: {}, /// 需要支付的订单信息
  };

  config = {
    navigationBarTitleText: '我的订单',
    "enablePullDownRefresh": true,
    onReachBottomDistance:50
  }
  
  componentWillMount() {
  }
  componentDidMount() {
    if(Taro.getStorageSync('token') != '') {
      this.getList()
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

  onPullDownRefresh(){ /// 下拉事件
    console.log('lllllllllllll');
    this.setState({
      orderStatus: 0,
      pageNum: 1,
      pageSize: 10,
      orderList: [],
    }, () => {this.getList()});
  }

  onReachBottom(){ //上拉事件监听
    console.log('sssssssssssss');
    this.setState({
      pageNum: this.state.pageNum + 1,
    }, () => {this.getList()})
  }

  getList() {
    const { orderStatus, pageNum, pageSize, orderList } = this.state;
    let obj = {orderStatus, pageNum, pageSize};
    api.post('/order/listMyOrderPage', obj).then(res => {
      console.log('bbbbbnnn', res)
      if(res.data.code == 200) {
        let list = orderList;
        if(pageNum == 1) {
          this.setState({
            orderList: res.data.data.list
          })
        } else {
          this.setState({
            orderList: [...list, ...res.data.data.list]
          })
        }
        
      }
    })
  }

  handleClick(e) {
    console.log('mmmm',e);
    this.setState({
      current: e,
      orderStatus: e == 0 ? 0 : e == 1 ? 20 : e == 2 ? 30 : 40,
      orderList: [],
      pageNum: 1,
    }, () => this.getList())
  }

  getOrderStatus(status) {
    switch(status) {
      case 10:
        return '待支付';
      case 20:
        return '待使用';
      case 30:
        return '已使用';
      case 40:
        return '售后中';
      case 50:
        return '已全额退款';
    }
  }

  goPay(item) {
    console.log('vvvv', item);
    this.setState({
      payOrderInfo: item,
    },() => {
      if(item.payWay == 1) {
        this.clickGoPay(1);
      } else {
        this.creditCardPay();
      }
    })
    
  }

  refundClick(item) {
    console.log('ttt', item);
    Taro.navigateTo({
      url: `/pagesC/pages/refundStep/index?data=${encodeURIComponent(JSON.stringify(item))}`,
    })
  }

  handleClose() {

  }

  creditCardPay() {
    this.setState({
      openPayType: false
    })
    api.post('/pay/getCardList',{}).then(res => {
      console.log('mmm', res)
      if(res.data.code == 200) {
        if(res.data.data.length == 0) {
          Taro.navigateTo({
            url: `/pagesC/pages/addCreditCard/index`,
          })
        } else {

          this.setState({
            isOpenCard: true,
            creditCardList:res.data.data,
          })
        }
      }
    })
  }

  closeCard() {
    this.setState({
      isOpenCard: false
    })
  }

  clickChooseCard(index) {
    const { creditCardList } = this.state;
    let newList = creditCardList;
    newList.forEach(item => {
      item.defaultSource = false;
    })
    newList[index].defaultSource = true;
    this.setState({
      creditCardList: newList
    })
  }

  addNewCard() {
    Taro.navigateTo({
      url: `/pagesC/pages/addCreditCard/index`,
    })
  }

  goDetail(item) {
    Taro.navigateTo({
      url: `/pagesC/pages/orderDetail/index?id=${item.id}&mySale=2`,
    })
  }

  clickGoPay(type) {
    Taro.showToast({
      title: '正在发起支付~~',
      icon: 'none',
      mask:true,
    });
    const { payOrderInfo, creditCardList } = this.state;

    let chooseIdIndex = 0;
    creditCardList.forEach((item,index) => {
      if(item.defaultSource) {
        chooseIdIndex = index;
      }
    })

    if(type == 2) {
      api.post('/pay/defaultSource',{cardId: creditCardList[chooseIdIndex].cardId}).then(res => {
        console.log('ccc', res)
        if(res.data.code == 200) {

        } else {
          Taro.showToast({
            title: '保存默认卡号失败！',
            icon: 'none',
            mask:true,
          });
        }
      })
    }

    api.post('/pay/payment',{payNo: payOrderInfo.payNo}).then(res => {
      console.log('ppp', res)
      if(res.data.code == 200) {
        this.setState({
          isOpenCard: false
        })
        if(type == 1) {
          this.requestPayment(res.data.data, res1 => {
            console.log('??????', res1)
            if (res1.errMsg == "requestPayment:ok"){
              console.log('支付成功！！！！');
            }
            if (res1.errMsg == "requestPayment:fail cancel"){
              console.log('支付失败！！！！');
            }
          })
        } else {
          Taro.showToast({
            title: '信用卡支付成功！',
            icon: 'none',
            mask:true,
          });
        }
      }
    })

  }

  requestPayment(tempData, callback) {
    console.log('SSSSSSSS', tempData);
    let timeStamp = tempData.timeStamp,
      // 随机字符串
      nonceStr = tempData.nonceStr,
      // 统一下单
      pkg = tempData.package,
      // 签名
      paySign = tempData.paySign,
      // 订单号
      payNo = tempData.payNo,
      signType=tempData.signType;
    Taro.requestPayment({
      timeStamp: timeStamp,
      nonceStr: nonceStr,
      package: pkg,
      signType: signType,
      paySign: paySign,
      success: function (res) {
        console.log('>>>>>', res)
        res.payNo = payNo;
        // 支付成功跳转到支付成功页面
        if (res.errMsg == "requestPayment:ok") {
          callback(res);
        }
      },
      fail: function (res) {
        res.payNo = payNo;
        // 判断用户取消支付
        if (res.errMsg == "reques tPayment:fail cancel") {
          callback(res);
        } else {
          // 支付失败跳转到支付失败页面
          callback(res);
        }
      },
    });
  }

  onShareAppMessage() {
    const { payOrderInfo } = this.state;
    
    return {
      title: '好友代付',
      path: `/pagesC/pages/otherPay/index?payNo=${payOrderInfo.payNo}`,
      success: function (res) {
        console.log('成功', res)
      }
    }
  }

  deleteCard(item, index) {
    const { creditCardList } = this.state;
    let newArr = creditCardList;
    api.post('/pay/delCard',{cardId: item.cardId}).then(res => {
      console.log('ppp', res)
      if(res.data.code == 200) {
        newArr.splice(index, 1);
        Taro.showToast({
          title: '信用卡删除成功！',
          icon: 'none',
          mask:true,
        });
        this.setState({
          creditCardList: newArr
        })
      }
    })
  }

  goLogin() {
    Taro.switchTab({
      url: `/pages/my/index`
    })
  }


  render () {
    const {
      titleList,
      current,
      orderList,
      openPayType,
      creditCardList,
      isOpenCard } = this.state;
    return (
      <View className='container'>
        <AtTabs current={current} tabList={titleList} onClick={this.handleClick.bind(this)}>
          {
            titleList.map((item,index) => {
              return (
                <AtTabsPane current={current} index={index} >
                  {
                    orderList.length > 0 ?
                    orderList.map((item2, index2) => {
                      return (
                        <View className='orderBox'>
                          <Text className='name'>{item2.name}</Text>
                          {
                            item2.orderItemList.map((item3,index3) => {
                              return (
                                <View className='orderInfo' onClick={() => this.goDetail(item2)}>
                                  <View className='imgBox'>
                                    <Image className='img' src={item3.pic} />
                                    <View className='type'>
                                      <Text>{this.getOrderStatus(item2.orderStatus)}</Text>
                                    </View>
                                  </View>
                                  <View className='countInfo'>
                                    <Text>{item3.productItemName}</Text>
                                    <Text style='color: red'>${item3.price}</Text>
                                    <Text>x {item3.quantity}</Text>
                                    {/* <Text>有效期时间：2020-10-32</Text> */}
                                  </View>
                                </View>
                              )
                            })
                          }
                          <View className='bottomBtnBox'>
                            <View className='allPrice'>
                              总价: $<Text style='color: red'>{item2.orderFeeCNY}</Text>
                            </View>
                            <View className='box'>
                              <View className='oneBtn' onClick={() => this.goDetail(item2)}>更多</View>
                              {
                                item2.orderStatus == 10 &&
                                <View className='oneBtn nowPay' onClick={() => this.goPay(item2)}>立即支付</View>
                              }
                              {
                                item2.orderStatus == 40 &&
                                <View className='oneBtn nowPay' onClick={() => this.refundClick(item2)}>退款进度</View>
                              }
                              {
                                item2.orderStatus == 50 &&
                                <View className='oneBtn' onClick={() => this.refundClick(item2)}>退款进度</View>
                              }
                            </View>
                          </View>
                        </View>
                      )
                    })
                    :
                    <View className='noData'>
                      {
                        Taro.getStorageSync('token') != '' ?
                        <Text>暂无更多数据~~</Text>
                        :
                        <View>
                          <Text>暂未登录~~</Text>
                          <View className='bigBox' onClick={() => this.goLogin()}>
                            <View className='loginBtn'>登录</View>
                          </View>
                        </View>
                      }
                    </View>
                  }
                </AtTabsPane>
              )
            })
          }
        </AtTabs>

        <AtActionSheet isOpened={openPayType} onClose={() => this.handleClose()}>
          <AtActionSheetItem>
            <View className='payTitle'>
              <Text>请选择支付方式</Text>
            </View>
            <View className='payBox'>
              <View className='oneBox' onClick={() => this.clickGoPay(1)}>
                <View className='payImgBox'>
                  <Image className='payImg' src={require('./../../../image/xiny.png')} />
                  <Text>微信支付(人民币)</Text>
                </View>
                <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
              </View>
              <View className='oneBox' onClick={() => this.creditCardPay()}>
                <View className='payImgBox'>
                  <Image className='payImg' src={require('./../../../image/xiny.png')} />
                  <Text>信用卡支付(外币)</Text>
                </View>
                <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
              </View>
              <Button  openType='share' className='oneBox'>
                <View className='payImgBox'>
                  <Image className='payImg' src={require('./../../../image/friend.png')} />
                  <Text>好友代付(外币)</Text>
                </View>
                <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
              </Button>
            </View>
          </AtActionSheetItem>
        </AtActionSheet>

        <AtModal isOpened={isOpenCard}>
          <AtModalContent>
            <View className='titleBox'>
              <Text>选择信用卡支付</Text>
              <Text className='delet' onClick={() => this.closeCard()}>X</Text>
            </View>
            <View className='toastBox'>
              {
                creditCardList.length > 0 &&
                creditCardList.map((item,index) => {
                  return <View className={`oneCard ${item.defaultSource && 'isChooseCard'}`}>
                    <View className='leftCard' onClick={() => this.clickChooseCard(index)}>
                      <Text>卡号后四位</Text>
                      <Text style='color: #333'>({item.last4})</Text>
                    </View>
                    <View onClick={() => this.deleteCard(item, index)} className='deleteCard'>X</View>
                  </View>
                })
              }
              <View className='addPayCard' onClick={() => this.addNewCard()}>
                <Text>+添加新卡支付</Text>
              </View>
            </View>
            <View className='surePayBtn'>
              <View className='payBtn' onClick={() => this.clickGoPay(2)}>
                <Text>立即支付</Text>
              </View>
            </View>
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}

export default MyOrder
