import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Textarea, Map } from '@tarojs/components'
import {
  AtToast, 
  AtForm,
  AtActionSheet,
  AtActionSheetItem,
  AtButton,
  AtTextarea
} from "taro-ui"
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../../actions/counter'
import './index.less'
import ChooseImage from './../../../components/chooseImage'
import api from './../../../utils/api'


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
class AddFoodInfo extends Component {
  config = {
    navigationBarTitleText: '美城美食365'
  }
  constructor(props){
    super(props);
    this.state = {
      foodImg:{
        files: [],
        showUploadBtn:true,
        upLoadImg:[],
      },
      picList: [],
      name: '',
      price: '',
      detail: '',
      isOpen: false,
      toast: '',
      type: '',
      pageType: '', /// 添加，，，修改
      itemIndex: '',
    }
  }
  componentWillMount() {
    let parmars = this.$router.params;
    this.setState({
      type: parmars.index,
    })
    if(parmars.type == 'change') {
      let obj = JSON.parse(parmars.obj);
      console.log('))))))))', obj)
      this.setState({
        foodImg: obj.foodImg,
        picList: obj.picList,
        name: obj.name,
        price: obj.price,
        detail: obj.detail,
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
    let newObj = this.state.foodImg;
    newObj.files = fails;
    this.setState({
      foodImg: newObj
    })
  }

  deleteImgSrc(index) {
    let newList = this.state.picList;
    newList.splice(newList[index],1) // 删除已上传的图片地址
    this.setState({
      picList: newList
    })
  }

  foodNameChange(e) {
    this.setState({
      name: e.detail.value
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

  shuomingChange(e) {
    this.setState({
      detail: e
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
      price,
      type,
      foodImg,
      pageType,
      itemIndex
    } = this.state;

    if(picList.length == 0) {
      Taro.showToast({
        title: '请上传菜品图片',
        icon: 'none',
        mask:true,
      });
      return
    }

    if(name == '') {
      Taro.showToast({
        title: '请上传菜品名称',
        icon: 'none',
        mask:true,
      });
      return
    }

    if(detail == '') {
      Taro.showToast({
        title: '请填写详细信息',
        icon: 'none',
        mask:true,
      });
      return
    }

    if(price == '') {
      Taro.showToast({
        title: '请填写菜品价格',
        icon: 'none',
        mask:true,
      });
      return
    }

    let obj = {
      picList,
      name,
      detail,
      price,
      foodImg
    }
    console.log('&&&&&&&&&&&&&&&', obj)
    if(type == 1) {
      Taro.navigateTo({
        url: `/pagesA/pages/addFood/index?addHotFoodObj=${encodeURIComponent(JSON.stringify(obj))}&type=${pageType}&itemIndex=${itemIndex}`
      })
    } else {
      Taro.navigateTo({
        url: `/pagesA/pages/addFood/index?addFoodObj=${encodeURIComponent(JSON.stringify(obj))}&type=${pageType}&itemIndex=${itemIndex}`
      })
    }
  }


  render () {
    return (
      <View className='container'>
        <AtForm>
          <View className='shopImgBox'>
            <View className='shopTop'>
              <Text className='left'>请添加菜品图片</Text>
              <Text className='right'>(可上传1-30张图片)</Text>
            </View>
            <View className='imgBox'>
              <ChooseImage
                chooseImg={this.state.foodImg}
                onFilesValue={this.getOnFilesValue.bind(this)}
                returnImgSrc={this.getReturnImgSrc.bind(this)}
                deleteImgSrc={this.deleteImgSrc.bind(this)}
              />
            </View>
          </View>
          <View className='itemBox'>
            <Text className='leftPart'>菜品名称:</Text>
            <Input
              type='text'
              className='shopNameInput'
              placeholder='请输入名称'
              value={this.state.name}
              onChange={this.foodNameChange.bind(this)}
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
            <Text className='rightText'>元</Text>
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

export default AddFoodInfo
