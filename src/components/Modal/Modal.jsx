import { Component } from "react";
import PropTypes from 'prop-types';

class Modal extends Component {
    componentDidMount() {
      window.addEventListener("keydown", this.onCloseModal);
    }
  
    componentWillUnmount() {
      window.removeEventListener("keydown", this.onCloseModal);
    }
  
    onCloseModal = (e) => {
        if (e.target === e.currentTarget || e.code === "Escape") {
          this.props.onModal(false);
        }
      };
  
    render() {
      const { modalSrc } = this.props;
  
      return (
        <div className="Overlay" onClick={this.onCloseModal}>
             <div className="Modal">

                 <img src={modalSrc} alt="modal img" />

             </div>

        </div>
      );
    }
  }

  export default Modal;

  Modal.propTypes = {
    modalSrc: PropTypes.string,
    showLoader: PropTypes.bool,
    onModal: PropTypes.func,
  };