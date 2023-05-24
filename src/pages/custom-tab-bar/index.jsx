import { useState} from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import './index.scss'
function Index(props) {
  const [state,setState]=useState({
    selected: 0,
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        pagePath: "/pages/discover/index",
        // selectedIconPath: '@/assets/images/tabbar_home_on.png',
        // iconPath: '@/assets/images/tabbar_home.png',
        text: '发现'
      },
      {
        pagePath: "/pages/mekong/index",
        // selectedIconPath: '@/assets/images/tabbar_cate_on.png',
        // iconPath: '@/assets/images/tabbar_cate.png',
        text: '咪控'
      },
      {
        pagePath: "/pages/my/index",
        // selectedIconPath: '@/assets/images/tabbar_cart_on.png',
        // iconPath: '@/assets/images/tabbar_cart.png',
        text: '我的'
      },
    ]

  })
  const setSelected= (idx)=> {
    setState((pre)=>({...pre,selected: idx}))
  }
  const switchTab=(index, url)=>{
    setSelected(index)
    Taro.switchTab({ url })
  }
  return (
    <CoverView className='tab-bar'>
    <CoverView className='tab-bar-border'></CoverView>
    {state.list.map((item, index) => {
      return (
        <CoverView key={index} className='tab-bar-item' onClick={()=>switchTab( index, item.pagePath)}>
          {/* <CoverImage src={state.selected === index ? item.selectedIconPath : item.iconPath} /> */}
          <CoverView style={{ color: state.selected === index ? state.selectedColor : state.color }}>{item.text}</CoverView>
        </CoverView>
      )
    })}
  </CoverView>
  )
}
export default Index



