import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Button } from '@tarojs/components'
import {
  AtActionSheet,
  AtActionSheetItem,
  AtIcon,
  AtNoticebar,
  AtModal, AtModalHeader, AtModalContent
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../actions/counter'
import './index.less'
import Two from './components/two';
import One from './components/one';
import Footer from '../../components/footer'
import { getGlobalData, setGlobalData } from './../../utils/global_data'
import api from './../../utils/api'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))
class Home extends Component {
  config = {
    navigationBarTitleText: '美城美食365',
    "enablePullDownRefresh": true,
    onReachBottomDistance:50
  }
  constructor(props){
    super(props);
    this.state = {
      areaList: [
        { name: '全部', value: 0 },
        { name: '休斯顿', value: 1 },
        { name: '达拉斯', value: 2 },
        { name: '奥斯丁', value: 3 },
        { name: '西雅图', value: 4 },
      ],
      selectArea: '全部',
      city: 0,
      isSearch: false,
      imgList: [],
      typeList: [
        { name: '美食', pic: require('./../../image/food.png') },
        { name: '休闲', pic: require('./../../image/xiuxian.png') },
        { name: '生活', pic: require('./../../image/shenghuo.png') },
        { name: '二手', pic: require('./../../image/old.png') },
        { name: '房源', pic: require('./../../image/fangyuan.png') },
        { name: '部落', pic: require('./../../image/buluo.png')  },
      ],
      typeKey: 0,
      
      isMove: true,
      recommendList: [],
      stationMessage: '',
      categoryId: 1,
      pageNum: 1,
      pageSize: 10,
      dataList: [],
      listInfo: {},
      SocketTask: getGlobalData("SocketTask"),
    };
  }
  componentWillMount(query) {
    if(query) {
      let scene = decodeURIComponent(query.scene);
      let arr = scene.split('&');
      if(arr[0] == 0) { /// 店铺
        if(arr[1] == 1) { ///1->美食；2->休闲；3->生活；4->二手；5->房源；6->部落
          Taro.navigateTo({
            url: `/pagesB/pages/foodDetail/index?id=${arr[2]}`,
          })
        } else if(arr[1] == 2) {
          Taro.navigateTo({
            url: `/pagesC/pages/leisureDetail/index?id=${arr[2]}`,
          })
        } else {
          Taro.navigateTo({
            url: `/pagesC/pages/otherDetail/index?id=${arr[2]}&type=${arr[1]}`
          })
        }
      }
    }
    
    
  }
  componentDidMount() {
    if(Taro.getStorageSync('userInfo') != '') {
      this.getCarCount();
    }

    this.getData()
    // this.initList()
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
    console.log('diaoyongjiekou')
    this.setState({
      pageNum: 1,
      dataList: [],
    }, () => {this.getList()});

    Taro.onSocketMessage(res => {
      let message = JSON.parse(res.data);
        let myId = Taro.getStorageSync('userId');
        let allList = this.props.counter.allChat;
        if(message.sendId == myId || message.sendToId == myId) { /// 判断该条信息是否与自己相关
          if(message.sendId == myId) { /// 如果发送人是自己
            /// 先判断之前是否存过对应联系人
            if(allList != '') { /// 说明存在该缓存字段allList
              let isHave = false;
              let haveIndex = null;
              allList.map((item, index) => {
                if(item.id == message.sendToId) { /// 判断是否存在对方id
                  isHave = true;
                  haveIndex = index;
                }
              })
              if(isHave) {
                allList[haveIndex].list.push(message);
                this.props.addChat(allList);
              } else {
                allList.push({id: message.sendToId, list: [message]});
                this.props.addChat(allList);
              }
            } else {
              let allList = [];
              allList.push({id: message.sendToId, list: [message]});
              this.props.addChat(allList);
            }
          }
          if(message.sendToId == myId) { /// 发送人是别人
            /// 收到别人发的消息就要给一个回执，表示自己在线
            Taro.sendSocketMessage({
              data: JSON.stringify({
                mesageType: 2,
                sendId: message.sendId,
                sendToId: message.sendToId
              }),
              success: res => {
                console.log('我在线！！')
              }
            });
            if(allList != '') { /// 说明存在该缓存字段allList
              let isHave = false;
              let haveIndex = null;
              allList.map((item, index) => {
                if(item.id == message.sendId) { /// 判断是否存在对方id
                  isHave = true;
                  haveIndex = index;
                }
              })
              if(isHave) {
                allList[haveIndex].list.push(message);
                this.props.addChat(allList);
              } else {
                allList.push({id: message.sendId, list: [message]});
                this.props.addChat(allList);
              }
            } else {
              let allList = [];
              allList.push({id: message.sendId, list: [message]});
              this.props.addChat(allList);
            }
          }
        }
    })
  }

