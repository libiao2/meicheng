import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Picker, Button } from '@tarojs/components'
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
class ChangeAddLeisure extends Component {
  config = {
    navigationBarTitleText: '休闲'
  }
  constructor(props){
    super(props);
    this.state = {
      picList: [],
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
      chooseShopImg: {
        files: [],
        showUploadBtn:true,
        upLoadImg:[],
      },
      isOpencity: false,
      name: '', /// 店名
      cityName: '休斯顿',
      city: 1, /// 城市名
      address: '',  /// 地区名
      openTimeStart: '', /// 开始时间
      openTimeEnd: '', /// 结束时间
      projectName: '', /// 项目名称
      price: '', /// 价格
      telephone: '', /// 联系电话
      detail: '', // 项目详细
      note: '', /// 购买须知
      description: '',  /// 其他说明
      commonList: [], /// 服务列表
      isOpenToast: false,
      toastText: '',
      longitude: '',
      latitude: '',
      chooseLeisureImgList: [],
      id: '',
    }
  }
  componentWillMount() {
    let parmars = this.$router.params;
    if(parmars.id) {
      this.getChangeData(parmars.id);
      this.setState({
        id: parmars.id
      })
    } else {
      if(Taro.getStorageSync('addLeisureSave') != '') {
        let obj = Taro.getStorageSync('addLeisureSave');
        this.setState({
          picList: obj.picList,
          name: obj.name,
          city: obj.city,
          address: obj.address,
          openTimeStart: obj.openTimeStart,
          openTimeEnd: obj.openTimeEnd,
          telephone: obj.telephone,
          commonList: obj.commonList,
          chooseShopImg: obj.chooseShopImg,
          cityName: obj.cityName,
          projectName: obj.projectName,
          price: obj.price,
          detail: obj.detail,
          note: obj.note,
          description: obj.description,
          longitude: Taro.getStorageSync('addLeisureAdress').longitude,
          latitude: Taro.getStorageSync('addLeisureAdress').latitude,
          chooseLeisureImgList: Taro.getStorageSync('saveLeisureImgList'),
          id: Taro.getStorageSync('changeAddLeisureId'),
        })
  
        if(parmars.obj) {
          let data = JSON.parse(decodeURIComponent(parmars.obj));
          let list = [...obj.commonList];
          if(parmars.type == 'change') {
            let i = parseInt(parmars.itemIndex);
            list[i] = data;
            this.setState({
              commonList: list,
            })
          } else {
            list.push(data);
            this.setState({
              commonList: list,
            })
          }
        }
      }
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
        
        this.setState({
          name: obj.name,
          city: obj.city,
          cityName: cityName,
          address: obj.address,
          latitude: obj.latitude,
          longitude: obj.longitude,
          openTimeStart: obj.openTimeStart,
          openTimeEnd: obj.openTimeEnd,
          price: obj.price,
          projectName: obj.projectName,
          telephone: obj.telephone,
          detail: obj.detail,
          note: obj.note,
          description: obj.description,
          commonList: obj.commonList,
          chooseLeisureImgList: obj.picList,
        })

      }
    })
  }

  // 拿到子组件上传图片的路径数组
  getOnFilesValue(fails) {
    let newObj = this.state.chooseShopImg;
    newObj.files = fails;
    this.setState({
      chooseShopImg: newObj
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

  shopNameChange(e) {
    console.log('444555666', e)
    this.setState({
      name: e.detail.value
    })
  }

  areaChange(e) {
    console.log(e)
  }

  selectCity(e) {
    this.setState({
      cityName: e.name,
      city: e.value,
      isOpencity: false,
    });
  }
  cityHandleClose() {
    this.setState({
      isOpencity: false
    });
  }

  openMap() {
    this.setState({
      isOpenToast: true,
      toastText: '正在打开地图！'
    })
    Taro.authorize({
      scope: 'scope.userLocation',
      success: (res) => {
        console.log('成功：', res)
        this.setState({
          isOpenToast: false,
          toastText: ''
        })
        this.onGetLocation();//获取位置
      },
      fail: (res) => {
        console.log('失败：', res)
      },
    })
  }

  clickCity() {
    this.setState({
      isOpencity: true,
    });
  }

  areaNameChange(e) {
    console.log('area', e)
    this.setState({
      address: e.detail.value
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

  timeStartChange(e) {
    console.log('545454', e)
    this.setState({
      openTimeStart: e.detail.value
    })
  }

  timeEndChange(e) {
    this.setState({
      openTimeEnd: e.detail.value
    })
  }

  phoneChange(e) {
    this.setState({
      telephone: e.detail.value
    })
  }
  foodTypeChange() {

  }

  saveData() {
    const {
      id,
      picList,
      name,
      city,
      address,
      openTimeStart,
      openTimeEnd,
      projectName,
      price,
      telephone,
      note,
      detail,
      description,
      commonList,
      chooseShopImg,
      cityName,
      longitude,
      latitude,
      chooseLeisureImgList,
    } = this.state;

    let obj = {
      picList,
      name,
      city,
      address,
      openTimeStart,
      openTimeEnd,
      projectName,
      price,
      telephone,
      note,
      detail,
      description,
      commonList,
      chooseShopImg,
      cityName
    }
    Taro.setStorageSync('addLeisureSave', obj);
    Taro.setStorageSync('addLeisureAdress', {longitude,latitude});
    Taro.setStorageSync('saveLeisureImgList', chooseLeisureImgList);
    Taro.setStorageSync('changeAddLeisureId', id);
  }

  goAddCoupon() {
    this.saveData();
    Taro.navigateTo({
      url: '/pagesD/pages/changeAddFuwu/index?type=add'
    })
  }

  deleteItem(index) {
    let arr = this.state.commonList;
    arr.splice(index,1);
    this.setState({
      commonList: arr,
      isOpenToast: true,
      toastText: '删除成功！'
    })
  }

  changeItem(index) {
    this.saveData();
    let obj = this.state.commonList[index];
    Taro.navigateTo({
      url: `/pagesD/pages/changeAddFuwu/index?type=change&obj=${encodeURIComponent(JSON.stringify(obj))}&itemIndex=${index}`
    })
  }

  getReturnImgSrc(img) {
    let list = [...this.state.picList];
    list.push(img)
    this.setState({
      picList: list
    })
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

  projectNameChange(e) {
    this.setState({
      projectName: e.detail.value
    })
  }

  shuomingChange(e) {
    this.setState({
      detail: e
    })
  }

  noteChange(e) {
    this.setState({
      note: e
    })
  }

  descriptionChange(e) {
    this.setState({
      description: e,
    })
  }

  deleteChooseImg(index) {
    const { chooseLeisureImgList } = this.state;
    let newList = [...chooseLeisureImgList];
    newList.splice(index,1);
    this.setState({
      chooseLeisureImgList: newList,
    })
  }

  submitClick() {
    const {
      picList,
      name,
      city,
      address,
      openTimeStart,
      openTimeEnd,
      telephone,
      price,
      description,
      detail,
      note,
      projectName,
      commonList,
      longitude,
      latitude,
      chooseLeisureImgList,
      id
    } = this.state;

    let obj = {
      id,
      categoryId: 2,
      verifyStatus: 0,
      picList: [...chooseLeisureImgList, ...picList],
      name,
      city,
      address,
      openTimeStart,
      openTimeEnd,
      telephone,
      price,
      description,
      detail,
      note,
      projectName,
      commonList,
      latitude,
      longitude,
    }
    console.log('------++++++++++', obj)
    if(name == '') {
      Taro.showToast({
        title: '请填写店名！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(address == '') {
      Taro.showToast({
        title: '请选择具体地址！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(openTimeStart == '') {
      Taro.showToast({
        title: '请选择开始营业时间！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(openTimeEnd == '') {
      Taro.showToast({
        title: '请选择结束营业时间！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(projectName == '') {
      Taro.showToast({
        title: '请填写项目名称！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(price == '') {
      Taro.showToast({
        title: '请填写价格！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(telephone == '') {
      Taro.showToast({
        title: '请填写联系电话！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(commonList.length == 0) {
      Taro.showToast({
        title: '请添加服务！',
        icon: 'none',
        mask:true,
      });
      return;
    }

    api.post('/product/update',obj).then(res => {
      if(res.data.code == 200) {
        Taro.setStorageSync('addLeisureSave', '');
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
    const { chooseLeisureImgList } = this.state;
    return (
      <View className='container'>
        <View>
            <AtForm>
              <View className='shopImgBox'>
                <View className='shopTop'>
                  <Text className='left'>请添加店面展示图片</Text>
                  <Text className='right'>(可上传1-30张图片)</Text>
                </View>
                {
                  chooseLeisureImgList.length > 0 &&
                  <View className='chooseImgList'>
                    {
                      chooseLeisureImgList.map((item,index) => {
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
                    chooseImg={this.state.chooseShopImg}
                    onFilesValue={this.getOnFilesValue.bind(this)}
                    returnImgSrc={this.getReturnImgSrc.bind(this)}
                    deleteImgSrc={this.deleteImgSrc.bind(this)}
                  />
                </View>
              </View>
              <View className='itemBox'>
                <Text className='leftPart'>店名:</Text>
                <Input
                  type='text'
                  className='shopNameInput'
                  placeholder='请输入店名'
                  value={this.state.name}
                  onChange={this.shopNameChange.bind(this)}
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
              <View className='itemBox'> 
                <Text className='leftPart'>营业时间:</Text>
                <Picker className='areaBox time' mode='time' onChange={this.timeStartChange}>
                  <View className='picker'>
                    开始时间：{this.state.openTimeStart}
                  </View>
                </Picker>
              </View>
              <View className='itemBox'> 
                <Text className='leftPart'>营业时间:</Text>
                <Picker className='areaBox time' mode='time' onChange={this.timeEndChange}>
                  <View className='picker'>
                    结束时间：{this.state.openTimeEnd}
                  </View>
                </Picker>
              </View>
              <View className='itemBox'>
                <Text className='leftPart'>项目名称:</Text>
                <Input
                  type='text'
                  className='shopNameInput'
                  placeholder='请输入名称'
                  value={this.state.projectName}
                  onChange={this.projectNameChange.bind(this)}
                />
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
                <Text className='yuan'>元</Text>
              </View>
              <View className='itemBox'>
                <Text className='leftPart'>联系电话:</Text>
                <Input
                  type='number'
                  className='shopNameInput'
                  placeholder='请输入联系电话'
                  value={this.state.telephone}
                  onChange={this.phoneChange.bind(this)}
                />
              </View>
              <View style='height: 5px;background:#f1f1f1'></View>
              <View className='textBox'>
                <Text className='title'>项目详细说明:</Text>
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
              <View style='height: 5px;background:#f1f1f1'></View>
              <View className='textBox'>
                <Text className='title'>其他说明:</Text>
                <AtTextarea
                  className='text'
                  count={false}
                  value={this.state.description}
                  onChange={this.descriptionChange.bind(this)}
                />
              </View>
              <View style='height: 5px;background:#f1f1f1'></View>
              <View className='quanBox' onClick={() => this.goAddCoupon()}>
                <Text className='leftPart'>服务</Text>
                <View className='moreBox'>
                  <Text className='more'>添加服务</Text>
                  <AtIcon value='chevron-right' size='12' color='#999'></AtIcon>
                </View>
              </View>
              <View className='youhuiList'>
                {
                  this.state.commonList.map((item,index) => {
                    return (
                      <View className='youhui'>
                        <Image className='youhuiImg' src={item.picList[0]} />
                        <View className='right'>
                          <View className='box'>
                            <Text className='title'>名称:</Text>
                            <Text className='titleName'>{item.name}</Text>
                          </View>
                          <View className='box'>
                            <Text className='title'>人数:</Text>
                            <Text className='titleName'>{item.peopleCount}</Text>
                          </View>
                          <View className='btnbox'>
                            <Button
                              className='deleteBtn'
                              onClick={() => this.deleteItem(index)}
                              type='warn'>删除
                            </Button>
                            <Button
                              className='changeBtn'
                              onClick={() => this.changeItem(index)}
                            >
                              修改
                            </Button>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
              <View style='height: 5px;background:#f1f1f1'></View>
              <AtButton className='btn' onClick={() => this.submitClick()}>确认</AtButton>
              <View style='height: 30px;background:#fff'></View>
            </AtForm>
            <AtToast
              isOpened={this.state.isOpenToast}
              text={this.state.toastText}>
            </AtToast>
        </View>
      </View>
    )
  }
}

export default ChangeAddLeisure
