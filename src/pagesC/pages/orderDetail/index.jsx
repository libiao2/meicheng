import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtIcon,
  AtGrid
} from "taro-ui"
import { connect } from '@tarojs/redux'
import './index.less'
import api from '../../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))


class OrderDetail extends Component {
  state = {
    orderDetail: {},
    id: '',
    goodsType: '', /// 买的还是卖的
  };

  config = {
    navigationBarTitleText: '订单详情'
  }

  componentWillMount() {
    let id = this.$router.params.id;
    let goodsType = this.$router.params.mySale;
    console.log('MMMMMMMMMMM', id)
    this.getInfo(id);
    this.setState({
      id,
      goodsType
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

  getInfo(id) {
    api.post('/order/orderDetail',{id}).then(res => {
      console.log('gggggg', res)
      if(res.data.code == 200) {
        this.setState({
          orderDetail: res.data.data
        })
      }
    })
  }

  goRefund() {
    const { orderDetail } = this.state;
    Taro.navigateTo({
      url: `/pagesC/pages/orderRefund/index?data=${encodeURIComponent(JSON.stringify(orderDetail))}`,
    })
  }

  callShop() {
    const { orderDetail } = this.state;
    Taro.makePhoneCall({
      phoneNumber: orderDetail.telephoneMall,
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  }

  seeImg() {
    const { orderDetail } = this.state;
    Taro.previewImage({
      current: orderDetail.qrcode, // 当前显示图片的http链接
      urls: [orderDetail.qrcode] // 需要预览的图片http链接列表
    })
  }


  render () {
    const { orderDetail, goodsType } = this.state;
    return (
      <View className='container'>
        <View className='erweiImgBox'>
          <Image onClick={() => this.seeImg()} className='erweiImg' src={orderDetail.qrcode} />
        </View>
        <View className='fuwuBox'>
          <View className='shopName'>
            <Image className='icon' src={require('./../../../image/quanIcon.png')} />
            <Text>美城美事365券</Text>
          </View>
          {
            orderDetail.orderStatus == 20 && goodsType == 2 &&
            <View className='tuikuan' onClick={() => this.goRefund()}>申请退款</View>
          }
        </View>
        <View className='orderNoBox'>
          <Text>订单号</Text>
          <Text>{orderDetail.orderNo}</Text>
        </View>

        <View className='goodsListInfo'>
          <View className='titleName'>
            <Image className='icon' src={require('./../../../image/buyCar.png')} />
            <Text>{orderDetail.name}</Text>
          </View>
          {
            orderDetail.orderItemList.map((item,index) => {
              return (
                <View className='goodsInfoBox'>
                  <Image className='goodsImg' src={item.pic} />
                  <View className='goodsDetail'>
                    <View className='countInfo'>
                      <Text>{item.productItemName}</Text>
                      <Text>x{item.quantity}</Text>
                    </View>
                    <View className='detail'>${item.price}</View>
                  </View>
                </View>
              )
            })
          }
          <View className='connectBox'>
            <View className='left'>
              <View className='smallBox phone' onClick={() => this.callShop()}>
                <Image className='icon' src={require('./../../../image/phone.png')} />
                <Text>商家电话</Text>
              </View>
              <View className='smallBox'>
                <Image className='icon' src={require('./../../../image/dingwei.png')} />
                <Text className='address'>{orderDetail.addressMall}</Text>
              </View>
            </View>
        <View className='needPay'>实付: $<Text className='money'>{orderDetail.orderFee}</Text></View>
          </View>
        </View>

        <View className='orderIndoBox'>
          <View className='title'>订单信息</View>
          <View className='listBox'>
            <View className='oneBox'>
              <Text>外卖</Text>
              <View className='isNoBox'>
                <View className='oneChooseBox'>
                  <View className={`cicle ${orderDetail.takeaway && 'ischoose'}`}></View>
                  <Text>是</Text>
                </View>
                <View className='oneChooseBox'>
                  <View className={`cicle ${!orderDetail.takeaway && 'ischoose'}`}></View>
                  <Text>否</Text>
                </View>
              </View>
            </View>
            <View className='oneBox'>
              <Text>支付方式</Text>
              <Text className='right'>
                {orderDetail.payWay == 1 ? '微信支付' : orderDetail.payWay == 2 ? '信用卡支付' : '他人代付'}
              </Text>
            </View>
            <View className='oneBox'>
              <Text>下单时间</Text>
              <Text className='right'>{orderDetail.createTimeString}</Text>
            </View>
            <View className='oneBox'>
              <Text>手机</Text>
              <Text className='right'>{orderDetail.telephone}</Text>
            </View>
            {
              orderDetail.takeaway &&
              <View className='oneBox'>
                <Text>地址</Text>
                <Text className='right'>{orderDetail.address}</Text>
              </View>
            }
            <View className='oneBox'>
              <Text>备注</Text>
              <Text className='right'>{orderDetail.remark}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default OrderDetail
