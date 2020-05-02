import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtTextarea
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


class OrderRefund extends Component {
  state = {
    reasonList: [
      {
        title: '计划有变，没时间消费',
        isChecked: false,
      },
      {
        title: '误以为是外卖',
        isChecked: false,
      },
      {
        title: '用现金/刷卡/微信/支付宝支付了团购价',
        isChecked: false,
      },
      {
        title: '店里的活动更优惠',
        isChecked: false,
      },
      {
        title: '预约不上',
        isChecked: false,
      },
      {
        title: '商家营业但不接待',
        isChecked: false,
      },
      {
        title: '后悔了，不想买了',
        isChecked: false,
      },
    ],
    reason: '',
    reasonIndex: null,
    myReason: '',
    orderDetail: {}
  };

  config = {
    navigationBarTitleText: '退款'
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

  chooseReason(index) {
    const { reasonList } = this.state;
    let list = reasonList;
    list.forEach(item => {
      item.isChecked = false;
    })
    list[index].isChecked = true;
    this.setState({
      reasonList: list,
      reason: reasonList[index].title,
      reasonIndex: index
    })
  }

  reasonChange(e){
    this.setState({
      myReason: e
    })
  }

  refundClick() {
    const { myReason, reason, orderDetail } = this.state;
    let obj = {
      id: orderDetail.id,
      refundDesc: myReason == '' ? reason : myReason,
    }
    api.post('/order/applyRefund', obj).then(res => {
      console.log('ccc', res)
      if(res.data.code == 200) {
        Taro.showToast({
          title: '已成功提交退款申请！',
          icon: 'none',
          mask:true,
        });
        Taro.navigateBack({
          delta: 2
        })
      }
    })
  }


  render () {
    const { reasonList,myReason, orderDetail } = this.state;
    return (
      <View className='container'>
        <View className='titleBox'>订单号</View>
        <View className='orderNo'>{orderDetail.orderNo}</View>
        <View className='titleBox'>退款内容</View>
        <View className='money'>现金：<Text style='color: red'>20元</Text></View>
        <View className='titleBox'>退款原因(至少选一项)</View>
        <View className='listBox'>
          {
            reasonList.map((item, index) => {
              return (
                <View className='itemBox' onClick={() => this.chooseReason(index)}>
                  <Text>{item.title}</Text>
                  <View className={`checkBox ${item.isChecked && 'isChoos'}`}></View>
                </View>
              )
            })
          }
          
        </View>
        <AtTextarea
          className='text'
          count={false}
          value={myReason}
          onChange={this.reasonChange.bind(this)}
        />
        <View className='btnBox'>
          <View className='btn' onClick={() => this.refundClick()}>申请退款</View>
        </View>
      </View>
    )
  }
}

export default OrderRefund
