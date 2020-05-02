import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import 'taro-ui/dist/style/index.scss'
import Home from './pages/index/index'

import configStore from './store'
import api from './utils/api'

import './app.less'
import {setGlobalData} from "./utils/global_data"

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

let SocketTask;

let timeoutObj = null;

let messageTimeout = null;

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/car/index',
      'pages/publishInfo/index',
      'pages/my/index',
      'pages/message/index',
    ],
    subpackages: [
      {
        "root": "pagesA", 
        "pages": [
          'pages/addBuluo/index',
          'pages/addCoupon/index',
          'pages/addFood/index',
          'pages/addFoodInfo/index',
          'pages/addFuwu/index',
          'pages/addHome/index',
          'pages/addLeisure/index',
          'pages/addLife/index',
          'pages/chat/index',
          'pages/foodDetail/index',
          'pages/foodTuan/index',
          'pages/foodInfo/index',
        ]
      },
      {
        "root": "pagesB",
        "pages": [
          'pages/login/index',
          'pages/menu/index',
          'pages/moreFavorable/index',
          'pages/myPublish/index',
          'pages/search/index',
          'pages/secondhand/index',
        ]
      },
      {
        "root": "pagesC",
        "pages": [
          'pages/leisureDetail/index',
          'pages/leisureInfo/index',
          'pages/otherDetail/index',
          'pages/myConnect/index',
          'pages/confirmOrder/index',
          'pages/mySale/index',
          'pages/myOrder/index',
          'pages/addCreditCard/index',
          'pages/orderDetail/index',
          'pages/orderRefund/index',
          'pages/refundStep/index',
          'pages/groupBuyingDetail/index',
          'pages/payEnd/index',
          'pages/otherPay/index',
        ]
      },
      {
        "root": "pagesD",
        "pages": [
          'pages/changeAddFood/index',
          'pages/changeAddFoodInfo/index',
          'pages/changeAddCoupon/index',
          'pages/changeAddLeisure/index',
          'pages/changeAddFuwu/index',
          'pages/changeAddHome/index',
          'pages/changeAddLife/index',
          'pages/changeSecondhand/index',
          'pages/changeAddbuluo/index',
        ]
      }
    ],
    permission: {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置定位"
      }
    },
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '美城美食365',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './image/home.png',
          selectedIconPath: './image/home_active.png',
        },
        {
          pagePath: 'pages/publishInfo/index',
          text: '发布',
          iconPath: './image/publish.png',
          selectedIconPath: './image/publish_active.png',
        },
        {
          pagePath: 'pages/car/index',
          text: '购物车',
          iconPath: './image/car.png',
          selectedIconPath: './image/car_active.png',
        },
        {
          pagePath: 'pages/message/index',
          text: '消息',
          tips:'1',
          iconPath: './image/message.png',
          selectedIconPath: './image/message_active.png',
        },
        {
          pagePath: 'pages/my/index',
          text: '我的',
          iconPath: './image/my.png',
          selectedIconPath: './image/my_active.png',
        },
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
    },
    
  };

  componentDidMount () {
    this.connectSocket();
    this.myMessageCount();
  }

  componentDidShow () {
    Taro.onSocketMessage((res) => {
      console.log('888899999', res)
    });
  }

  componentDidHide () {}

  componentDidCatchError () {}


  myMessageCount() {
    this.resetMessage();
    this.getMessageCount();
  }

  getMessageCount() {
    let that = this;
    messageTimeout = setTimeout(() => {
      console.log("获取消息未读数量", Taro.getStorageSync('token'));
      
      if(Taro.getStorageSync('token') != '') {
        api.post('/ws/messageUnreadQuantity',{}).then(res => {
          console.log('消息数量', res)
          if(res.data.code == 200) {
            if(res.data.data != 0) {
              Taro.setTabBarBadge({
                index: 3,
                text: `${res.data.data}`
              })
            } else {
              Taro.removeTabBarBadge({
                index: 3,
              });
            }
          }
        })
      }
	    
      that.getMessageCount()
    }, 10000)
    
  }

  connectSocket() {
    let that = this;
    let userId = Taro.getStorageSync('userId') || '0';
    SocketTask = Taro.connectSocket({
      url: `wss://api.uslife360.com/uslife/app/websocket/${userId}`,
      header:{
        'content-type': 'application/json'
      },    
      success: function () {
        console.log('connect success')
      }
    })
    .then(task => {
      setGlobalData("SocketTask", task);
      task.onOpen(function () {
        console.log('onOpen')
        that.reset();
        that.start();
      })
      task.onMessage(function (msg) {
        console.log('onMessage: ', msg)
        
      })
      task.onClose(res => {
        console.log('socket关闭了')
      })
    })
  }

  resetMessage() {
    clearTimeout(messageTimeout);
  }


  reset() {
    clearTimeout(timeoutObj);
  }

  start() {
    let that = this;
    timeoutObj = setTimeout(() => {
      console.log("发送ping");
	      wx.sendSocketMessage({
	        data: JSON.stringify({
            mesageType: 0,
          }),
	        success() {
	          console.log("发送ping成功");
          },
          fail() {
            that.connectSocket();
          }
        });
        that.start()
    }, 15000)
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
