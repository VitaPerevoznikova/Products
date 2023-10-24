import React, { Component } from 'react';
import { StyledModal } from './Styled';

export default class Modal extends Component {

    state = {
        counter: 1,
      };

  componentDidMount() {
    window.addEventListener('keydown',this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount(){
    window.removeEventListener('keydown',this.handleKeyDown);  
    document.body.style.overflow = 'auto';
}

  handelOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };
  handleIncrementProduct = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleKeyDown = event => {
    if(event.code === 'Escape'){
        this.props.closeModal();
    }
  }
  render() {
    return (
      <StyledModal onClick={this.handelOverlayClick}>
        <div className="modal">
          <button onClick={this.props.closeModal} className="closeBtn">
            &times;
          </button>
          <h2>Products Details</h2>
          <div>
            <h3>Title: {this.props.modalData.title}</h3>
            <p>Price: {this.props.modalData.price}$</p>
            <p>Discount: {this.props.modalData.discount}$</p>
            <button onClick={this.handleIncrementProduct}>
              Add product: {this.state.counter}
            </button>
          </div>
        </div>
      </StyledModal>
    );
  }
}
