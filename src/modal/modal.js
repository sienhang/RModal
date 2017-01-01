var React = require('react');
var insertKeyframesRule = require('react-kit/insertKeyframesRule');
var ModalCss = require('./modalCss');
var _ ={};
_.extend = require('lodash/extend');

var Modal = React.createClass({
   getDefaultProps:function(){
      return {
         width:500,
         height:250,
         top:100,
         animate:'slide'       
      };
   },   
   getInitialState:function(){
       return {
         show:this.props.show,
         animateIn:this.props.show
       };
   },   
   componentWillReceiveProps:function(nextProps){
      if(!this.props.show && nextProps.show){
         this.setState({
            show:true,
            animateIn:true
         });        
      }
      if(this.props.show && !nextProps.show){
         var t=this;
         t.setState({
            animateIn:false
         });
         var func=function(){
            t.setState({
               show:false
            });
            t.refs.mymodal.removeEventListener("animationend",func); 
         };
         t.refs.mymodal.addEventListener("animationend",func);                 
      }
   },
   setModalBg:function(){
      if(this.state.animateIn){
         var bganimate = insertKeyframesRule({'0%':{opacity: 0},'100%': {opacity: 0.4}});
      }
      if(!this.state.animateIn){
         var bganimate = insertKeyframesRule({'0%':{opacity: 0.4},'100%': {opacity: 0}});
      }
      return <div style={_.extend({},ModalCss.modalBg,{animationName:bganimate})}></div>;
   },
   setModalContent:function(){
      var modaltop = '-'+this.props.height+'px';
      if(this.state.animateIn){
         var animateName = this.props.animate=='slide' ? insertKeyframesRule({'0%':{opacity:0,top:modaltop},'100%':{opacity:1,top: this.props.top}}):
                           this.props.animate=='fade' ? insertKeyframesRule({'0%':{opacity: 0},'100%': {opacity: 1}}): 
                           'none';  
      }
      if(!this.state.animateIn){
         var animateName = this.props.animate=='slide' ? insertKeyframesRule({'0%':{opacity:1,top:this.props.top},'100%':{opacity:0,top: modaltop}}):
                           this.props.animate=='fade' ? insertKeyframesRule({'0%':{opacity: 1},'100%': {opacity: 0}}): 
                           'none';
      }
      var modalstyle={width:this.props.width,height:this.props.height,top:this.props.top,animationName:animateName};
      return (
         <div ref="mymodal" style={_.extend({},ModalCss.modalContent,modalstyle)}>
           {this.props.children}
         </div>
      );
   },
	render:function(){
      return (
			<div style={{display:this.state.show?'block':'none'}}>
            {this.setModalBg()}        
            {this.setModalContent()}
			</div>
		);
	}
});

module.exports = Modal;
