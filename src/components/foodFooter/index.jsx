import Taro, { Component } from '@tarojs/taro';
import { View, Button, Image } from '@tarojs/components';
import {
  AtIcon,
  AtToast,
  AtActionSheet,
  AtActionSheetItem
} from "taro-ui"
import PropTypes from 'prop-types';
import api from './../../utils/api'
import './index.less';

class FoodFooter extends Component {
  static propTypes = {
    clothing: PropTypes.array,
    deleteClothing: PropTypes.func,
  };

  static defaultProps = {
    clothing: [],
    deleteClothing: function() {},
  };

  constructor(props){
    super(props);
    this.state = {
      current: 0,
      typeList: [
        {
          title: '点赞',
          pic: require('./../../image/noDianzan.png')
        },
        {
          title: '购物车',
          pic: require('./../../image/buyCar.png')
        },
        {
          title: '分享',
          pic: require('./../../image/share.png')
        },
        {
          title: '菜单',
          pic: require('./../../image/menu.png')
        },
      ],
      isOpenToast: false,
      toastText: '',
      openShare: false
    };
  }

  thumbUp() {
    const {shopId} = this.props;
    api.post('/product/upvote',{id: shopId}).then(res => {
      console.log('ddddd', res)
      this.setState({
        isOpenToast: true,
        toastText: '点赞成功！'
      })
    })
  }

  onShareAppMessage() {
    console.log('nnnmmm')
    return {
      title: '分享',
      path: this.props.url,
      success: function (res) {
        console.log('成功', res)
      }
    }
  }

  handleClick(e) {
    const { shopId, shopName } = this.props;
    console.log('???????????????', shopName)
    switch(e) {
      case 0:
        this.thumbUp();
        break;
      case 1:
        Taro.switchTab({
          url: '/pages/car/index'
        })
        break;
      case 2:
        this.setState({
          openShare: true
        })
        break;
      case 3:
        Taro.navigateTo({
          url: `/pagesB/pages/menu/index?list=${encodeURIComponent(JSON.stringify(this.props.list))}&shopId=${shopId}&shopName=${shopName}`
        })
        break;
    }
  }

  handleClose() {
    this.setState({
      openShare: false
    });
  }

  shareFriend() {
    const { shopId } = this.props;
    Taro.showToast({
      title: '开始保存图片，请稍后~~',
      icon: 'none',
      mask:true,
    })
    api.post('/product/shareProd',{id: shopId}).then(res => {
      console.log('gggggg', res)
      if(res.data.code == 200) {
        let imgUrl = res.data.data;

        Taro.downloadFile({
          url: imgUrl,
          success: function (res) {
            console.log('UUUYYYYY', res);
            if (res.statusCode === 200) {
              Taro.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success(res) {
                  Taro.showToast({
                    title: '保存图片成功！',
                    icon: 'none',
                    mask:true,
                  })
                },
                fail(res) {
                  Taro.showToast({
                    title: '保存图片失败！',
                    icon: 'none',
                    mask:true,
                  })
                }
              })
            }
          }
        })
      }
    })
  }

  selectArea(){}


  render() {
    const { openShare } = this.state;
    const { isDian } = this.props;
    return (
      <View className='footer'>
        <View className='box'>
          {
            this.state.typeList.map((item, index) => {
              return (
                <View className='item' onClick={() => this.handleClick(index)}>
                  <View className='boxItem'>
                    <Image src={index == 0 && isDian ? require('./../../image/dianzan.png') : item.pic } className='iconImg' />
                    <Text>{item.title}</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
        <AtActionSheet isOpened={openShare} onClose={() => this.handleClose()}>
          <AtActionSheetItem key={index} onClick={() => this.selectArea()}>
            <View className='shareTitle'>
              <Text>分享</Text>
            </View>
            <View className='shareBox'>
              <Button className='shareItem' openType='share'>
                <View className='wechatBox'>
                  <Image src={require('./../../image/wechatP.png')} className='wechatIconImg' />
                  <Text>微信好友</Text>
                </View>
              </Button>
              <Button className='shareItem' onClick={() => this.shareFriend()}>
                <View className='wechatBox'>
                  <Image src={require('./../../image/wechatP.png')} className='wechatIconImg' />
                  <Text>朋友圈</Text>
                </View>
              </Button>
            </View>
          </AtActionSheetItem>
        </AtActionSheet>
        <AtToast
          isOpened={this.state.isOpenToast}
          text={this.state.toastText}>
        </AtToast>
      </View>
    );
  }
}

export default FoodFooter;