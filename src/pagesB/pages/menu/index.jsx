import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import {
  AtIcon,
  AtToast
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../../actions/counter'
import api from './../../../utils/api'
import './index.less'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class Menu extends Component {
  state = {
    list: [],
    shopId: '',
    shopName: '',
    isOpenToast: false,
    toastText: '',
  };

  config = {
    navigationBarTitleText: '菜单'
  }
  
  componentWillMount() {
  }
  componentDidMount() {
    let params = this.$router.params;
    console.log('***((())))+++++', params)
    this.setState({
      list: JSON.parse(decodeURIComponent(params.list)),
      shopId: parseInt(params.shopId),
      shopName: params.shopName,
    })
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {
    
  }

  componentDidShow () { 
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

  addCar(item) {
    console.log('KKKKKKLLLLLL', item)
    const { shopId, shopName } = this.state;
    console.log('****(((()))))', shopId, shopName)
    let obj = {
      productId: shopId,
      productItemId: item.id,
      quantity: 1,
      price:item.price,
      productPic: item.pic,
      productName: shopName,
      productItemName: item.name,
    }
    api.post('/cart/add',obj).then(res => {
      console.log('aaaa', res)
      if(res.data.code == 200) {
        this.setState({
          isOpenToast: true,
          toastText: '成功添加购物车！'
        })
        this.getCarCount();
      }
    })
  }

  goDetail(item) {
    console.log('......',item)
    Taro.navigateTo({
      url: `/pagesA/pages/foodInfo/index?goodsId=${item.id}`,
    })
  }


  render () {
    const { list, toastText, isOpenToast } = this.state;
    return (
      <View className='container'>
        <View className='itemBox'>
          {
            list.map((item,index) => {
              return (
                <View className='item'>
                  <Image className='img' src={item.pic} onClick={() => this.goDetail(item)}/>
                  <View className='right'>
                    <View className='leftPart' onClick={() => this.goDetail(item)}>
                      <Text className='name'>{item.name}</Text>
                      <Text className='price'>${item.price}</Text>
                    </View>
                    <View className='iconBox' onClick={() => this.addCar(item)}>
                      <AtIcon
                        value='add-circle'
                        size='22'
                        color='rgb(36, 200, 178)'>
                      </AtIcon>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
        {
          list.length == 0 &&
          <View className='noData'>
            <Text>暂无数据~~</Text>
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

export default Menu
