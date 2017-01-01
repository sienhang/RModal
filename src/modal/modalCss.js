var ModalCss = {
   modalBg:{
	  position: 'fixed',
	  left: 0,
	  top: 0,
	  width: '100%',
	  height: '100%',
	  zIndex: 999,
	  backgroundColor: '#000',
	  opacity: 0.4,
	  animationDuration: '1s'
   },
   modalContent:{
	  position: 'absolute',
	  backgroundColor: '#fff',
	  borderRadius: '4px',
      boxShadow: '0 0 15px #423838',
	   zIndex: 1000,
      left: '50%',
      transform: 'translateX(-50%)',
      animationDuration: '1s'
   }
};

module.exports = ModalCss;