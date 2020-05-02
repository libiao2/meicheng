import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtModal,
  AtModalContent
} from "taro-ui"
import { connect } from '@tarojs/redux'
import './index.less'
import api from '../../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))


class OtherPay extends Component {
  state = {
    isOpenCard: false,
    creditCardList: [],
    payNo: ''
  };

  config = {
    navigationBarTitleText: '支付'
  }

  componentWillMount() {
    let payNo = this.$router.params.payNo;
    this.setState({
      payNo
    })
  }
  componentDidMount() {
    this.creditCardPay()
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {

  }

  componentDidShow () {
  }

  componentDidHide () { }

  closeCard() {
    this.setState({
      isOpenCard: false
    })
  }

  addNewCard() {
    Taro.navigateTo({
      url: `/pagesC/pages/addCreditCard/index`,
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

  creditCardPay() {
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

  clickGoPay(type) {
    Taro.showToast({
      title: '正在发起支付~~',
      icon: 'none',
      mask:true,
    });
    const { payNo, creditCardList } = this.state;

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

    api.post('/pay/payment',{payNo}).then(res => {
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
          Taro.switchTab({
            url: '/pages/index/index'
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


  render () {
    const { isOpenCard, creditCardList } = this.state;
    return (
      <View className='container'>
        {/* <View className='title'>请选择支付方式</View>
        <View className='payType'>
          <View className='btn' onClick={() => this.clickGoPay(1)}>微信支付</View>
          <View className='btn' onClick={() => this.creditCardPay()}>信用卡支付</View>
        </View> */}

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
                  return <View onClick={() => this.clickChooseCard(index)} className={`oneCard ${item.defaultSource && 'isChooseCard'}`}>
                    <Text>卡号后四位</Text>
                    <Text style='color: #333'>({item.last4})</Text>
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

export default OtherPay
