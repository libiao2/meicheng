import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtIcon,
  AtGrid
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


class RefundStep extends Component {
  state = {
    orderDetail: {}
  };

  config = {
    navigationBarTitleText: '退款进度'
  }

  componentWillMount() {
    let params = this.$router.params;
    this.setState({
      orderDetail: JSON.parse(decodeURIComponent(params.data))
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

  render () {
    const { orderDetail } = this.state;
    return (
      <View className='container'>
        <View className='topBox'>美城美事处理完成，退款入账中</View>
        <View className='infoBox'>
          <View className='itemBox'>
            <Text className='left'>退款金额</Text>
            <Text>${orderDetail.totalFee}</Text>
          </View>
          <View className='itemBox'>
            <Text className='left'>退款方式</Text>
            <Text>{orderDetail.payWay == 1 ? '微信零钱' : orderDetail.payWay == 2 ? '信用卡' : '他人账户'}</Text>
          </View>
          <View className='itemBox'>
            <Text className='left'>到账时间</Text>
            <Text>3个工作日内</Text>
          </View>
        </View>
        <View className='step'>
          <View className='title'>退款进度</View>
          <View className='ys-list'>
            <View className='des-mes first'>
              <View className='list-dot'>
                <View className='dot isNow' />
              </View>
              <Text className=''>退款申请已提交</Text>
              <Text>您的退款申请已成功提交！</Text>
            </View>
          </View>

          <View className='ys-list'>
            <View className={`des-mes ${orderDetail.orderStatus == 50 && 'first'}`}>
              <View className='list-dot'>
                <View className={`dot isNow`} />
              </View>
              <Text className={`${orderDetail.orderStatus == 40 && 'isNowText'}`}>美城美事365处理完毕，退款入账中</Text>
              <View>
                您的退款申请已受理，预计<Text>3个工作日内</Text>，退回至
                <Text>{orderDetail.payWay == 1 ? '微信零钱' : orderDetail.payWay == 2 ? '信用卡' : '他人账户'}</Text>
              </View>
            </View>
          </View>

          <View className={`ys-list ${orderDetail.orderStatus == 40 && 'no'}`}>
            <View className={`des-mes ${orderDetail.orderStatus == 50 && 'first'}`}>
              <View className='list-dot'>
                <View className={`dot ${orderDetail.orderStatus == 50 && 'isNow'}`} />
              </View>
              <Text className={`${orderDetail.orderStatus == 50 && 'isNowText'}`}>退款成功</Text>
              {
                orderDetail.payWay == 1 ?
                <Text className=''>已将退款入账至您微信零钱账户中，您可以打开微信，依次点击我的->钱包->支付中心->账单核实，如有疑问请拨打客服95017查询</Text>
                :
                orderDetail.payWay == 2 ?
                <Text>已将退款入账至您信用卡账户中</Text>
                :
                <Text>已将退款入账至您好友账户中</Text>
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default RefundStep
