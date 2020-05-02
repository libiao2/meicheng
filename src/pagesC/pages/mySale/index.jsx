import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtTabs, AtTabsPane
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


class MySale extends Component {
  state = {
    titleList: [
      {title: '全部卖出'},
      {title: '已验证'},
      {title: '未验证'},
    ],
    current: 0,
    orderStatus: 0, //0.全部 20.未验证 30.已验证
    orderList: [],
    pageNum: 1,
    pageSize: 10,
  };

  config = {
    navigationBarTitleText: '我卖出的',
    "enablePullDownRefresh": true,
    onReachBottomDistance:50
  }
  
  componentWillMount() {
  }
  componentDidMount() {
    this.getList()
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
    api.post('/order/listSellOrderPage', obj).then(res => {
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
      orderStatus: e == 0 ? 0 : e == 1 ? 30 : 20,
      orderList: [],
      pageNum: 1,
    }, () => this.getList())
  }

  goDetail(item) {
    Taro.navigateTo({
      url: `/pagesC/pages/orderDetail/index?id=${item.id}&mySale=1`,
    })
  }


  render () {
    const { titleList, current, orderList } = this.state;
    return (
      <View className='container'>
        <AtTabs current={current} tabList={titleList} onClick={this.handleClick.bind(this)}>
          {
            titleList.map((item,index) => {
              return (
                <AtTabsPane current={current} index={index} >
                  {
                    orderList.length > 0 ?
                    orderList.map((orderItem, itemIndx) => {
                      return (
                        <View className='orderBox' onClick={() => this.goDetail(orderItem)}>
                          <Text className='orderNo'>订单号: {orderItem.orderNo}</Text>
                          {
                            orderItem.orderItemList.map((infoItem, infoIndex) => {
                              return (
                                <View className='goodsInfo'>
                                  <Image className='goodsImg' src={infoItem.pic} />
                                  <View className='goodsDetail'>
                                    <View className='nameBox'>
                                      <Text>{infoItem.productItemName}</Text>
                                      <Text>${infoItem.groupOriginalPrice || infoItem.price}</Text>
                                    </View>
                                    <View className='countBox'>
                                      <Text>{orderItem.createTimeString}</Text>
                                      <Text>x{infoItem.quantity}</Text>
                                    </View>
                                    <View className='footerBox'>
                                      {
                                        orderItem.orderStatus == 30 &&
                                        <View className='box already'>
                                          <Text>已验证</Text>
                                        </View>
                                      }
                                      {
                                        orderItem.orderStatus == 20 &&
                                        <View className='box'>
                                          <Text>未验证</Text>
                                        </View>
                                      }
                                    </View>
                                  </View>
                                </View>
                              )
                            })
                          }
                        </View>
                      )
                    })
                    :
                    <View className='noData'>暂无更多数据~</View>
                  }
                </AtTabsPane>
              )
            })
          }
        </AtTabs>
      </View>
    )
  }
}

export default MySale
