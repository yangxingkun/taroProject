import React, { useCallback } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
// import { AtButton } from "taro-ui";
// import CustomTabBar from '../custom-tab-bar'
import "./index.scss";
const Index = () => {
  // const pageCtx = Taro.getCurrentInstance().page;
  useDidShow(() => {
    // console.log(pageCtx.getTabBar(),"-=-1=-")
    // const tabbar = Taro.getTabBar(pageCtx)
    // console.log(tabbar,"-=-2=-")
    // tabbar?.setSelected(3);
    // console.log("componentDidShow1");
  });

  return <View className="wrapper">1
  {/* <CustomTabBar></CustomTabBar> */}

  </View>;
};

export default Index;
