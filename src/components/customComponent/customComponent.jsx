import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class CustomComponent extends Component {
  render() {
    const { title } = this.props
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }
}

export default CustomComponent
