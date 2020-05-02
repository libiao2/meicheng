import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import {
  AtTabBar,
} from "taro-ui"
import PropTypes from 'prop-types';
import './index.less';

class Footer extends Component {
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
      current: 0
    };
  }

  handleClick(e) {
    console.log('ppppp', e)
    switch(e) {
      case 0:
        Taro.navigateTo({
          url: '/pages/home/home'
        })
        break;
      case 1:
        Taro.navigateTo({
          url: '/pages/publishInfo/publishInfo'
        })
        break;
      case 2:
        Taro.navigateTo({
          url: '/pages/home/home'
        })
        break;
      case 3:
        Taro.navigateTo({
          url: '/pages/home/home'
        })
        break;
      case 4:
        Taro.navigateTo({
          url: '/pages/home/'
        })
        break;
    }
  }
  render() {
    // const { clothing, onDeleteClothing } = this.props;
    return (
      <View className='footer'>
          <AtTabBar
            fixed
            iconSize='18'
            tabList={[
              { title: '首页', iconType: 'home',  },
              { title: '发布', iconType: 'add-circle' },
              { title: '购物车', iconType: 'shopping-cart' },
              { title: '消息', iconType: 'message', text: '100', max: '99' },
              { title: '我的', iconType: 'user' }
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </View>
    );
  }
}

export default Footer;