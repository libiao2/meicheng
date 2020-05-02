import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import {
  AtIcon
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../../actions/counter'
import './index.less'
import { getGlobalData } from './../../../utils/global_data'
import api from './../../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class Chat extends Component {
  state = {
    info: {},
    message: '',
    SocketTask: getGlobalData("SocketTask"),
    pageFrom: null,
  };

  componentWillMount() {
    let parmars = this.$router.params;
    console.log('????????????', parmars)
    /// 匹配store里边的聊天记录
    let isHave = false;
    let num = null;
    let newList = this.props.counter.allChat;
    if(newList.length > 0) {
      newList.map((item, index) => {
        if(item.id == JSON.parse(decodeURIComponent(parmars.obj)).memberId) { ///如果store里边有对应联系信息，清除list，重新赋值
          isHave = true;
          num = index;
        }
      })
    }
    if(isHave) {
      newList[num].list = JSON.parse(decodeURIComponent(parmars.dataList));
      this.props.addChat(newList);
    } else {
      newList.push({id: JSON.parse(decodeURIComponent(parmars.obj)).memberId, list: JSON.parse(decodeURIComponent(parmars.dataList))})
      this.props.addChat(newList);
    }

    this.setState({
      info: JSON.parse(decodeURIComponent(parmars.obj)),
      pageFrom: parmars.pageFrom
    })
    Taro.setNavigationBarTitle({
      title: JSON.parse(decodeURIComponent(parmars.obj)).nickname
    })
  }
  componentDidMount() {
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {
    Taro.reLaunch({
      url: '/pages/message/index'
    })

  }

  componentDidShow () {
    const { SocketTask } = this.state;
    SocketTask.onMessage(res => {
      console.log('0000000???????', res)
    })

    SocketTask.onClose(function (e) {
      console.log('socket关闭了: ', e)
    })
    this.scrollMsgBottom()
  }

  componentDidHide () { }

  // 滚动至聊天底部
  scrollMsgBottom = () => {
    var query = Taro.createSelectorQuery();
    query.selectViewport().scrollOffset();
    query.select("#hideBox").boundingClientRect();
    query.exec(function (res) {
      console.log(res);
      var miss = res[0].scrollTop + res[1].top - 100;
      wx.pageScrollTo({
          scrollTop: miss,
          duration: 300
      });
    })
  }

  messageChange(e) {
    this.setState({
      message: e.detail.value
    })
  }

  sendMessage() {
    if(this.state.message == '') {
      return
    }
    var that = this;
    Taro.sendSocketMessage({
      data: JSON.stringify({
        mesageType: 1,
        content:that.state.message,
        sendId: Taro.getStorageSync('userId'),
        sendName: Taro.getStorageSync('userInfo').nickName,
        sendImg: Taro.getStorageSync('userInfo').avatarUrl,
        sendToId: this.state.info.memberId,
        sendToImg: this.state.info.icon,
        sendToName: this.state.info.nickname
      }),
      success: res => {
        console.log('-------======', res)
        this.setState({
          message: ''
        })
      }
    });
  }


  render () {
    let chatlist = [];
    const { thisState } = this.state;
    this.props.counter.allChat.map(item => {
      if(item.id == this.state.info.memberId) {
        chatlist = item.list
      }
    })
    this.scrollMsgBottom()
    console.log('????????', chatlist, Taro.getStorageSync('userId'))
    return (
    <View className='chatCcontainer' id='chatCcontainer'>
        <ScrollView>
          {
            chatlist.map(item => {
              return (
                <View className="itemBox">
                  {
                    item.sendId == Taro.getStorageSync('userId') ?
                    <View className='right'>
                      <Text className='text rightText' style='margin-right: 10px'>{item.content}</Text>
                      <Image className='peopleImg' src={item.sendImg} />
                    </View>
                    :
                    item.sendId == this.state.info.memberId ?
                    <View className='left'>
                      <Image style='margin-right: 10px' className='peopleImg' src={item.sendImg} />
                      <Text className='text'>{item.content}</Text>
                    </View>
                    :
                    <Text className='time'>时间</Text>
                  }
                </View>
              )
            })
          }
        </ScrollView>
        <View id='hideBox' style='float:left;clear: both' ref={(el) => { this.messagesEnd = el; }}></View>
        <View className='footer'>
          <View className='box'>
            <Input
              type='text'
              className='input'
              value={this.state.message}
              onChange={this.messageChange.bind(this)}
            />
            <AtIcon onClick={()=>this.sendMessage()} value='edit' size='26' color='#999'></AtIcon>
          </View>
        </View>
      </View>
    )
  }
}

export default Chat
