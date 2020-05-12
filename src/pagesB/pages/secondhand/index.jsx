import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import {
  AtIcon, 
  AtForm,
  AtActionSheet,
  AtActionSheetItem,
  AtButton,
  AtToast,
  AtTextarea
} from "taro-ui"
import { connect } from '@tarojs/redux'
import './index.less'
import ChooseImage from './../../../components/chooseImage'
import api from './../../../utils/api'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))
class secondhand extends Component {
  config = {
    navigationBarTitleText: '二手'
  }
  constructor(props){
    super(props);
    this.state = {
      imgList: {
        files: [],
        showUploadBtn:true,
        upLoadImg:[],
      },
      picList: [],
      name: '',
      isOpencity: false,
      cityName: '休斯顿',
      city: 1, /// 城市名
      address: '',
      price: '',
      detail: '',
      note: '',
      weixinno: '',
      telephone: '',
      email: '',
      isOpen: false,
      toast: '',
      areaList: [
        {
          name: '休斯顿',
          value: 1
        },
        {
          name: '达拉斯',
          value: 2
        },
        {
          name: '奥斯丁',
          value: 3
        },
        {
          name: '西雅图',
          value: 4
        },
      ],
      typeList: [
        {
          title: '全部',
        },
        {
          title: '汽车',
        },
        {
          title: '其他',
        },
      ],
      typeChoose: 0,
      longitude: '',
      latitude: '',
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

  // 拿到子组件上传图片的路径数组
  getOnFilesValue(fails) {
    let newObj = this.state.imgList;
    newObj.files = fails;
    this.setState({
      imgList: newObj
    })
  }

  deleteImgSrc(index) {
    console.log('VVVVVVVVV', index)
    let newList = this.state.picList;
    newList.splice(newList[index],1) // 删除已上传的图片地址
    this.setState({
      picList: newList
    })
  }

  getReturnImgSrc(img) {
    console.log('6565656565', img, this.state.picList);
    let list = [...this.state.picList];
    list.push(img);
    this.setState({
      picList: list
    })
  }

  nameChange(e) {
    this.setState({
      name: e.detail.value
    })
  }

  clickCity() {
    this.setState({
      isOpencity: true,
    });
  }

  selectCity(e) {
    this.setState({
      cityName: e.name,
      city: e.value,
      isOpencity: false,
    });
  }

  areaNameChange(e) {
    console.log('area', e)
    this.setState({
      address: e.detail.value
    })
  }

  openMap() {
    this.setState({
      isOpen: true,
      toast: '正在打开地图！'
    })
    Taro.authorize({
      scope: 'scope.userLocation',
      success: (res) => {
        console.log('成功：', res)
        this.setState({
          isOpen: false,
          toast: ''
        })
        this.onGetLocation();//获取位置
      },
      fail: (res) => {
        console.log('失败：', res)
      },
    })
  }

  onGetLocation() {
    Taro.getLocation({
      success: (res) => {
        console.log('成功：', res)
        Taro.chooseLocation({
          success: (val) => {
            console.log('--------', val)
            this.setState({
              address: val.address,
              longitude: val.longitude,
              latitude: val.latitude,
            })
          }
        })
      },
      fail: (res) => {
        console.log('失败：', res)
      },
    })
  }

  cityHandleClose() {
    this.setState({
      isOpencity: false
    });
  }

  priceChange(e) {
    let reg=/^0\.\d+$|^[1-9]+(\.\d+)?$/;
    if(!reg.test(e.detail.value)) {
      if(e.detail.value != '') {
        if(e.detail.value == 10 || e.detail.value == 100 || e.detail.value == 1000 || e.detail.value == 10000 || e.detail.value == 100000 || e.detail.value == 1000000) {
          this.setState({
            price: e.detail.value,
          })
        } else {
          this.setState({
            price: '',
          })
          Taro.showToast({
            title: '价格填写有误！！',
            icon: 'none',
            mask:true,
          });
        }
        
      }
    } else {
      this.setState({
        price: e.detail.value,
      })
    }
  }

  shuomingChange(e) {
    this.setState({
      detail: e,
    })
  }

  noteChange(e) {
    this.setState({
      note: e
    })
  }

  phoneChange(e) {
    this.setState({
      telephone: e.detail.value
    })
  }

  weixinnoChange(e) {
    this.setState({
      weixinno: e.detail.value
    })
  }

  emailChange(e) {
    this.setState({
      email: e.detail.value
    })
  }

  emailBlur(e) {
    let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(!reg.test(e.detail.value)){
      Taro.showToast({
        title: '请输入正确邮箱',
        icon: 'none',
        mask:true,
      });
      this.setState({
        email: ''
      })
      return;
    }
  }

  weixinBlur(e) {
    let reg = /^[a-zA-Z\d_]{5,}$/;
    if(!reg.test(e.detail.value)){
      Taro.showToast({
        title: '请输入正确微信号',
        icon: 'none',
        mask:true,
      });
      this.setState({
        weixinno: ''
      })
      return;
    }
  }

  phoneBlur(e) {
    console.log('.....',e.detail.value);
    let reg = /\D/g;
    if(reg.test(parseFloat(e.detail.value))){
      Taro.showToast({
        title: '请输入正确手机号',
        icon: 'none',
        mask:true,
      });
      this.setState({
        telephone: ''
      })
      return
    } else {
      if(e.detail.value.length > 11 || e.detail.value.length < 10) {
        Taro.showToast({
          title: '请输入正确手机号',
          icon: 'none',
          mask:true,
        });
        this.setState({
          telephone: ''
        })
        return
      }
    }
  }

  typeClick(index) {
    this.setState({
      typeChoose: index
    })
  }

  submitForm() {
    const {
      picList,
      name,
      city,
      address,
      price,
      telephone,
      email,
      weixinno,
      detail,
      note,
      typeList,
      typeChoose,
      longitude,
      latitude,
    } = this.state;
    if(picList.length == 0) {
      this.setState({
        toast: '请选择展示图片',
        isOpen: true,
      })
      return
    }
    if(name == '') {
      this.setState({
        toast: '请填写二手名称',
        isOpen: true,
      })
      return
    }
    if(address == '') {
      Taro.showToast({
        title: '请选择具体地址！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(price == '') {
      this.setState({
        toast: '请填写价格',
        isOpen: true,
      })
      return
    }
    if(email == '' &&  telephone == '' && weixinno == '') {
      this.setState({
        toast: '请填写联系方式',
        isOpen: true,
      })
      return
    }
    let obj = {
      categoryId: 4,
      verifyStatus: 0,
      picList,
      name,
      city,
      address,
      price,
      telephone,
      email,
      weixinno,
      detail,
      note,
      productTypeList: [typeList[typeChoose].title],
      longitude,
      latitude,
    }

    api.post('/product/create',obj).then(res => {
      if(res.data.code == 200) {
        Taro.switchTab({
          url: '/pages/index/index'
        })
      } else {
        Taro.showToast({
          title: '发布失败！',
          icon: 'none',
          mask:true,
        })
      }
    })
  }


  render () {
    const { typeChoose } = this.state;
    return (
      <View className='container'>
        <AtForm>
          <View className='shopImgBox'>
            <View className='shopTop'>
              <Text className='left'>请添加展示图片</Text>
              <Text className='right'>(可上传1-30张图片)</Text>
            </View>
            <View className='imgBox'>
              <ChooseImage
                chooseImg={this.state.imgList}
                onFilesValue={this.getOnFilesValue.bind(this)}
                returnImgSrc={this.getReturnImgSrc.bind(this)}
                deleteImgSrc={this.deleteImgSrc.bind(this)}
              />
            </View>
          </View>
          <Text className='concentTitle'>基本信息</Text>
          <View className='itemBox'>
            <Text className='leftPart'>二手名称:</Text>
            <Input
              type='text'
              className='shopNameInput'
              placeholder='请输入名称'
              value={this.state.name}
              onChange={this.nameChange.bind(this)}
            />
          </View>
          <View className='itemBox'>
            <Text className='leftPart'>所在城市:</Text>
            <View className='cityChooseBox' onClick={() => this.clickCity()}>
              <Text>{this.state.cityName}</Text>
              <AtIcon value='chevron-down' size='13' color='#999'></AtIcon>
            </View>
            <AtActionSheet isOpened={this.state.isOpencity} onClose={() => this.cityHandleClose()}>
              {
                this.state.areaList.map((item, index) => {
                return <AtActionSheetItem key={index} onClick={() => this.selectCity(item)}>
                  {item.name}
                  </AtActionSheetItem>
                })
              }
            </AtActionSheet>
          </View>
          <View className='itemBox'> 
            <Text className='leftPart'>地址:</Text>
            <View className='areaBox'>
              <Input
                type='text'
                // disabled
                className='areaInput'
                placeholder='点击地区图标定位当前地址'
                value={this.state.address}
                onChange={this.areaNameChange.bind(this)}
              />
              <View className='iconBox' onClick={() => this.openMap()}>
                <AtIcon value='map-pin' size='13' color='#999'></AtIcon>
              </View>
            </View>
          </View>
          <View className='itemBox'>
            <Text className='leftPart'>价格:</Text>
            <Input
              type='text'
              className='shopNameInput'
              placeholder='请输入价格'
              value={this.state.price}
              onChange={this.priceChange.bind(this)}
            />
            <Text style="font-size: 12px;color: #333;margin-left: 6px">$</Text>
          </View>
          <View className='itemBox flexEnd'>
            <Text className='leftPart' style='margin-top: 20rpx'>联系方式:</Text>
            <View>
              <View className='itemBox'>
                <Text className='leftPart ss'>手机号:</Text>
                <Input
                  type='text'
                  className='shopNameInput'
                  placeholder='请输入手机号'
                  value={this.state.telephone}
                  onBlur={this.phoneBlur.bind(this)}
                  onChange={this.phoneChange.bind(this)}
                />
              </View>
              <View className='itemBox'>
                <Text className='leftPart ss'>微信:</Text>
                <Input
                  type='text'
                  className='shopNameInput'
                  placeholder='请输入微信'
                  value={this.state.weixinno}
                  onBlur={this.weixinBlur.bind(this)}
                  onChange={this.weixinnoChange.bind(this)}
                />
              </View>
              <View className='itemBox'>
                <Text className='leftPart ss'>邮箱:</Text>
                <Input
                  type='text'
                  className='shopNameInput'
                  placeholder='请输入邮箱'
                  value={this.state.email}
                  onBlur={this.emailBlur.bind(this)}
                  onChange={this.emailChange.bind(this)}
                />
              </View>
            </View>
          </View>
          <View style='height: 5px;background:#f1f1f1'></View>
          <View className='typeListBox'>
            {
              this.state.typeList.map((item, index) => {
                return (
                  <View onClick={() => this.typeClick(index)} className={`textListBox ${typeChoose == index && 'isChoose'}`}>
                    <Text>{item.title}</Text>
                  </View>
                )
              })
            }
          </View>
          <View style='height: 5px;background:#f1f1f1'></View>
          <View className='textBox'>
            <Text className='title'>详细说明:</Text>
            <AtTextarea
              className='text'
              count={false}
              value={this.state.detail}
              onChange={this.shuomingChange.bind(this)}
            />
          </View>
          <View style='height: 5px;background:#f1f1f1'></View>
          <View className='textBox'>
            <Text className='title'>购买须知:</Text>
            <AtTextarea
              className='text'
              count={false}
              value={this.state.note}
              onChange={this.noteChange.bind(this)}
            />
          </View>
          <AtButton className='btn' onClick={() => this.submitForm()}>确认</AtButton>
          <View style='height: 30px;background:#fff'></View>
        </AtForm>
        <AtToast
          isOpened={this.state.isOpen}
          text={this.state.toast}>
        </AtToast>
      </View> 
    )
  }
}

export default secondhand
