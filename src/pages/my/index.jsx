import React, { useCallback } from "react";
import { View, Text, Button,Input, Image } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
// import { AtButton } from "taro-ui";
// import CustomTabBar from '../custom-tab-bar'
import "./index.scss";
const Index = () => {
  const pageCtx = Taro.getCurrentInstance().page;
  useDidShow(() => {
    console.log(pageCtx.getTabBar(),"-=-1=-")
    const tabbar = Taro.getTabBar(pageCtx)
    console.log(tabbar,"-=-2=-")
    tabbar?.setSelected(3);
    console.log("componentDidShow");
  });

  return <View className="wrapper">3
  {/* <CustomTabBar></CustomTabBar> */}
  <View className='example-body'>
        <Text>可以自动聚焦的 input</Text>
          <Input type='text' placeholder='将会获取焦点' focus/>
          <Text>控制最大输入长度的 input</Text>
          <Input type='text' placeholder='最大输入长度为 10' maxLength='10'/>
          <Text>数字输入的 input</Text>
          <Input type='number' placeholder='这是一个数字输入框'/>
          <Text>密码输入的 input</Text>
          <Input type='password' password placeholder='这是一个密码输入框'/>
          <Text>带小数点的 input</Text>
          <Input type='digit' placeholder='带小数点的数字键盘'/>
          <Text>身份证输入的 input</Text>
          <Input type='idcard' placeholder='身份证输入键盘'/>
          <Text>控制占位符颜色的 input</Text>
          <Input type='text' placeholder='占位符字体是红色的' placeholderStyle='color:red'/>
      </View>
  </View>;
};

export default Index;
