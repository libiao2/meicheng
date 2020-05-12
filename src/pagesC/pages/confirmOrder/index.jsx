import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, Input } from '@tarojs/components'
import {
  AtInputNumber,
  AtIcon,
  AtGrid,
  AtActionSheet,
  AtActionSheetItem,
  AtModal,
  AtModalContent,
} from "taro-ui"
import { connect } from '@tarojs/redux'
import './index.less'
import api from '../../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))


class ConfirmOrder extends Component {
  state = {
    dataInfo: {},
    takeaway: false,
    openPayType: false,
    isOpenCard: false,
    creditCardList: [],
    address: '',
    remark: '',
    telephone: '',
    orderType: 1, // 1 普通订单  2 拼团订单
    pingTuanId: '',  /// 拼团id，支付成功需要用
    groupNo: null,
    isShareFriend: false,
  };

  config = {
    navigationBarTitleText: '确认下单'
  }

  componentWillMount() {
    let parmars = this.$router.params;
    let data = JSON.parse(decodeURIComponent(parmars.data));
    let type = parmars.isPing;
    
    let pingId = '';
    let num = null;
    if(type == 2) {
      pingId = parmars.goodsId;
    }
    if(parmars.groupNo) {
      num = parmars.groupNo;
    }
    console.log('00000', data)
    this.setState({
      dataInfo: data,
      orderType: type,
      pingTuanId: pingId,
      groupNo: num
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
  }

  componentDidHide () { }

  connectMe() {
    Taro.navigateTo({
      url: '/pagesC/pages/myConnect/index'
    })
  }

  countChange(index1, index2, e) {
    const { dataInfo } = this.state;
    let myData = JSON.parse(JSON.stringify(dataInfo));
    myData.orderItemMap[index1].orderItems[index2].quantity = e;
    let allMoney = 0
    myData.orderItemMap.forEach((item,index) => {
      item.orderItems.forEach((item2,index2) => {
        allMoney += item2.quantity * item2.price;
      })
    })
    myData.totalFee = allMoney;
    myData.payFeeUSD = allMoney;
    this.setState({
      dataInfo: JSON.parse(JSON.stringify(myData))
    })
  }

  chooseWai(e) {
    this.setState({
      takeaway: e
    })
  }

  choosePayType() {
    this.setState({
      openPayType: true
    })
  }

  handleClose() {
    this.setState({
      openPayType: false
    })
  }

  closeCard() {
    this.setState({
      isOpenCard: false
    })
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

  openMap() {
    Taro.showToast({
      title: '正在打开地图！',
      icon: 'none',
      mask:true,
    });
    Taro.authorize({
      scope: 'scope.userLocation',
      success: (res) => {
        console.log('成功：', res)
        this.onGetLocation();//获取位置
      },
      fail: (res) => {
        console.log('失败：', res)
      },
    })
  }

  onGetLocation() {
    Taro.getLocation({
      success: (res) => {
        console.log('成功：', res)
        Taro.chooseLocation({
          success: (val) => {
            console.log('--------', val)
            this.setState({
              address: val.address,
              // longitude: val.longitude,
              // latitude: val.latitude,
            })
          }
        })
      },
      fail: (res) => {
        console.log('失败：', res)
      },
    })
  }

  remarkChange(e) {
    this.setState({
      remark: e.detail.value
    })
  }

  telephoneChange(e) {
    this.setState({
      telephone: e.detail.value
    })
  }

  clickGoPay(type) {
    Taro.showToast({
      title: '正在发起支付~~',
      icon: 'none',
      mask:true,
    });
    const {
      creditCardList,
      takeaway,
      address,
      telephone,
      remark,
      dataInfo,
      orderType,
      pingTuanId,
      groupNo
    } = this.state;

    let chooseIdIndex = 0;
    creditCardList.forEach((item,index) => {
      if(item.defaultSource) {
        chooseIdIndex = index;
      }
    })

    let myChooseGoods = dataInfo.orderItemMap;
    let goodsList = [];
    myChooseGoods.forEach((item,index) => {
      item.orderItems.forEach((item2,index2) => {
        goodsList.push({
          productItemId: item2.productItemId,
          quantity: item2.quantity,
          cartItemId: item2.cartItemId,
        })
      })
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

    let obj = {
      takeaway,
      address,
      telephone,
      remark,
      payWay: type,
      orderType: parseFloat(orderType),
      orderItemList: goodsList,
      groupNo
    }

    api.post('/order/createOrder',obj).then(res => {
      console.log('ppp', res)
      if(res.data.code == 200) {
        this.setState({
          isOpenCard: false
        })
        if(type == 1) {
          this.requestPayment(res.data.data, res1 => {
            console.log('??????', res1)
            if (res1.errMsg == "requestPayment:ok"){
              Taro.navigateTo({
                url: `/pagesC/pages/payEnd/index?orderType=${orderType}&pingId=${pingTuanId}`,
              })
            }
            if (res1.errMsg == "requestPayment:fail cancel"){
              console.log('支付失败！！！！');
            }
          })
        } else {
          Taro.navigateTo({
            url: `/pagesC/pages/payEnd/index?orderType=${orderType}&pingId=${pingTuanId}`,
          })
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
    const { otherPayNo } = this.state;
    this.setState({
      isShareFriend: false
    })
    
    return {
      title: '好友代付',
      path: `/pagesC/pages/otherPay/index?payNo=${otherPayNo}`,
      success: function (res) {
        console.log('成功', res)
        
      }
    }
    
  }

  openFriendPay() {
    const {
      creditCardList,
      takeaway,
      address,
      telephone,
      remark,
      dataInfo,
      orderType,
      pingTuanId,
      groupNo
    } = this.state;

    let chooseIdIndex = 0;
    creditCardList.forEach((item,index) => {
      if(item.defaultSource) {
        chooseIdIndex = index;
      }
    })

    let myChooseGoods = dataInfo.orderItemMap;
    let goodsList = [];
    myChooseGoods.forEach((item,index) => {
      item.orderItems.forEach((item2,index2) => {
        goodsList.push({
          productItemId: item2.productItemId,
          quantity: item2.quantity,
          cartItemId: item2.cartItemId,
        })
      })
    })

    let obj = {
      takeaway,
      address,
      telephone,
      remark,
      payWay: 3,
      orderType: parseFloat(orderType),
      orderItemList: goodsList,
      groupNo
    }
    api.post('/order/createOrder',obj).then(res => {
      console.log('ppp', res)
      if(res.data.code == 200) {
        this.setState({
          isOpenCard: false,
          openPayType: false,
          isShareFriend: true,
          otherPayNo: res.data.data.payNo
        })
      }
    })
    // this.setState({
    //   openPayType: false,
    //   isShareFriend: true
    // })
  }

  cancelFriendPay() {
    this.setState({
      isShareFriend: false
    })
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


  render () {
    const {
      dataInfo,
      takeaway,
      openPayType,
      isOpenCard,
      creditCardList,
      remark,
      telephone,
      isShareFriend,
      address } = this.state;
    return (
      <View className='container'>
        <View className='listBox'>
          {
            dataInfo.orderItemMap &&
            dataInfo.orderItemMap.length > 0 &&
            dataInfo.orderItemMap.map((item,index) => {
              return (
                <View className='oneBox'>
                  <View className='shopInfo'>
                    <Text>{item.name}</Text>
                  </View>
                  {
                    item.orderItems.map((item2,index2) => {
                      return (
                        <View className='goodsInfo'>
                          <Image className='goodsImg' src={item2.pic} />
                          <View className='goodsBox'>
                            <Text className='goodsName'>{item2.productItemName}</Text>
                            {/* <Text className='goodsDetail'>{item2.detail}</Text> */}
                            <View className='goodsCount'>
                              <Text className='price'>${item2.price}</Text>
                              <AtInputNumber
                                min={1}
                                step={1}
                                value={item2.quantity}
                                onChange={this.countChange.bind(this, index, index2)}
                              />
                            </View>
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
        <View className='infoList'>
          <View className='infoOne'>
            <Text className='left'>小计</Text>
            <Text className='pay'>${dataInfo.totalFee && (dataInfo.totalFee).toFixed(2)}</Text>
          </View>
          <View className='infoOne'>
            <Text className='left'>抵用券/折扣券</Text>
            <Text className='no'>暂无可用</Text>
          </View>
          <View className='infoOne'>
            <Text className='left'>实付金额</Text>
            <Text className='paySure'>${dataInfo.payFeeUSD && (dataInfo.payFeeUSD).toFixed(2)}
              <Text className='paySure' style='margin-left: 8px'>
                ￥{dataInfo.payFeeUSD && (dataInfo.payFeeUSD * 7.069).toFixed(2)}
              </Text>
            </Text>
          </View>
          <View className='infoOne'>
            <Text className='left'>外卖</Text>
            <View className='waimaiChoose'>
              <View className='chooseItem' onClick={() => this.chooseWai(true)}>
                <View className={`chooseBox ${takeaway && 'isChoose'}`}></View>
                <Text>是</Text>
              </View>
              <View className='chooseItem' onClick={() => this.chooseWai(false)}>
                <View className={`chooseBox ${!takeaway && 'isChoose'}`}></View>
                <Text>否</Text>
              </View>
            </View>
          </View>
          <View className='infoOne'>
            <Text className='left'>手机号</Text>
            <Input
              type='text'
              className='smallInput'
              placeholder='请输入手机号'
              value={telephone}
              onChange={this.telephoneChange.bind(this)}
            />
          </View>
          {
            takeaway &&
            <View className='infoOne' onClick={() => this.openMap()}>
              <Text className='left'>详细地址</Text>
              <Text className='address'>{address == '' ? '点击选择地址' : address}</Text>
            </View>
          }
          <View className='infoOne'>
            <Text className='left'>备注</Text>
            <Input
              type='text'
              className='smallInput'
              placeholder='备注'
              value={remark}
              onChange={this.remarkChange.bind(this)}
            />
          </View>
        </View>
        <View className='btn' onClick={() => this.choosePayType()}>
          <View className='btnBox'>
            <Text>确认下单</Text>
          </View>
        </View>

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
              <View className='oneBox' onClick={() => this.openFriendPay()}>
                <View className='payImgBox'>
                  <Image className='payImg' src={require('./../../../image/friend.png')} />
                  <Text>好友代付(外币)</Text>
                </View>
                <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
              </View>
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

        <AtModal isOpened={isShareFriend}>
          <AtModalContent>
            <View className='shareFriendBox'>
              <View className='topTitleBox'>
                <Text className='shareTitle'>确定让好友代付？</Text>
                <View className='cha' onClick={() => this.cancelFriendPay()}>x</View>
              </View>
              <View className='shareFriendBtnBox'>
                {/* <Button onClick={() => this.cancelFriendPay()} className='shareFriendBtn cancelBtn'>取消</Button>
                <View className='line'></View> */}
                <Button  openType='share' className='shareFriendBtn okBtn'>
                  确定
                </Button>
              </View>
            </View>
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}

export default ConfirmOrder
