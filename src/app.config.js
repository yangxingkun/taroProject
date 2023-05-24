export default {
  pages: [
    // "pages/index/index",
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
  // usingComponents: {
  //   'ec-canvas': './components/test/index', // 书写第三方组件的相对路径
  // },
  // usingComponents: {},
  subpackages: [
    {
      "root": "pages/mecontrol/loadingAnimate",
      "pages": [
        "index"
      ]
    }
  ],
  tabBar: {
    color: "#999999",
    selectedColor: "#000",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    // position:"bottom",
    // custom: true,
    list: [
      {
        pagePath: "pages/discover/index",
        text: "发现",
        selectedIconPath: './assets/images/tabbar_home_on.png',
        iconPath: './assets/images/tabbar_home.png',
      },
      {
        pagePath: "pages/mekong/index",
        text: "咪控",
        selectedIconPath: './assets/images/tabbar_home_on.png',
        iconPath: './assets/images/tabbar_home.png',
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        selectedIconPath: './assets/images/tabbar_home_on.png',
        iconPath: './assets/images/tabbar_home.png',

      }
    ]
  }
};
