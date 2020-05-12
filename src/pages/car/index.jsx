import Taro, { Component } from '@tarojs/taro'
import { View, Text, Checkbox, CheckboxGroup} from '@tarojs/components'
import {
  AtInputNumber,
  AtToast,
  AtSwipeAction,
  AtIcon
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../actions/counter'
import './index.less'
import { getGlobalData } from '../../utils/global_data';
import api from '../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class Car extends Component {
  state = {
    checkAll: false,
    dataList: [],
    payMoney: 0,
    buyCount: 0,
    isOpenToast: false,
    toastText: '',
  };

  config = {
    navigationBarTitleText: '购物车'
  }

  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {

  }

  componentDidShow () {
    if(Taro.getStorageSync('userInfo') != '') {
      this.getData();
      this.getCarCount()
    }
    
  }

  componentDidHide () { }

  getCarCount() {
    api.post('/cart/count',{}).then(res => {
      console.log('sssss', res)
      if(res.data.code == 200) {
        if(res.data.data != 0) {
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

  countChange(index1, index2, id, e) {
    const { dataList } = this.state;
    let list = JSON.parse(JSON.stringify(dataList));
    let obj = {
      id,
      quantity: e,
    }
    api.post('/cart/updateQuantity',obj).then(res => {
      if(res.data.code == 200) {
        list[index1].cartItemList[index2].quantity = e;
        this.setState({
          dataList: [...list],
          isOpenToast: true,
          toastText: '成功修改数量！'
        })
      }
    })

  }

  getData() {
    api.post('/cart/list',{}).then(res => {
      console.log('cccc', res)
      if(res.data.code == 200) {
        let list = res.data.data;
        for(let i = 0; i < list.length; i += 1) {
          list[i].checked = false;
          for(let a = 1; a < list[i].cartItemList.length; a += 1) {
            list[i].cartItemList[a].checked = false;
          }
        }
        this.setState({
          dataList: [...list]
        })
      }
    })
  }

  checkShopChange(index) {
    const { dataList } = this.state;
    let list = [...dataList];
    list[index].checked = !list[index].checked;
    if(list[index].checked) {
      list[index].cartItemList.forEach(item => {
        item.checked = true;
      })
    } else {
      list[index].cartItemList.forEach(item => {
        item.checked = false;
      })
    }
    let allMoney = 0;
    let chooseCount = 0;
    list.forEach(item => {
      item.cartItemList.forEach(val => {
        if(val.checked) {
          allMoney += val.price * val.quantity;
          chooseCount += 1;
        }
      })
    })

    this.setState({
      dataList: list,
      payMoney: allMoney,
      buyCount: chooseCount
    })
  }

  checkboxChange(index1, index2) {
    const { dataList } = this.state;
    let list = JSON.parse(JSON.stringify(dataList));
    list[index1].cartItemList[index2].checked = !list[index1].cartItemList[index2].checked;

    let allMoney = 0;
    let chooseCount = 0;
    list.forEach(item => {
      item.cartItemList.forEach(val => {
        if(val.checked) {
          allMoney += val.price * val.quantity;
          chooseCount += 1;
        }
      })
    })
    this.setState({
      dataList: [...list],
      payMoney: allMoney,
      buyCount: chooseCount
    })
  }
  checkAllChange() {
    const { checkAll, dataList } = this.state;
    let isTrue = checkAll;
    let list = JSON.parse(JSON.stringify(dataList));
    isTrue = !isTrue;
    if(isTrue) {
      for(let i = 0; i < list.length; i += 1) {
        list[i].checked = true;
        for(let a = 0; a < list[i].cartItemList.length; a += 1) {
          list[i].cartItemList[a].checked = true;
        }
      }
    } else {
      for(let i = 0; i < list.length; i += 1) {
        list[i].checked = false;
        for(let a = 0; a < list[i].cartItemList.length; a += 1) {
          list[i].cartItemList[a].checked = false;
        }
      }
    }
    let allMoney = 0;
    let chooseCount = 0;
    list.forEach(item => {
      item.cartItemList.forEach(val => {
        if(val.checked) {
          allMoney += val.price * val.quantity;
          chooseCount += 1;
        }
      })
    })
    this.setState({
      checkAll: isTrue,
      dataList: [...list],
      payMoney: allMoney,
      buyCount: chooseCount
    })
  }

  handleClick(index1, index2) {
    console.log('22222', index1, index2);
    const { dataList } = this.state;
    let obj = {
      ids: [dataList[index1].cartItemList[index2].id]
    }
    let list = JSON.parse(JSON.stringify(dataList));
    api.post('/cart/delete', obj).then(res => {
      console.log('cccc', res)
      if(res.data.code == 200) {
        list[index1].cartItemList.splice(index2, 1);

        let allMoney = 0;
        let chooseCount = 0;
        list.forEach((item,index) => {
          if(item.cartItemList.length == 0) {
            list.splice(index, 1);
          }
          item.cartItemList.forEach(val => {
            if(val.checked) {
              allMoney += val.price * val.quantity;
              chooseCount += 1;
            }
          })
        })
        this.setState({
          dataList: [...list],
          payMoney: allMoney,
          buyCount: chooseCount
        })
        Taro.showToast({
          title: '删除成功！',
          icon: 'none',
          mask:true,
        })
        this.getCarCount();
      }
    })
  }

  goLogin() {
    Taro.switchTab({
      url: `/pages/my/index`
    })
  }

  goPay() {
    const { buyCount, dataList } = this.state;
    if(buyCount == 0) {
      Taro.showToast({
        title: '请选择要买的商品！',
        icon: 'none',
        mask:true,
      })
    } else {
      let myList = [];
      let list = JSON.parse(JSON.stringify(dataList));
      list.forEach((item,index1) => {
        item.cartItemList.forEach((item2, index2) => {
          if(item2.checked) {
            myList.push({
              productItemId: item2.productItemId,
              quantity: item2.quantity,
              cartItemId: item2.id,
            })
          }
        })
      })
      
      let obj = {
        orderItemList: myList,
      }
      api.post('/order/confirmOrder', obj).then(res => {
        console.log(',,,', res.data.data)
        if(res.data.code == 200) {
          Taro.navigateTo({
            url: `/pagesC/pages/confirmOrder/index?data=${encodeURIComponent(JSON.stringify(res.data.data))}&isPing=1`,
          })
        }
      })
      
    }

  }


  render () {
    const { dataList, checkAll, payMoney, buyCount, isOpenToast, toastText } = this.state;
    return (
      <View className='container'>
        <View className='listBox'>
            {
              dataList.map((item,index1) => {
                return (
                  <View className='itemBox'>
                    <View className='topBox'>
                      <View
                        onClick={() => this.checkShopChange(index1)}
                        className='cicle'>
                          {
                            item.checked &&
                            <AtIcon value='check' size='14' color='rgb(36, 200, 178)'></AtIcon>
                          }
                      </View>
                      <Text>{item.name}</Text>
                    </View>
                    <View className='bottomList'>
                      {
                        item.cartItemList.map((item2,index2) => {
                          return (
                            <AtSwipeAction
                              onClick={() => this.handleClick(index1, index2)}
                              options={[
                                {
                                  text: '删除',
                                  style: {
                                    backgroundColor: '#FF4949'
                                  }
                                }
                              ]}
                            >
                              <View className='bottomBox'>
                                <View
                                  onClick={() => this.checkboxChange(index1,index2)}
                                  className='cicle'>
                                  {
                                    item2.checked &&
                                    <AtIcon value='check' size='14' color='rgb(36, 200, 178)'></AtIcon>
                                  }
                                </View>
                                <Image className='pic' src={item2.productPic} />
                                <View className='rightPart'>
                                  <Text className='title'>{item2.productItemName}</Text>
                                  <View className='rightPart'>
                                    <Text className='price'>${item2.price}</Text>
                                    <AtInputNumber
                                      min={1}
                                      step={1}
                                      value={item2.quantity}
                                      onChange={this.countChange.bind(this, index1, index2, item2.id)}
                                    />
                                  </View>
                                </View>
                              </View>
                            </AtSwipeAction>

                          )
                        })
                      }
                    </View>
                  </View>
                )
              })
            }
        </View>
        <View className='footerBox'>
          <View className='footer'>
            <View className='leftFooter'>
              <View
                onClick={() => this.checkAllChange()}
                className='cicle'>
                  {
                    checkAll &&
                    <AtIcon value='check' size='14' color='rgb(36, 200, 178)'></AtIcon>
                  }
              </View>
              <Text className='allText'>全选</Text>
              <View className='priceBox'>
              <Text className='allPrice'>合计: ${payMoney.toFixed(2)}</Text>
                <View className='yingPay'>
                  <Text>总额: ${payMoney.toFixed(2)}</Text>
                </View>
              </View>
            </View>
            <View className='btnBox' onClick={() => this.goPay()}>
              <Text>去结算({buyCount})</Text>
            </View>
          </View>
        </View>
        {
          dataList.length == 0 &&
          <View className='noData'>
            {
              Taro.getStorageSync('token') != '' ?
              <Text>暂无数据~~</Text>
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
        <AtToast
          isOpened={isOpenToast}
          text={toastText}>
        </AtToast>
      </View>
    )
  }
}

export default Car
