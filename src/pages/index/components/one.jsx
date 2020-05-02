import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './one.less'

export default class One extends Component {

  goDetail(id) {
    const { type } = this.props;
    if(type == 1) {
      Taro.navigateTo({
        url: `/pagesA/pages/foodDetail/index?id=${id}`,
      })
    }
    if(type == 2) {
      Taro.navigateTo({
        url: `/pagesC/pages/leisureDetail/index?id=${id}`,
      })
    }
    
  }

  render () {
    const { item } = this.props;
    return (
      <View className='goodsItem' onClick={() => this.goDetail(item.id)}>
        <View className='goodsBox'>
          <Image className='goodsImg' src={item.pic} />
          <Text className='goodsName'>{item.name}</Text>
          {/* <Text className='goodsInfo'>{item.detail}</Text> */}
          <View className='priceBox'>
            <View className='box'>
              <Text className='newPrice'>${item.price}</Text>
              {/* <Text className='oldPrice'>$68</Text> */}
            </View>
            {/* <View className='priceBtn'>已减20元</View> */}
          </View>
          <Text className='countInfo'>半年售{item.sale}</Text>
        </View>
      </View>
    )
  }
}