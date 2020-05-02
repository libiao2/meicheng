import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import {
  AtIcon,
  AtGrid
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


class MyPublish extends Component {
  state = {
    dataList: [],
  };

  config = {
    navigationBarTitleText: '我的发布'
  }
  
  componentWillMount() {
  }
  componentDidMount() {
    this.getData()
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {
    
  }

  componentDidShow () { 
  }

  componentDidHide () { }

  getData() {
    api.post('/product/publishList',{}).then(res => {
      console.log('mmm', res)
      if(res.data.code == 200) {
        this.setState({
          dataList: res.data.data
        })
      }
    })
  }

  goChange(item) {
    console.log('iii', item);
    switch(item.categoryId) {
      case 1:
        Taro.navigateTo({
          url: `/pagesD/pages/changeAddFood/index?id=${item.id}`
        })
        break;
      case 2:
        Taro.navigateTo({
          url: `/pagesD/pages/changeAddLeisure/index?id=${item.id}`
        })
        break;
      case 3:
        Taro.navigateTo({
          url: `/pagesD/pages/changeAddLife/index?id=${item.id}`
        })
        break;
      case 4:
        Taro.navigateTo({
          url: `/pagesD/pages/changeSecondhand/index?id=${item.id}`
        })
        break;
      case 5:
        Taro.navigateTo({
          url: `/pagesD/pages/changeAddHome/index?id=${item.id}`
        })
        break;
      case 6:
        Taro.navigateTo({
          url: `/pagesD/pages/changeAddbuluo/index?id=${item.id}`
        })
        break;
    }
  }


  render () {
    const { dataList } = this.state;
    return (
      <View className='container'>
        <View className='list'>
          {
            dataList.map((item,index) => {
              return (
                <View className='itmeBox'>
                  <View className='nameInfo'>
                    <Text className='name'>{item.name}</Text>
                    {
                      item.price ?
                      <Text className='price'>${item.price}</Text>
                      :
                      <Text className='price'></Text>
                    }
                  </View>
                  <View className='bottomBox'>
                    {
                      item.picList.length > 0 &&
                      <View
                        style={{ width: (260 * item.picList.length) + 'rpx'}}
                        className='box' >
                        {
                          item.picList.map(oneItem => {
                            return <Image className='img' src={oneItem} />
                          })
                        }
                      </View>
                    }
                  </View>
                  <View className='writeBox'>
                    <Text className='time'>{item.createTimeString}发送</Text>
                    <View className='btnBox' onClick={() => this.goChange(item)}>
                      <Text className='btn'>编辑</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
        {
          dataList.length == 0 &&
          <View className='noPinglun'>
            <Text>暂无数据~~</Text>
          </View>
        }
      </View>
    )
  }
}

export default MyPublish
