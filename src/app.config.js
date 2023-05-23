export default {
  pages: [
    "pages/index/index",
    "pages/mekong/index",
    "pages/discover/index",
    "pages/my/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "咪控",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#000",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    position:"bottom",
    // custom: true,
    list: [
      {
        pagePath: "pages/discover/index",
        text: "发现",
        // "iconPath": "./assets/tabbar/user.png",
        // "selectedIconPath": "./assets/tabbar/user-selected.png"
      },
      {
        pagePath: "pages/mekong/index",
        text: "咪控",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",

      }
    ]
  }
};
