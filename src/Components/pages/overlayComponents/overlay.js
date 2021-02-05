import React, { Component } from 'react';
// import ResponsiveModal from "react-responsive-modal";
import FlipClock from './flipClock.js';

class Overlay extends Component {
  render() {
    // const { setModalVisible, modalVisible } = props;
    return (
      // <ResponsiveModal
      //   open={modalVisible}
      //   onClose={() => setModalVisible(false)}
      //   styles={styles}
      //   animationDuration={1000}
      //   focusTrapped={true}
      //   closeIconSize={40}
      //   showCloseIcon={true}
      // >
      <div className="overlay container-fluid">
        <div id="flipClock">
          <FlipClock />
        </div>
      </div>
      // </ResponsiveModal>
    );
  }
}

export default Overlay;
