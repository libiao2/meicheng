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
import ChooseImage from '../../../components/chooseImage'
import api from './../../../utils/api'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))
class ChangeAddLife extends Component {
  config = {
    navigationBarTitleText: '生活'
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
      detail: '',
      note: '',
      weixinno: '',
      telephone: '',
      email: '',
      isOpen: false,
      toast: '',
      typeChoose: 0,
      longitude:'',
      latitude: '',
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
          title: '生活服务',
        },
        {
          title: '医疗保健',
        },
        {
          title: '教育',
        },
        {
          title: '旅游',
        },
        {
          title: '求职招聘',
        },
        {
          title: '地产',
        },
        {
          title: '法律',
        },
        {
          title: '零售',
        },
        {
          title: '金融保险',
        },
        {
          title: '社交',
        },
        {
          title: '交通',
        },
        {
          title: '其他',
        },
      ],
      lifeImgList: [],
      id: '',
    };
  }
  componentWillMount() {
    let parmars = this.$router.params;
    if(parmars.id) {
      this.getChangeData(parmars.id);
      this.setState({
        id: parmars.id
      })
    }
  }
  componentDidMount() {
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getChangeData(id) {
    api.post('/product/toUpdate',{id}).then(res => {
      console.log('mmm', res)
      if(res.data.code == 200) {
        let obj = res.data.data;
        let cityName = '';
        switch(obj.city) {
          case 1:
            cityName = '休斯顿';
            break;
          case 2:
            cityName = '达拉斯';
            break;
          case 3:
            cityName = '奥斯丁';
            break;
          case 4:
            cityName = '西雅图';
            break;
        }

        let typeIndex = 0;
        let chooseType = obj.productType.split(',');
        let typeCopy = [...this.state.typeList];
        typeCopy.forEach((item,index1) => {

          chooseType.forEach((item2,index2) => {
            if(item.title == item2) {
              typeIndex = index1;
            }
          })
        })

        this.setState({
          name: obj.name,
          city: obj.city,
          cityName: cityName,
          address: obj.address,
          latitude: obj.latitude,
          longitude: obj.longitude,

          telephone: obj.telephone,
          email: obj.email,
          weixinno: obj.weixinno,
          typeChoose: typeIndex,

          detail: obj.detail,
          note: obj.note,
          lifeImgList: obj.picList,
        })

      }
    })
  }

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
    Taro.authorize({
      scope: 'scope.userLocation',
      success: (res) => {
        console.log('成功：', res)
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

  typeClick(index) {
    this.setState({
      typeChoose: index
    })
  }

  emailChange(e) {
    this.setState({
      email: e.detail.value
    })
  }

  deleteChooseImg(index) {
    const { lifeImgList } = this.state;
    let newList = [...lifeImgList];
    newList.splice(index,1);
    this.setState({
      lifeImgList: newList,
    })
  }

  submitForm() {
    const {
      id,
      picList,
      name,
      city,
      address,
      telephone,
      email,
      weixinno,
      detail,
      note,
      typeList,
      typeChoose,
      longitude,
      latitude,
      lifeImgList
    } = this.state;
    if(picList.length == 0 && lifeImgList.length == 0) {
      this.setState({
        toast: '请选择展示图片',
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
    if(name == '') {
      this.setState({
        toast: '请填写名称',
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
      id,
      categoryId: 3,
      verifyStatus: 0,
      picList: [...lifeImgList, ...picList],
      name,
      city,
      address,
      telephone,
      email,
      weixinno,
      detail,
      note,
      productTypeList: [typeList[typeChoose].title],
      longitude,
      latitude,
    }

    api.post('/product/update',obj).then(res => {
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
    const { typeChoose, lifeImgList } = this.state;
    return (
      <View className='container'>
        <AtForm>
          <View className='shopImgBox'>
            <View className='shopTop'>
              <Text className='left'>请添加展示图片</Text>
              <Text className='right'>(可上传1-30张图片)</Text>
            </View>
            {
              lifeImgList.length > 0 &&
              <View className='chooseImgList'>
                {
                  lifeImgList.map((item,index) => {
                    return (
                      <View className='chooseImgBox'>
                        <Image className='shooseImg' src={item} />
                        <View className='deleteImg' onClick={() => this.deleteChooseImg(index)}>
                          <Text>x</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            }
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
            <Text className='leftPart'>标题名称:</Text>
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
            <View className='areaBox' onClick={() => this.openMap()}>
              <Input
                disabled
                type='text'
                className='areaInput'
                placeholder='点击地区图标定位当前地址'
                value={this.state.address}
                onChange={this.areaNameChange.bind(this)}
              />
              <View className='iconBox'>
                <AtIcon value='map-pin' size='13' color='#999'></AtIcon>
              </View>
            </View>
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

export default ChangeAddLife
