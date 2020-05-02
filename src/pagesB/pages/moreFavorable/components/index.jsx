import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import {
  AtCountdown,
} from "taro-ui"
export default class Time extends Component {

  onTimeUp() {}

  render () {
    const { startT,endT } = this.props;
    let start = new Date(startT);
    let staerSec = start.getTime()/1000;
    let end = new Date(endT);
    let endSec = end.getTime()/1000;
    let myTime = parseFloat(endSec - staerSec);
    return (
      <AtCountdown
        format={{ hours: ':', minutes: ':', seconds: '' }}
        seconds={myTime}
        onTimeUp={this.onTimeUp.bind(this)}
      />
    )
  }
}