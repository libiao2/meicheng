import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Textarea, Map } from '@tarojs/components'
import {
  AtIcon, 
  AtForm,
  AtActionSheet,
  AtActionSheetItem,
  AtButton,
  AtTextarea,
  AtToast
} from "taro-ui"
import { connect } from '@tarojs/redux'
import './index.less'
import ChooseImage from './../../../components/chooseImage'
import DetaPick from './../../../components/timePick'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))
class AddCoupon extends Component {
  config = {
    navigationBarTitleText: '美城美食365'
  }
  constructor(props){
    super(props);
    this.state = {
      chooseShopImg: {
        files: [],
        showUploadBtn:true,
        upLoadImg:[],
      },
      picList: [],
      name: '',
      detail: '', /// 说明
      note: '', /// 须知
      description: '', /// 其他说明
      groupPrice: '', /// 团购价
      price: '', /// 原价
      peopleCount: '', /// 人数
      startTime: '', /// 开始时间
      startTimeMiao: '', /// 开始时间秒数
      endTime: '', /// 结束时间
      endTimeMiao: '', /// 结束时间秒数
      isOpen: false,
      toast: '',
      pageType: '', /// 添加卡券，，，修改卡券
    }
  }
  componentWillMount() {
    let parmars = this.$router.params;
    
    if(parmars.type == 'change') {
      let obj = JSON.parse(parmars.obj);
      this.setState({
        chooseShopImg: obj.chooseShopImg,
        picList: obj.picList,
        name: obj.name,
        detail: obj.detail,
        note: obj.note,
        description: obj.description,
        groupPrice: obj.groupPrice,
        price: obj.price,
        peopleCount: obj.peopleCount,
        pageType: parmars.type,
        itemIndex: parmars.itemIndex,
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

  couponNameChange(e) {
    console.log('4334343', e)
    this.setState({
      name: e.detail.value
    })
  }

  detailChange(e){
    console.log('mmmmm',e)
    this.setState({
      detail: e
    })
  }

  shuomingChange() {

  }

  needKnowChange(e) {
    this.setState({
      note: e
    })
  }

  otherKnowChange(e) {
    this.setState({
      description: e
    })
  }

  tuanPriceChange(e) {
    let reg=/^0\.\d+$|^[1-9]+(\.\d+)?$/;
    if(!reg.test(e.detail.value)) {
      if(e.detail.value != '') {
        if(e.detail.value == 10 || e.detail.value == 100 || e.detail.value == 1000 || e.detail.value == 10000 || e.detail.value == 100000 || e.detail.value == 1000000) {
          this.setState({
            groupPrice: e.detail.value,
          })
        } else {
          this.setState({
            groupPrice: '',
          })
          Taro.showToast({
            title: '团购价填写有误！！',
            icon: 'none',
            mask:true,
          });
        }
        
      }
      
    } else {
      this.setState({
        groupPrice: e.detail.value,
      })
    }
  }

  originalPriceChange(e) {
    let reg=/^0\.\d+$|^[1-9]+(\.\d+)?$/;
    if(!reg.test(e.detail.value)) {
      if(e.detail.value != '') {
        if(e.detail.value == 10 || e.detail.value == 100 || e.detail.value == 1000 || e.detail.value == 10000 || e.detail.value == 100000 || e.detail.value == 1000000) {
          this.setState({
            price: e.detail.value,
          })
        }else {
          this.setState({
            price: '',
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
        price: e.detail.value,
      })
    }
  }

  peopleNumChange(e) {
    this.setState({
      peopleCount: e.detail.value
    })
  }

  startOnOK(e) {
    console.log('7778888889999', e)
    var T = new Date(e.current);
    console.log('tttt',T.getTime())
    this.setState({
      startTime: e.current,
      startTimeMiao: T.getTime(),
    })
  }

  endOnOK(e) {
    var T = new Date(e.current);
    console.log('tttt',T.getTime())
    this.setState({
      endTime: e.current,
      endTimeMiao: T.getTime(),
    })
  }

  getReturnImgSrc(img) {
    console.log('6565656565', img)
    let list = this.state.picList;
    list.push(img)
    this.setState({
      picList: list
    })
  }

  goAddFood() {
    const {
      picList,
      name,
      detail,
      note,
      description,
      groupPrice,
      price,
      peopleCount,
      startTime,
      endTime,
      chooseShopImg,
      pageType,
      itemIndex,
      endTimeMiao,
      startTimeMiao,
    } = this.state;
    if(picList.length == 0) {
      this.setState({
        isOpen: true,
        toast: '请上传团购图片'
      })
      return
    }
    if(name == '') {
      this.setState({
        isOpen: true,
        toast: '请填写团购名称'
      })
      return
    }
    if(groupPrice == '') {
      this.setState({
        isOpen: true,
        toast: '请填写团购价格'
      })
      return
    }
    if(price == '') {
      this.setState({
        isOpen: true,
        toast: '请填写原价格'
      })
      return
    }
    if(peopleCount == '') {
      this.setState({
        isOpen: true,
        toast: '请填写原人数'
      })
      return
    }
    if(startTime == '') {
      this.setState({
        isOpen: true,
        toast: '请选择开始时间'
      })
      return
    }
    if(endTime == '') {
      this.setState({
        isOpen: true,
        toast: '请选择结束时间'
      })
      return
    }
    if(startTimeMiao > endTimeMiao) {
      Taro.showToast({
        title: '开始时间不能早于结束时间！',
        icon: 'none',
        mask:true,
      });
      return
    }
    let obj = {
      picList,
      name,
      detail,
      note,
      description,
      groupPrice,
      price,
      peopleCount,
      startTime: new Date(startTime.replace(/-/g,'/')),
      endTime: new Date(endTime.replace(/-/g,'/')),
      chooseShopImg
    }

    Taro.navigateTo({
      url: `/pagesA/pages/addFood/index?addCouponObj=${encodeURIComponent(JSON.stringify(obj))}&type=${pageType}&itemIndex=${itemIndex}`
    })
  }


  render () {
    console.log('oooo', this.state.chooseShopImg)
    return (
      <View className='container'>
        <AtForm>
          <View className='shopImgBox'>
            <View className='shopTop'>
              <Text className='left'>请添加团购图片</Text>
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
          <View className='itemBox'>
            <Text className='leftPart'>标题名称:</Text>
            <Input
              type='text'
              className='shopNameInput'
              placeholder='请输入名称'
              value={this.state.name}
              onChange={this.couponNameChange.bind(this)}
            />
          </View>
          <View style='height: 5px;background:#f1f1f1'></View>
          <View className='textBox'>
            <Text className='title'>详细说明:</Text>
            <AtTextarea
              className='text'
              count={false}
              value={this.state.detail}
              onChange={this.detailChange.bind(this)}
            />
          </View>
          <View style='height: 5px;background:#f1f1f1'></View>
          <View className='textBox'>
            <Text className='title'>购买须知:</Text>
            <AtTextarea
              className='text'
              count={false}
              value={this.state.note}
              onChange={this.needKnowChange.bind(this)}
            />
          </View>
          <View style='height: 5px;background:#f1f1f1'></View>
          <View className='textBox'>
            <Text className='title'>其他说明:</Text>
            <AtTextarea
              className='text'
              count={false}
              value={this.state.description}
              onChange={this.otherKnowChange.bind(this)}
            />
          </View>
          <View style='height: 5px;background:#f1f1f1'></View>
          <View className='bottomBox'>
            <View className='onSmallBox'>
              <Text className='title'>团购价:</Text>
              <Input
                type='text'
                className='smallInput'
                value={this.state.groupPrice}
                onChange={this.tuanPriceChange.bind(this)}
              />
            </View>
            <View className='onSmallBox'>
              <Text className='title'>原价:</Text>
              <Input
                type='text'
                className='smallInput'
                value={this.state.price}
                onChange={this.originalPriceChange.bind(this)}
              />
            </View>
            <View className='onSmallBox'>
              <Text className='title'>人数:</Text>
              <Input
                type='number'
                className='smallInput'
                value={this.state.peopleCount}
                onChange={this.peopleNumChange.bind(this)}
              />
            </View>
          </View>
          <View className='timeBox'>
            <Text className='timeTitle'>开始时间:</Text>
            <View className='timeInputBox'>
              <DetaPick
                onOk={this.startOnOK.bind(this)} 
                initValue="2020/4/15 17:22:37"
                wrap-class="my-class" 
                select-item-class="mySelector" />
            </View>
          </View>
          <View className='timeBox'>
            <Text className='timeTitle'>结束时间:</Text>
            <View className='timeInputBox'>
              <DetaPick
                onOk={this.endOnOK.bind(this)}
                initValue="2020/4/15 17:22:37"
                wrap-class="my-class" 
                select-item-class="mySelector" />
            </View>
          </View>
          <AtButton className='btn' onClick={() => this.goAddFood()}>确认</AtButton>
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

export default AddCoupon
