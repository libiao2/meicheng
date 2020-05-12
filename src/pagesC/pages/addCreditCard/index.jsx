import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, Picker, Input } from '@tarojs/components'
import {
  AtIcon,
  AtGrid
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { addChat } from '../../../actions/counter'
import './index.less'
import api from '../../../utils/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  addChat (list) {
    dispatch(addChat(list))
  },
}))


class AddCreditCard extends Component {
  state = {
    name: '',
    number: '', /// 卡号
    startTime: '',
    endTime: '',
    cvc: '',
    shippingName: '',
    postalCode: '',
    line1: '',
    line2: '',
  };

  config = {
    navigationBarTitleText: '添加信用卡'
  }
  
  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {
    
  }

  componentDidShow () { 
  }

  componentDidHide () { }

  nameChange(e) {
    this.setState({
      name: e.detail.value
    })
  }

  numberChange(e) {
    this.setState({
      number: e.detail.value
    })
  }

  onStartDateChange(e) {
    this.setState({
      startTime: e.detail.value
    })
  }

  onEndDateChange(e) {
    this.setState({
      endTime: e.detail.value
    })
  }

  cvcChange(e) {
    this.setState({
      cvc: e.detail.value
    })
  }

  shippingNameChange(e) {
    this.setState({
      shippingName: e.detail.value
    })
  }

  countryChange(e) {
    this.setState({
      country: e.detail.value
    })
  }

  stateChange(e) {
    this.setState({
      state: e.detail.value
    })
  }

  cityChange(e) {
    this.setState({
      city: e.detail.value
    })
  }

  postalCodeChange(e) {
    this.setState({
      postalCode: e.detail.value
    })
  }

  line1Change(e) {
    this.setState({
      line1: e.detail.value
    })
  }

  line2Change(e) {
    this.setState({
      line2: e.detail.value
    })
  }

