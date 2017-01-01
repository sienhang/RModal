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