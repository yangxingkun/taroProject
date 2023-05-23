import React ,{ Component } from "react";
// import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import "./app.scss";
// class App extends Component {
//   componentDidMount() {}

//   componentDidShow () {}

//   componentDidHide () {}

//   // this.props.children 是将要会渲染的页面
//   render() {
//     return this.props.children;
//   }
// }
// export default App;
const App = props => {
  console.log(props,"[][[]")
  return (
    <div>{props.children}</div>
  )
}
export default App