  submitClick() {
    const {
      number,
      name,
      startTime,
      endTime,
      cvc,
      shippingName,
      state,
      city,
      postalCode,
      line1,
      line2,
      country
    } = this.state;
    if(name == '') {
      Taro.showToast({
        title: '请填写持卡人姓名！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(number == '') {
      Taro.showToast({
        title: '请填写卡号！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(endTime == '') {
      Taro.showToast({
        title: '请选择账户有效期限！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(cvc == '') {
      Taro.showToast({
        title: '请填写CVC！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    // if(shippingName == '') {
    //   Taro.showToast({
    //     title: '请填写持卡人姓名！',
    //     icon: 'none',
    //     mask:true,
    //   });
    //   return;
    // }
    // if(country == '') {
    //   Taro.showToast({
    //     title: '请填写国家！',
    //     icon: 'none',
    //     mask:true,
    //   });
    //   return;
    // }
    // if(state == '') {
    //   Taro.showToast({
    //     title: '请填写州！',
    //     icon: 'none',
    //     mask:true,
    //   });
    //   return;
    // }
    // if(city == '') {
    //   Taro.showToast({
    //     title: '请填写城市！',
    //     icon: 'none',
    //     mask:true,
    //   });
    //   return;
    // }
    // if(postalCode == '') {
    //   Taro.showToast({
    //     title: '请填写邮编！',
    //     icon: 'none',
    //     mask:true,
    //   });
    //   return;
    // }
    // if(line1 == '') {
    //   Taro.showToast({
    //     title: '请填写街道地址！',
    //     icon: 'none',
    //     mask:true,
    //   });
    //   return;
    // }
    let timeArr = endTime.split('-');
    let obj = {
      number,
      name,
      expYear: timeArr[0],
      expMonth: timeArr[1],
      cvc,
      // shippingName,
      // state,
      // city,
      // postalCode,
      // line1,
      // line2,
      // country
    }
    console.log('PPPP', obj)
    api.post('/pay/addCard',obj).then(res => {
      console.log('mmm', res)
      if(res.data.code == 200) {
        Taro.showToast({
          title: '保存成功！',
          icon: 'none',
          mask:true,
        });
        Taro.navigateBack({
          delta: 1
        })
      } else {
        Taro.showToast({
          title: res.data.message,
          icon: 'none',
          mask:true,
        });
      }
    })
  }

  render () {
    const {
      number,
      name,
      startTime,
      endTime,
      cvc,
      shippingName,
      state,
      city,
      postalCode,
      line1,
      line2,
      country } = this.state;
    return (
      <View className='container'>
        <View className='tip'>
        以下内容会走到信用卡公司，美城美事365绝对不会也没有权限查看信用卡信息,请放心使用
        </View>
        <View className='titleBox'>
          <Text>基本信息</Text>
        </View>
        <View className='itemBox'>
          <Text className='leftPart'>持卡人姓名:</Text>
          <Input
            type='text'
            className='shopNameInput'
            placeholder='请输入持卡人姓名'
            value={name}
            onChange={this.nameChange.bind(this)}
          />
        </View>
        <View className='itemBox'>
          <Text className='leftPart'>卡号:</Text>
          <Input
            type='text'
            className='shopNameInput'
            placeholder='请输入卡号'
            value={number}
            onChange={this.numberChange.bind(this)}
          />
        </View>
        <View className='itemBox'>
          <Text className='leftPart'>有效期限:</Text>
          {/* <Picker mode='date' fields='month' onChange={this.onStartDateChange}>
            <View className='picker'>
              <Text>
                {startTime}
              </Text>
              <AtIcon value='chevron-down' size='16' color='#999'></AtIcon>
            </View>
          </Picker>
          <Text className='zhi'>至</Text> */}
          <Picker mode='date' fields='month' onChange={this.onEndDateChange}>
            <View className='picker'>
              <Text>
                {endTime}
              </Text>
              <AtIcon value='chevron-down' size='16' color='#999'></AtIcon>
            </View>
          </Picker>
        </View>
        <View className='itemBox'>
          <Text className='leftPart'>CVC:</Text>
          <Input
            type='text'
            className='shopNameInput'
            placeholder='请输入CVC'
            value={cvc}
            onChange={this.cvcChange.bind(this)}
          />
        </View>
        {/* <View className='titleBox'>
          <Text>账单邮寄地址</Text>
        </View> */}
        {/* <View className='itemBox'>
          <Text className='leftPart'>持卡人姓名:</Text>
          <Input
            type='text'
            className='shopNameInput'
            placeholder='请输入持卡人姓名'
            value={shippingName}
            onChange={this.shippingNameChange.bind(this)}
          />
        </View> */}
        {/* <View className='itemBox'>
          <Text className='leftPart'>国家:</Text>
          <Input
            type='text'
            className='smallInput'
            placeholder='请填写国家'
            value={country}
            onChange={this.countryChange.bind(this)}
          />
          <Text className='zhou'>州</Text>
          <Input
            type='text'
            className='smallInput'
            placeholder='请填写州'
            value={state}
            onChange={this.stateChange.bind(this)}
          />
        </View> */}
        {/* <View className='itemBox'>
          <Text className='leftPart'>城市:</Text>
          <Input
            type='text'
            className='smallInput'
            placeholder='请填写城市'
            value={city}
            onChange={this.cityChange.bind(this)}
          />
          <Text className='zhou'>邮编</Text>
          <Input
            type='text'
            className='smallInput'
            placeholder='请填写邮编'
            value={postalCode}
            onChange={this.postalCodeChange.bind(this)}
          />
        </View> */}
        {/* <View className='itemBox'>
          <Text className='leftPart'>街道1:</Text>
          <Input
            type='text'
            className='shopNameInput'
            placeholder='请填写详细的街道地址'
            value={line1}
            onChange={this.line1Change.bind(this)}
          />
        </View> */}
        {/* <View className='itemBox'>
          <Text className='leftPart'>街道2:</Text>
          <Input
            type='text'
            className='shopNameInput'
            placeholder='请填写详细的门牌号码'
            value={line2}
            onChange={this.line2Change.bind(this)}
          />
        </View> */}
        <View className='btn'>
          <View className='btnBox' onClick={() => this.submitClick()}>
            <Text>添加信用卡</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default AddCreditCard