  componentDidHide () { }


  onPullDownRefresh(){ /// 下拉事件
    console.log('lllllllllllll');
    this.setState({
      city: 0,
      categoryId: 1,
      pageNum: 1,
      pageSize: 10,
      dataList: [],
    });
    this.getData()
    this.initList()
  }

  onReachBottom(){ //上拉事件监听
    console.log('sssssssssssss');
    this.setState({
      pageNum: this.state.pageNum + 1,
    }, () => {this.getList()})
  }

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


  serchArea() {
    this.setState({
      isSearch: true
    });
  }

  selectArea(e) {
    this.setState({
      selectArea: e.name,
      city: e.value,
      isSearch: false,
      pageNum: 1,
      dataList: [],
    }, () => {this.getList()});
  }

  typeChoose(e) {
    let timer = null;
    let that = this;
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function(){
      console.log('0000000', that.state)
      that.setState({
        typeKey: e,
        categoryId: e + 1,
        pageNum: 1,
        dataList: [],
      }, () => {that.getList()});
    },700)
  }
  initList(){
    this.setState({
      typeKey: 0,
      categoryId: 1,
      pageNum:  1,
      dataList: [],
    }, () => {this.getList()})
    Taro.stopPullDownRefresh();
  }
  getList() {
    const { city, categoryId, pageNum, pageSize } = this.state;
    let obj = {
      city,
      categoryId,
      pageNum,
      pageSize,
    }

    api.post('/home/productListByType',obj).then(res => {
      console.log('$$$$$', res)
      if(res.data.code == 200) {
        let list = this.state.dataList;
        if(pageNum == 1) {
          this.setState({
            dataList: res.data.data.list,
            listInfo: res.data.data
          })
        } else {
          this.setState({
            dataList: [...list, ...res.data.data.list],
            listInfo: res.data.data
          })
        }
      }
    });
  }

  goMoreYouhui() {
    Taro.navigateTo({
      url: '/pagesB/pages/moreFavorable/index',
    })
  }

  goSearch() {
    const { city } = this.state;
    Taro.navigateTo({
      url: `/pagesB/pages/search/index?city=${city}`,
    })
  }

  getData() {
    api.post('/home/content',{}).then(res => {
      if(res.data.code == 200) {
        let huiList = res.data.data.recommendList;
        this.setState({
          imgList: res.data.data.advertiseList,
          recommendList: huiList.length > 2 ? [huiList[0], huiList[1]] : huiList,
          stationMessage: res.data.data.stationMessage
        })
      }
    });
  }

  goDetail(item) {
    Taro.navigateTo({
      url: `/pagesA/pages/foodTuan/index?goodsId=${item.productItemId}`,
    })
  }


  handleClose() {
    this.setState({
      isSearch: false
    });
  }
  

  swiperClick(index) {
    const { imgList } = this.state;
    console.log('00000', imgList[index]);
    let url='';
      if(imgList[index].linkType==0&&imgList[index].categoryId==1){
          url= `/pagesB/pages/foodDetail/index?id=${imgList[index].linkId}`;
      }else  if(imgList[index].linkType==0&&imgList[index].categoryId==2){
          url=`/pagesC/pages/leisureDetail/index?id=${imgList[index].linkId}`;
      }else if(imgList[index].linkType==1&&imgList[index].categoryId==1){
          url= `/pagesA/pages/foodInfo/index?id=${imgList[index].linkId}`;
      }else if(imgList[index].linkType==1&&imgList[index].categoryId==2){
          url= `/pagesC/pages/leisureInfo/index?id=${imgList[index].linkId}`;
      }
    if(Taro.getStorageSync('userInfo') != '') {
      Taro.navigateTo({
          url:url
      })
    } else {
      Taro.showToast({
        title: "请先去'我的'页面进行登录！",
        icon: 'none',
        mask:true,
      });
    }
  }

  onShareAppMessage() {
    return {
      title: '美城美事365首页',
      path: '/pages/car/index',
      success: function (res) {
        console.log('成功', res)
      }
    }
  }

  render () {
    const { dataList, typeKey } = this.state;
    return (
      <View className='container'>
        <View className='heade'>
          <View className='left' onClick={() => this.serchArea()}>
            <Text>{this.state.selectArea}</Text>
          </View>
          <View className='search' onClick={() => this.goSearch()}>
            <AtIcon value='search' size='12' color='#666'></AtIcon>
            <Text className='text'>搜索</Text>
          </View>
        </View>
        <View className='swiperBox'>
          <Swiper
            className='swiper'
            indicatorDots='true'
            indicatorColor='rgba(0,0,0,0.3)'
            indicatorActiveColor='rgba(36, 200, 178,0.8)'
            circular
            autoplay>
              {
                this.state.imgList.map((item, index) => {
                  return <SwiperItem key={index} onClick={() => this.swiperClick(index)}>
                    <Image src={item.pic} className='swiperImg' />
                    </SwiperItem>
                })
              }
          </Swiper>
          <View className='noticeBox'>
            <AtNoticebar single marquee icon='volume-plus'>
              {this.state.stationMessage}
            </AtNoticebar>
          </View>
        </View>
        <View className='tpyeBox'>
            {
              this.state.typeList.map((item, index) => {
                return (
                <View className='itemBox' key={index} onClick={() => this.typeChoose(index)}>
                  <View className={`yuan ${this.state.typeKey == index ? "yuanChoose" : null}`}>
                    <Image className='iconImg' src={item.pic} />
                  </View>
                  <Text className={`${this.state.typeKey == index ? "chooseType" : null}`}>{item.name}</Text>
                </View>)
              })
            }
        </View>

        {
          (this.state.typeKey == 0 || this.state.typeKey == 1) &&
          <View className='xainshi'>
            <View className='topBox' onClick={() => this.goMoreYouhui()}>
              <Text className='title'>限时特惠</Text>
              <View className='right'>
                <Text className='rightText'>查看更多</Text>
                <AtIcon value='chevron-right' size='10' color='#999'></AtIcon>
              </View>
            </View>
            <View className='quanList'>
              {
                this.state.recommendList.map((item, index) => {
                  return <Image
                          onClick={() => this.goDetail(item)}
                          src={item.pic}
                          className='box' />
                })
              }
            </View>
          </View>
        }
        <View className='googsList'>
          {
            dataList.length > 0 ?
            dataList.map((item,index) => {
              return typeKey == 0 || typeKey == 1 ?
              <One item={item} key={item.name} type={this.state.categoryId} />
              :
              <Two item={item} type={typeKey} key={item.name} />
            })
            :
            <View className='noData'>
              <Text>暂无更多数据~~</Text>
            </View>
          }
        </View>
        {/* 底部固定导航 */}
        {/* <Footer /> */}
        {/* 地区选择 */}
        <AtActionSheet isOpened={this.state.isSearch} onClose={() => this.handleClose()}>
          {
            this.state.areaList.map((item, index) => {
            return <AtActionSheetItem key={index} onClick={() => this.selectArea(item)}>
              {item.name}
              </AtActionSheetItem>
            })
          }
        </AtActionSheet>
        
      </View>
    )
  }
}

export default Home
