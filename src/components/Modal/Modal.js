import React, { Component } from 'react';
import classNames from 'classnames';
import './Modal.css';

class Modal extends Component{
    state = {
        modal: false
    };

    openModal(){
        this.setState({
            modal: true
        });
    };

    closeModal(){
        this.setState({
            modal: false
        });
    };

    render(){
        return(
            <div className="modal-container">
                <button id="myBtn" onClick={() => this.openModal()}>
                    { this.state.modal ? 'X' : '+'}
                </button>
                <div id="myModal" className={classNames('modal', { openModal: this.state.modal})}>
                    <div className="modal-content">
                        <span className="close" onClick={this.closeModal}>X</span>
                        <p>Some text in the Modal..</p>
                        <button className="close decline" onClick={() => this.closeModal()}>
                            Decline
                        </button>
                        <button className="close accept" onClick={() => this.closeModal()}>
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal