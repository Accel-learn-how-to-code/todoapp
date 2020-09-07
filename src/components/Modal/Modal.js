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
                <button class="myBtn openBtn" onClick={() => this.openModal()}>
                    +
                </button>
                <div id="myModal" className={classNames('modal', { openModal: this.state.modal})}>
                    <div className="modal-content">
                        <span className="close" onClick={() => this.closeModal()}>X</span>
                        <input  className="inputTask" 
                                placeholder="Type some things..." 
                                onKeyUp={(event) => {
                                                        this.props.addTask(event);
                                                        if(event.keyCode === 13){
                                                            this.closeModal();
                                                        }
                                                    }}/>
                    </div>
                    <button class="myBtn closeBtn" onClick={() => this.closeModal()}>
                        X
                    </button>
                </div>
            </div>
        );
    }
}

export default Modal