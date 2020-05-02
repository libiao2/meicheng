import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import {
  AtCountdown,
  AtGrid
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../../actions/counter'
import api from './../../../utils/api'
import './index.less'
// import Time from './components/index';

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class MoreFavorable extends Component {
  state = {
    dataList: [],
    num: '',
  };

  config = {
    navigationBarTitleText: '美城美食365'
  }
  
  componentWillMount() {
  }
  componentDidMount() {
    this.getData();
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {
    
  }

  componentDidShow () {
  }

  componentDidHide () {

  }

  getData() {
    api.post('/home/groupList', {}).then(res => {
      console.log('tttt', res)
      if(res.data.code == 200) {
        this.setState({
          dataList: res.data.data
        })
      }
    })
  }

  getSec(time1,time2,index) {
    let start = new Date(time1);
    let staerSec = start.getTime()/1000;
    let end = new Date(time2);
    let endSec = end.getTime()/1000;
    let myTime = parseFloat(endSec - staerSec);
    // this.setState({
    //   num: index
    // })
    return myTime;
    
  }

  goDetail(item) {
    Taro.navigateTo({
      url: `/pagesA/pages/foodTuan/index?goodsId=${item.id}`,
    })
  }

  onTimeUp() {}

  goPay(item) {
    console.log('LLLLLL', item)
    if(!item.processingIs) {
      Taro.showToast({
        title: '暂不能拼团！',
        icon: 'none',
        mask:true,
      })
      return
    }
    let obj ={
      orderItemList: [
        {
          productItemId: item.id,
          quantity: 1,
        }
      ]
    }
    api.post('/order/confirmOrder', obj).then(res => {
      if(res.data.code == 200) {
        Taro.navigateTo({
          url: `/pagesC/pages/confirmOrder/index?data=${encodeURIComponent(JSON.stringify(res.data.data))}&isPing=2&goodsId=${item.id}`,
        })
      }
    })
  }


  render () {
    const { dataList } = this.state;
    return (
      <View className='container'>
        {
          dataList.map((item, index) => {
            return (
              <View className='itemBox' key={item.name}>
                <Image className='img' src={item.pic} />
                <View className='content' onClick={() => this.goDetail(item)}>
                  <Text className='name'>{item.name}</Text>
                  <Text className='detail'>{item.detail}</Text>
                  <View className='priceBox'>
                    <Text className='nowTitle'>现价:</Text>
                    <Text className='danw'>$</Text>
                    <Text className='nowPrice'>{item.groupPrice}</Text>
                    <View className='oldBox'>
                      <Text>原价:</Text>
                      <Text className='price'>${item.price}</Text>
                    </View>
                  </View>
                  {
                    item.processingIs ?
                    <View className='time'>
                      <AtCountdown
                        format={{ hours: ':', minutes: ':', seconds: '' }}
                        seconds={item.countdownSecond}
                        onTimeUp={this.onTimeUp.bind(this)}
                      />
                      <Text>后结束</Text>
                    </View>
                    :
                    <View className='time'>
                      <Text style='margin-right:10px'>{item.startTimeString}</Text>
                      <Text>后开始</Text>
                    </View>
                  }
                  
                </View>
                <View
                  onClick={() => this.goPay(item)}
                  className={`btn ${!item.processingIs && 'noDoing'}`}>
                    参与拼团
                </View>
              </View>
            )
          })
        }
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

export default MoreFavorable
