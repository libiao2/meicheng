import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import {
  AtInput
} from "taro-ui"
import { connect } from '@tarojs/redux'
import './index.less'
import api from './../../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))


class MyConnect extends Component {
  state = {
    email: '',
    phone: '',
    weachat: '',
    isOpenToast: false,
    toastText: '',
  };

  config = {
    navigationBarTitleText: '美城美事365'
  }
  
  componentWillMount() {
  }
  componentDidMount() {
    if(Taro.getStorageSync('token') != '') {
      this.getData()
    }
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
    api.post('/me/content',{}).then(res => {
      console.log('mmm', res)
      if(res.data.code == 200) {
        this.setState({
          email: res.data.data.email || '',
          phone: res.data.data.telephone || '',
          weachat: res.data.data.weixinNo || '',
        })
      }
    })
  }

  emailChange(e) {
    this.setState({
      email: e
    })
  }

  phoneChange(e) {
    this.setState({
      phone: e
    })
  }

  weachatChange(e) {
    this.setState({
      weachat: e
    })
  }

  submitClick() {
    const { email, phone, weachat } = this.state;
    if(Taro.getStorageSync('token') == '') {
      Taro.switchTab({
        url: `/pages/my/index`
      })
      return
    }
    let obj ={
      email,
      telephone: phone,
      weixinNo: weachat,
    }
    if(email == '' && phone == '' && weachat == '') {
      this.setState({
        toastText: '请至少输入其中一项！',
        isOpenToast: true,
      })
      return;
    } else {
      api.post('/me/updateUmsMember',obj).then(res => {
        console.log('mmm', res)
        if(res.data.code == 200) {
          Taro.showToast({
            title: '保存成功！',
            icon: 'none',
            mask:true,
          });
          Taro.switchTab({
            url: '/pages/my/index'
          })
        }
      })
      
    }
    
  }


  render () {
    const { email, phone, weachat, isOpenToast, toastText } = this.state;
    return (
      <View className='container'>
        <View className='itemBox'>
          <Text className='title'>邮箱：</Text>
          <AtInput
            type='text'
            placeholder='请输入邮箱'
            value={email}
            onChange={this.emailChange.bind(this)}
          />
        </View>
        <View className='itemBox'>
          <Text className='title'>电话：</Text>
          <AtInput
            type='text'
            placeholder='请输入电话号'
            value={phone}
            onChange={this.phoneChange.bind(this)}
          />
        </View>
        <View className='itemBox'>
          <Text className='title'>微信：</Text>
          <AtInput
            type='text'
            placeholder='请输入微信号'
            value={weachat}
            onChange={this.weachatChange.bind(this)}
          />
        </View>
        <View className='box'>
          <Text>请至少填写一项</Text>
        </View>
        <View className='btn'>
          <View className='btnBox' onClick={() => this.submitClick()}>
            <Text>提交</Text>
          </View>
        </View>
        <AtToast
          isOpened={isOpenToast}
          text={toastText}>
        </AtToast>
      </View>
    )
  }
}

export default MyConnect
