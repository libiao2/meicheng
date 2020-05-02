import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Textarea, Map } from '@tarojs/components'
import {
  AtIcon, 
  AtForm,
  AtActionSheet,
  AtActionSheetItem,
  AtButton,
  AtTextarea
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.less'
import api from './../../utils/api'


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
class Message extends Component {
  config = {
    navigationBarTitleText: '消息'
  }
  constructor(props){
    super(props);
    this.state = {
      messageList: [],
    }
  }
  componentWillMount() {
    
  }
  componentDidMount() {
    console.log('5555555555555555555')
    
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
    this.getMessageList()
  }

  componentDidHide () { }

  getMessageList() {
    api.post('/ws/listMessage',{}).then(res => {
      if(res.data.code == 200) {
        this.setState({
          messageList: res.data.data
        })
      }
    })
  }

  goTalk(item) {
    api.post('/ws/openMessage',{sendToId: item.sendToId}).then(res => {
      if(res.data.code == 200) {
        let obj = {
          nickname: item.sendToName,
          memberId: item.sendToId,
          icon: item.sendToImg,
        }
        Taro.navigateTo({
          url: `/pagesA/pages/chat/index?obj=${encodeURIComponent(JSON.stringify(obj))}&dataList=${encodeURIComponent(JSON.stringify(res.data.data))}&pageFrom='message'`
        })
      }
    })
    
  }


  render () {
    const { messageList } = this.state;
    return (
      <View className='container'>
        {
          messageList.length > 0 ?
          messageList.map(item => {
            return (
              <View className='oneBox' onClick={() => this.goTalk(item)}>
                <View className='imgBox'>
                  <Image className='img' src={item.sendToImg} />
                  {
                    item.unreadQuantity > 0 &&
                    <View className='count'>{item.unreadQuantity}</View>
                  }
                </View>
                <View className='bottomBox'>
                  <View className='topBox'>
                    <Text className='name'>
                      {item.sendToName}
                    </Text>
                    <Text className='time'>
                      {item.createTime}
                    </Text>
                  </View>
                  <View className='messageBox'>
                    <Text className='message'>{item.content}</Text>
                  </View>
                </View>
              </View>
            )
          })
          :
          <View className='noData'>
            <Text>暂无消息~~</Text>
          </View>
        }
      </View>
    )
  }
}

export default Message
