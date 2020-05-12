import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import {
// } from "taro-ui"
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class PublishInfo extends Component {
  config = {
    navigationBarTitleText: '美城美食365'
  }
  constructor(props){
    super(props);
    this.state = {
      typeList: [
        {title: '美食', img: require('./../../image/food.png'), key: 'food'},
        {title: '休闲', img: require('./../../image/xiuxian.png'), key: 'leisure'},
        {title: '生活', img: require('./../../image/shenghuo.png'), key: 'life'},
        {title: '二手', img: require('./../../image/old.png'), key: 'secondhand'},
        {title: '房源', img: require('./../../image/fangyuan.png'), key: 'housing'},
        {title: '部落', img: require('./../../image/buluo.png'), key: 'tribe'},
      ]
    };
  }
  componentWillMount() {
    
  }
  componentDidMount() {
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  chooseType(key) {
    if(Taro.getStorageSync('userInfo') != '') {
      switch(key) {
        case 'food':
          Taro.navigateTo({
            url: '/pagesA/pages/addFood/index',
          })
          break;
        case 'leisure':
          Taro.navigateTo({
            url: '/pagesA/pages/addLeisure/index',
          })
          break;
        case 'life':
          Taro.navigateTo({
            url: '/pagesA/pages/addLife/index',
          })
          break;
        case 'secondhand':
          Taro.navigateTo({
            url: '/pagesB/pages/secondhand/index',
          })
          break;
        case 'housing':
          Taro.navigateTo({
            url: '/pagesA/pages/addHome/index',
          })
          break;
        case 'tribe':
          Taro.navigateTo({
            url: '/pagesA/pages/addBuluo/index',
          })
          break;
      }
    } else {
      Taro.switchTab({
        url: `/pages/my/index`
      })
    }
  }

  render () {
    return (
      <View className='container'>
        <View className='content'>
          {
            this.state.typeList.map(item => {
              return (
                <View className='item' key={item.key} onClick={() => this.chooseType(item.key)}>
                  <View className='yuan'>
                    <Image src={item.img} className='img' />
                  </View>
                  <Text className='text'>{item.title}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default PublishInfo
