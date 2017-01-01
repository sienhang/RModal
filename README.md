# Modal模态框组件

## 一、运行Demo

1. npm install
2. gulp watch

有些时候国内npm源访问比较慢，那么推荐使用cnpm。

1. npm install cnpm -g
2. cnpm install
3. gulp watch

## 二、用法Usage

##### 详细实例见demo

    var React = require('react');
    var ReactDOM = require('react-dom');
    var Modal = require('../src/modal/modal');
    var App = React.createClass({
        getInitialState:function(){ //通过改变show的状态来控制模态框的弹出和关闭
           return {show:false};
        },
        handleOpen:function(){
           this.setState({show:true});
        },
        handleClose:function(){
           this.setState({show:false});
        },  
        render: function(){
          var btnOpen={width:140,height:50,margin:'15px'};  //弹出模态框按钮样式
          var btnClose={width:120,height:30,margin:'15px'}; //关闭模态框按钮样式
          return (
            <div>
              <button style={btnOpen} onClick={this.handleOpen}>点击弹出模态框</button> 
              <Modal 
                 width={400}     //设置模态框的宽度
                 height={250}    //设置模态框的高度
                 top={150}       //设置模态框距离可视窗口上方的距离
                 animate="slide" //设置模态框弹出和关闭的动画效果 
                 show={this.state.show} //通过show属性值的改变来控制模态框的弹出和关闭
              > 
                 <div style={{margin:'15px',fontSize:'16px'}}>这是模态框</div>
                 <button style={btnClose} onClick={this.handleClose}>点击关闭模态框</button>
              </Modal>
            </div>
          );
        }
    });
    ReactDOM.render(<App />, document.getElementById('AppContainer'));
## 三、API

1. Modal参数解析

   * width:      配置模态框的宽度，是一个数值，默认单位为‘px’；

   * height:     配置模态框的高度，是一个数值，默认单位为‘px’；

   * top:          配置模态框距离可视窗口上方的距离，是一个数值，默认单位为‘px’；

   * animate: 配置模态框弹出和关闭的动画效果，是一个字符串，‘slide’表示滑动效果，‘fade’表示渐隐效果；

   * show:      通过该属性值来控制模态框的显示和隐藏，这里是this.state.show，它是一个布尔值，为true时 

     ​                显示模态框，为false时隐藏模态框。

   **PS：**

   ​     将需要触发打开模态框的元素绑定this.handleOpen事件；
   ​     将需要触发关闭模态框的元素绑定this.handleClose事件；
   ​     模态框中的内容在<Modal></Modal>标签中编写。

2. Modal默认参数配置

   以下为模态框组件的默认配置，在使用中可根据需要更改配置：

   show属性的值是通过触发事件来改变的，默认为false。

       {   
          width:500,
          height:250,
          top:100,
          animate:'slide'       
        };











