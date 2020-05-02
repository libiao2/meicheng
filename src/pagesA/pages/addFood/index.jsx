import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Picker, Button } from '@tarojs/components'
import {
  AtIcon, 
  AtForm,
  AtActionSheet,
  AtActionSheetItem,
  AtButton,
  AtToast
} from "taro-ui"
import { connect } from '@tarojs/redux'
import './index.less'
import ChooseImage from './../../../components/chooseImage'
import api from './../../../utils/api'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))
class AddFood extends Component {
  config = {
    navigationBarTitleText: '美城美食365'
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
      foodType: [
        {
          value: 'chuan',
          label: '川菜',
          isChoose: false,
        },
        {
          value: 'huo',
          label: '火锅',
          isChoose: false,
        },
        {
          value: 'xiang',
          label: '湘菜',
          isChoose: false,
        },
        {
          value: 'ri',
          label: '日本料理',
          isChoose: false,
        },
        {
          value: 'han',
          label: '韩国料理',
          isChoose: false,
        },
        {
          value: 'nai',
          label: '奶茶',
          isChoose: false,
        },
        {
          value: 'kao',
          label: '烤鱼',
          isChoose: false,
        },
        {
          value: 'chuanchuan',
          label: '串串',
          isChoose: false,
        },
        {
          value: 'wanghong',
          label: '网红潮店',
          isChoose: false,
        },
        {
          value: 'yangrou',
          label: '羊肉火锅',
          isChoose: false,
        },
      ],
      serveList: [
        {
          value: 'mian',
          label: '免费停车',
          isChoose: false,
        },
        {
          value: 'wai',
          label: '外卖',
          isChoose: false,
        },
        {
          value: 'bao',
          label: '包间',
          isChoose: false,
        },
        {
          value: 'ke',
          label: '可刷卡',
          isChoose: false,
        },
        {
          value: 'dian',
          label: '电视',
          isChoose: false,
        },
        {
          value: 'chong',
          label: '充电宝',
          isChoose: false,
        },
        {
          value: 'ying',
          label: '婴儿车',
          isChoose: false,
        },
        {
          value: 'ke',
          label: '可退款',
          isChoose: false,
        },
        {
          value: 'sha',
          label: '沙发位',
          isChoose: false,
        },
        {
          value: 'kawei',
          label: '卡座',
          isChoose: false,
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
      telephone: '', /// 联系电话
      takeaway: true, /// 是否外卖
      takeawayFee: '', /// 外卖配送费
      chooseFoodList: [], /// 食物类型
      groupList: [], /// 团购列表
      hotList: [], /// 推荐菜
      commonList: [],
      isOpenToast: false,
      toastText: '',
      longitude: '',
      latitude: '',
    }
  }
  componentWillMount() {
    let parmars = this.$router.params;

    if(Taro.getStorageSync('addFoodInfo') != '') {
      let obj = JSON.parse(Taro.getStorageSync('addFoodInfo'));
      console.log('5555%%%%%', Taro.getStorageSync('chooseShopImg'))
      this.setState({
        picList: obj.picList,
        foodType: obj.foodType,
        serveList: obj.serveList,
        name: obj.name,
        city: obj.city,
        address: obj.address,
        openTimeStart: obj.openTimeStart,
        openTimeEnd: obj.openTimeEnd,
        telephone: obj.telephone,
        takeaway: obj.takeaway,
        takeawayFee: obj.takeawayFee,
        groupList: obj.groupList,
        hotList: obj.hotList,
        chooseShopImg: Taro.getStorageSync('chooseShopImg'),
        commonList: Taro.getStorageSync('commonList'),
        cityName: Taro.getStorageSync('cityName'),
        longitude: Taro.getStorageSync('addressInfo').longitude,
        latitude: Taro.getStorageSync('addressInfo').latitude,
      })

      if(parmars.addCouponObj) {
        let data = JSON.parse(decodeURIComponent(parmars.addCouponObj));
        let list = [...obj.groupList];
        if(parmars.type == 'change') {
          let i = parseInt(parmars.itemIndex);
          list[i] = data;
          this.setState({
            groupList: list,
          })
        } else {
          list.push(data);
          this.setState({
            groupList: list,
          })
        }
      }

      if(parmars.addHotFoodObj) {
        let data = JSON.parse(decodeURIComponent(parmars.addHotFoodObj));
        let list = [...obj.hotList];
        if(parmars.type == 'change') {
          let i = parseInt(parmars.itemIndex);
          list[i] = data;
          this.setState({
            hotList: list,
          })
        } else {
          list.push(data);
          this.setState({
            hotList: list,
          })
        }
        
      }

      if(parmars.addFoodObj) {
        let data = JSON.parse(decodeURIComponent(parmars.addFoodObj));
        let list = [...Taro.getStorageSync('commonList')];
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

  chooseWai(e) {
    this.setState({
      takeaway: e
    })
  }

  deliverFeeChange(e) {
    let reg=/^0\.\d+$|^[1-9]+(\.\d+)?$/;
    if(!reg.test(e.detail.value)) {
      if(e.detail.value != '') {
        if(e.detail.value == 10 || e.detail.value == 100 || e.detail.value == 1000 || e.detail.value == 10000 || e.detail.value == 100000 || e.detail.value == 1000000) {
          this.setState({
            takeawayFee: e.detail.value,
          })
        } else {
          this.setState({
            takeawayFee: '',
          })
          Taro.showToast({
            title: '外卖费填写有误！！',
            icon: 'none',
            mask:true,
          });
        }
        
      }
    } else {
      this.setState({
        takeawayFee: e.detail.value,
      })
    }
    
  }
  foodTypeChange() {

  }

  saveData() {
    const {
      picList,
      foodType,
      serveList,
      name,
      city,
      address,
      openTimeStart,
      openTimeEnd,
      telephone,
      takeaway,
      takeawayFee,
      groupList,
      hotList,
      commonList,
      chooseShopImg,
      cityName,
      latitude,
      longitude,
    } = this.state;

    let obj = {
      picList,
      foodType,
      serveList,
      name,
      city,
      address,
      openTimeStart,
      openTimeEnd,
      telephone,
      takeaway,
      takeawayFee,
      groupList,
      hotList,
    }
    console.log('888889999', chooseShopImg)
    Taro.setStorageSync('addFoodInfo', JSON.stringify(obj));
    Taro.setStorageSync('chooseShopImg', chooseShopImg); /// 店铺图片
    Taro.setStorageSync('commonList', commonList);
    Taro.setStorageSync('cityName', cityName);
    Taro.setStorageSync('addressInfo', {latitude,longitude});
  }

  goAddCoupon() {
    this.saveData();
    
    Taro.navigateTo({
      url: '/pagesA/pages/addCoupon/index?type="add"'
    })
  }

  typeChoose(index) {
    let newList = this.state.foodType;
    newList[index].isChoose = !newList[index].isChoose;
    this.setState({
      foodType: newList,
    })
    console.log('hhhhhhhhhh', this.state.foodType)
  }

  hasFuwu(index) {
    let newList = this.state.serveList;
    newList[index].isChoose = !newList[index].isChoose;
    this.setState({
      serveList: newList
    })
  }

  getReturnImgSrc(img) {
    console.log('6565656565', img, this.state.picList);
    let list = [...this.state.picList];
    list.push(img)
    this.setState({
      picList: list
    })
  }

  goAddcai(index) {
    this.saveData();

    Taro.navigateTo({
      url: `/pagesA/pages/addFoodInfo/index?index=${index}&type=add`
    })
    
  }

  deleteCoupon(index) {
    let arr = this.state.groupList;
    arr.splice(index,1);
    this.setState({
      groupList: arr,
      isOpenToast: true,
      toastText: '删除成功！'
    })
  }

  changeCoupon(index) {
    this.saveData();
    let obj = this.state.groupList[index];
    Taro.navigateTo({
      url: `/pagesA/pages/addCoupon/index?type=change&obj=${JSON.stringify(obj)}&itemIndex=${index}`
    })
  }

  deleteHotItem(index) {
    let arr = this.state.hotList;
    arr.splice(index,1);
    this.setState({
      hotList: arr,
      isOpenToast: true,
      toastText: '删除成功！'
    })
  }

  changeHot(e, index) {
    this.saveData();
    let obj = this.state.hotList[index];
    Taro.navigateTo({
      url: `/pagesA/pages/addFoodInfo/index?index=${e}&type=change&obj=${JSON.stringify(obj)}&itemIndex=${index}`
    })
  }

  changeCaidan(e, index) {
    this.saveData();
    let obj = this.state.commonList[index];
    Taro.navigateTo({
      url: `/pagesA/pages/addFoodInfo/index?index=${e}&type=change&obj=${JSON.stringify(obj)}&itemIndex=${index}`
    })
  }

  deleteCommonItem(index) {
    let arr = this.state.commonList;
    arr.splice(index,1);
    this.setState({
      commonList: arr,
      isOpenToast: true,
      toastText: '删除成功！'
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
      foodType,
      serveList,
      // serviceSupportList,
      // productTypeList,
      takeaway,
      takeawayFee,
      hotList,
      groupList,
      commonList,
      latitude,
      longitude,
    } = this.state;
    let productTypeList = [];
    foodType.forEach((item, index) => {
      if(item.isChoose) {
        productTypeList.push(item.label);
      }
    })

    let serviceSupportList = [];
    serveList.forEach((item, index) => {
      if(item.isChoose) {
        serviceSupportList.push(item.label);
      }
    })
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
    if(telephone == '') {
      Taro.showToast({
        title: '请填写联系电话！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    if(takeaway && takeawayFee == '') {
      Taro.showToast({
        title: '请填写外卖费用！',
        icon: 'none',
        mask:true,
      });
      return;
    }

    if(hotList.length == 0) {
      Taro.showToast({
        title: '请添加推荐菜单！',
        icon: 'none',
        mask:true,
      });
      return;
    }

    if(commonList.length == 0) {
      Taro.showToast({
        title: '请添加菜单！',
        icon: 'none',
        mask:true,
      });
      return;
    }
    let obj = {
      categoryId: 1,
      verifyStatus: 0,
      picList,
      name,
      city,
      address,
      openTimeStart,
      openTimeEnd,
      telephone,
      takeaway,
      takeawayFee,
      hotList,
      groupList,
      commonList,
      productTypeList,
      serviceSupportList,
      longitude,
      latitude,
    }
    api.post('/product/create',obj).then(res => {
      if(res.data.code == 200) {
        Taro.setStorageSync('addFoodInfo', '');
        Taro.setStorageSync('chooseShopImg', ''); /// 店铺图片
        Taro.setStorageSync('commonList', '');
        Taro.setStorageSync('cityName', '');
        Taro.setStorageSync('addressInfo', '');
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
    const { serveList } = this.state;
    return (
      <View className='container'>
        <View>
            <AtForm>
              <View className='shopImgBox'>
                <View className='shopTop'>
                  <Text className='left'>请添加店面展示图片</Text>
                  <Text className='right'>(可上传1-30张图片)</Text>
                </View>
                <View className='imgBox'>
                  <ChooseImage
                    chooseImg={this.state.chooseShopImg}
                    onFilesValue={this.getOnFilesValue.bind(this)}
                    returnImgSrc={this.getReturnImgSrc.bind(this)}
                    deleteImgSrc={this.deleteImgSrc.bind(this)}
                  />
                </View>
              </View>
              <Text className='contentTitle'>店面基本信息</Text>
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
                <Text className='leftPart'>联系电话:</Text>
                <Input
                  type='number'
                  className='shopNameInput'
                  placeholder='请输入联系电话'
                  value={this.state.telephone}
                  onChange={this.phoneChange.bind(this)}
                />
              </View>
              <View className='itemBox'>
                <Text className='leftPart'>外卖:</Text>
                <View className='radioGroup'>
                  <View
                    className='radioBox'
                    onClick={() => this.chooseWai(true)}
                  >
                    <View className={`yuan ${this.state.takeaway ? "isChoose" : null}`}></View>
                    <Text>是</Text>
                  </View>
                  <View
                    className='radioBox'
                    onClick={() => this.chooseWai(false)}
                  >
                    <View className={`yuan ${!this.state.takeaway ? "isChoose" : null}`}></View>
                    <Text>否</Text>
                  </View>
                </View>
              </View>
              {
                this.state.takeaway &&
                <View className='itemBox'>
                  <Text className='leftPart'>外卖配送费:</Text>
                  <Input
                    type='text'
                    className='shopNameInput'
                    placeholder='请输入配送费'
                    value={this.state.takeawayFee}
                    onChange={this.deliverFeeChange.bind(this)}
                  />
                </View>
              }
              <View className='leixing'>
                <Text className='title'>类型</Text>
                <View className='allChoose'>
                  {
                    this.state.foodType.map((item, index) => {
                      return (
                        <View
                          className='oneChoose'
                          key={item.value} onClick={() => this.typeChoose(index)}>
                          <View
                            className={`fang ${item.isChoose ? "typeChooseClick" : null}`}
                          />
                          <Text>{item.label}</Text>
                        </View>
                      )
                    })
                  }
                </View>
              </View>
              <View style='height: 5px;background:#f1f1f1'></View>
              <View className='quanBox' onClick={() => this.goAddCoupon()}>
                <Text className='leftPart'>优惠券</Text>
                <View className='moreBox'>
                  <Text className='more'>添加优惠券</Text>
                  <AtIcon value='chevron-right' size='12' color='#999'></AtIcon>
                </View>
              </View>
              <View className='youhuiList'>
                {
                  this.state.groupList.map((item, index) => {
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
                              type='warn'
                              onClick={() => this.deleteCoupon(index)}
                            >
                                删除
                            </Button>
                            <Button
                              className='changeBtn'
                              onClick={() => this.changeCoupon(index)}
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
              <View className='quanBox' onClick={() => this.goAddcai(1)}>
                <Text className='leftPart'>推荐菜</Text>
                <View className='moreBox'>
                  <Text className='more'>添加推荐菜</Text>
                  <AtIcon value='chevron-right' size='12' color='#999'></AtIcon>
                </View>
              </View>
              <View className='youhuiList'>
                {
                  this.state.hotList.map((item, index) => {
                    return (
                      <View className='youhui'>
                        <Image className='youhuiImg' src={item.picList[0]} />
                        <View className='right'>
                          <View className='box'>
                            <Text className='title'>名称:</Text>
                            <Text className='titleName'>{item.name}</Text>
                          </View>
                          <View className='box'>
                            <Text className='title'>价格:</Text>
                            <Text className='titleName'>{item.price}</Text>
                          </View>
                          <View className='btnbox'>
                            <Button
                              className='deleteBtn'
                              onClick={() => this.deleteHotItem(index)}
                              type='warn'>删除</Button>
                            <Button
                              onClick={() => this.changeHot(1, index)}
                              className='changeBtn'>修改</Button>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
              <View style='height: 5px;background:#f1f1f1'></View>
              <View className='leixing'>
                <Text className='title'>服务支持</Text>
                <View className='allChoose'>
                  {
                    serveList.map((item, index) => {
                      return (
                        <View
                          onClick={() => this.hasFuwu(index)}
                          className='oneChoose'
                          key={item.value}>
                          <View className={`fang ${item.isChoose ? "typeChooseClick" : null}`} />
                          <Text>{item.label}</Text>
                        </View>
                      )
                    })
                  }
                </View>
              </View>
              <View style='height: 5px;background:#f1f1f1'></View>
              <View className='quanBox' onClick={() => this.goAddcai(2)}>
                <Text className='leftPart'>上传菜单</Text>
                <View className='moreBox'>
                  <Text className='more'>添加菜单</Text>
                  <AtIcon value='chevron-right' size='12' color='#999'></AtIcon>
                </View>
              </View>
              <View className='youhuiList'>
                {
                  this.state.commonList.map((item, index) => {
                    return (
                      <View className='youhui'>
                        <Image className='youhuiImg' src={item.picList[0]} />
                        <View className='right'>
                          <View className='box'>
                            <Text className='title'>名称:</Text>
                            <Text className='titleName'>{item.name}</Text>
                          </View>
                          <View className='box'>
                            <Text className='title'>价格:</Text>
                            <Text className='titleName'>{item.price}</Text>
                          </View>
                          <View className='btnbox'>
                            <Button 
                              className='deleteBtn'
                              onClick={() => this.deleteCommonItem(index)}
                              type='warn'>删除</Button>
                            <Button 
                              className='changeBtn'
                              onClick={() => this.changeCaidan(2, index)}
                            >修改</Button>
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
              duration={2000}
            </AtToast>
        </View>
      </View>
    )
  }
}

export default AddFood
