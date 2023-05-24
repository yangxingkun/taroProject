import React, { useCallback } from "react";
import { View, Text, Button, Input, Image } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
// import { AtButton } from "taro-ui";
// import CustomTabBar from '../custom-tab-bar'
import {
  useEnv,
  useNavigationBar,
  useModal,
  useToast,
  useRequest,
} from "taro-hooks";
import "./index.scss";
import logo from "./hook.png";
const Index = () => {
  useDidShow(() => {
    console.log("componentDidShow2");
  });
  const title = () => {
    return (
      <div>
        <div>请重新输入联系我们</div>
        <div>获取内测码</div>
      </div>
    );
  };
  const [show] = useModal({
    title: "内测码错误",
    content: "请重新输入联系我们获取内测码",
    showCancel: false,
    confirmColor: "#1890ff",
    confirmText: "我知道啦",
    mask: true,
  });
  const [showToast] = useToast({ mask: true });

  const handleModal = useCallback(() => {
    show();
    // show({ content: "不如给一个star⭐️!" }).then(() => {
    //   showToast({ title: "点击了支持!" });
    // });
  }, [show, showToast]);

  return (
    <View className="wrapper">
      <View>
        <Image className="logo" src={logo} />
        <view className="title">
          <Text>最懂车的AI助手</Text>
        </view>
        <view className="desc">
          <Text>功能内测中请输入内测码使用</Text>
        </view>
        <Input
          className="wrapper-input"
          type="text"
          placeholder="请输入内侧码"
          placeholderStyle="color:#95969F;font-size:12px"
        />
        <Button className="wrapper-button" onClick={handleModal}>
          确定
        </Button>
        <View className="mark">
          暂无内测码？ <Text className="herf">联系我们</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;
