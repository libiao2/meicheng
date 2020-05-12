import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import {
  AtToast,
  AtSearchBar
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


class Search extends Component {
  state = {
    keyword: '',
    hasFocus: false,
    typeList: [
      {
        title: '美食'
      },
      {
        title: '休闲'
      },
      {
        title: '生活'
      },
      {
        title: '二手'
      },
      {
        title: '房源'
      },
      {
        title: '部落'
      },
    ],
    city: null,
    categoryId: 1,
    pageNum: 1,
    pageSize: 10,
    dataList: [],
    isOpenToast: false,
    toastText: '',
  };

  config = {
    navigationBarTitleText: '搜索',
    "enablePullDownRefresh": true,
    onReachBottomDistance:50
  }
  
  componentWillMount() {
  }
  componentDidMount() {
    let that = this;
    let parmars = this.$router.params;
    this.setState({
      city: parseInt(parmars.city),
    })
    if(Taro.getStorageSync('token') != '') {
      Taro.getLocation({
        type: 'wgs84',
        success: (res) => {
          console.log('成功：', res)
          that.setState({
            lat: res.latitude,
            lon: res.longitude
          })
        },
        fail: (res) => {
          console.log('失败：', res)
        },
      })
    }
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

  onPullDownRefresh(){ /// 下拉事件
    console.log('bb')
  }

  onReachBottom(){ //上拉事件监听
    this.setState({
      pageNum: this.state.pageNum + 1,
    }, () => {this.getData()})
  }

  valueChange(value) {
    console.log('NNN', value)
    this.setState({
      keyword: value
    })
  }

  goHome() {
    Taro.switchTab({
      url: '/pages/index/index'
    })
  }

  getData() {
    const {
      keyword,
      city,
      categoryId,
      pageNum,
      dataList,
      pageSize } = this.state;

    if(keyword == '') {
      return
    }
    
    let obj = {
      keyword,
      city,
      categoryId,
      pageNum,
      pageSize,
    }
    let list = [...dataList];
    api.post('/home/search',obj).then(res => {
      if(res.data.code == 200) {
        if(res.data.data.list.length == 0) {
          Taro.showToast({
            title: '暂无更多数据！',
            icon: 'none',
            mask:true,
          });
        } else {
          if(pageNum == 1) {
            this.setState({
              dataList: res.data.data.list
            })
          } else {
            this.setState({
              dataList: [...list, ...res.data.data.list]
            })
          }
        }
        
      }
    })
  }

  onActionClick() {
    this.getData()
  }

  enterClick() {
    this.getData()
  }

  chooseType(index) {
    this.setState({
      categoryId: index + 1,
      dataList: [],
    }, () => {this.getData()})
  }

  distance(la1, lo1, la2, lo2) {
    var La1 = la1 * Math.PI / 180.0;
    var La2 = la2 * Math.PI / 180.0;
    var La3 = La1 - La2;
    var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000;
    s = s.toFixed(2);
    return s;
  }

  location(item) {
    const {lat, lon} = this.state;
    return this.distance(lat, lon, item.latitude, item.longitude);
  }

  goDetail(item) {
    switch(item.categoryId) {
      case 1: // 美食
        Taro.navigateTo({
          url: `/pagesB/pages/foodDetail/index?id=${item.id}`,
        })
        break;
      case 2: // 休闲
        Taro.navigateTo({
          url: `/pagesC/pages/leisureDetail/index?id=${item.id}`,
        })
        break;
      case 3: // 生活
        Taro.navigateTo({
          url: `/pagesC/pages/otherDetail/index?id=${item.id}&type=${item.categoryId - 1}`,
        })
        break;
      case 4: // 二手
        Taro.navigateTo({
          url: `/pagesC/pages/otherDetail/index?id=${item.id}&type=${item.categoryId - 1}`,
        })
        break;
      case 5: // 房源
        Taro.navigateTo({
          url: `/pagesC/pages/otherDetail/index?id=${item.id}&type=${item.categoryId - 1}`,
        })
        break;
      case 6: //部落
        Taro.navigateTo({
          url: `/pagesC/pages/otherDetail/index?id=${item.id}&type=${item.categoryId - 1}`,
        })
        break;
    }
  }


  render () {
    const {
      value,
      typeList,
      categoryId,
      isOpenToast,
      dataList,
      toastText } = this.state;
    return (
      <View className='container'>
        <View className='searchHeader'>
          <View className='searchBox'>
            <AtSearchBar
              className='search'
              value={value}
              onFocus={() => this.setState({ hasFocus: true })}
              onBlur={() => this.setState({ hasFocus: false })}
              onChange={this.valueChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
              onConfirm={() => this.enterClick()}
            />
          </View>
          {
            !hasFocus && value == '' &&
            <Text onClick={() => this.goHome()} className='cancel'>取消</Text>
          }
        </View>
        <View className='typeBox'>
          <Text className='title'>指定搜索:</Text>
          {
            typeList.map((item, index) => {
              return <View
                className={`box ${categoryId == (index + 1) && 'chooseBox'}`}
                onClick={() => this.chooseType(index)}>
                <Text>{item.title}</Text>
              </View>
            })
          }
        </View>
        <View className='listBox'>
          {
            dataList.map((item,index) => {
              return (
                <View className='itemBox' onClick={() => this.goDetail(item)}>
                  <Image className='img' src={item.pic} />
                  <View className='rightPart'>
                    <View className='nameBox'>
                      <Text className='name'>{item.name}</Text>
                      {/* <Text className='jl'>距离 {this.location(item)}km</Text> */}
                    </View>
                    <Text className='price'>人均 ${item.price}</Text>
                    <View className='adressBox'>
                      <Text className='adress'>{item.address}</Text>
                      <Text className='type'>{item.productType}</Text>
                    </View>
                    <View className='detail'>
                      <Text>{item.serviceSupport}</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
        <AtToast
          isOpened={isOpenToast}
          text={toastText}>
        </AtToast>
      </View>
    )
  }
}

export default Search
