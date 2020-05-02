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
class AddBuluo extends Component {
  config = {
    navigationBarTitleText: '部落'
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
      detail: '',
      isOpen: false,
      toast: '',
    }
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
    console.log('ffff', fails)
    this.setState({
      foodImgList: fails
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

  detailChange(e) {
    this.setState({
      detail: e,
    })
  }

  goAdd() {
    const {
      picList,
      name,
      detail,
    } = this.state;

    if(picList.length == 0) {
      this.setState({
        isOpen: true,
        toast: '请上传部落图片'
      })
      return
    }

    if(name == '') {
      this.setState({
        isOpen: true,
        toast: '请上传部落名称'
      })
      return
    }

    if(detail == '') {
      this.setState({
        isOpen: true,
        toast: '请填写详细信息'
      })
      return
    }

    let obj = {
      categoryId: 6,
      verifyStatus: 0,
      picList,
      name,
      detail,
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
    return (
      <View className='container'>
        <AtForm>
          <View className='shopImgBox'>
            <View className='shopTop'>
              <Text className='left'>请添加服务图片</Text>
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
            <Text className='leftPart'>标题名称:</Text>
            <Input
              type='text'
              className='shopNameInput'
              placeholder='请输入名称'
              value={this.state.name}
              onChange={this.foodNameChange.bind(this)}
            />
          </View>
          <View className='typeBox'>
            <View className='typeBoxItem'>
              <Text>全部</Text>
            </View>
          </View>
          <View style='height: 5px;background:#f1f1f1'></View>
              <View className='textBox'>
                <Text className='title'>部落详情:</Text>
                <AtTextarea
                  className='text'
                  count={false}
                  value={this.state.detail}
                  onChange={this.detailChange.bind(this)}
                />
              </View>
          <AtButton className='btn' onClick={() => this.goAdd()}>确认</AtButton>
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

export default AddBuluo
