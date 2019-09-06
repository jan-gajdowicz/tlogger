import React, { Component } from 'react';
import './Modal.css';
import { connect } from 'react-redux'
import { updateModal } from '../../actions'


class Modal extends Component {
    closeModal = () => {
        this.props.updateModal({
            modalOpen: false,
            modalHeader: '',
            modalContent: '',
            showButtons: false,
            onCancel: null,
            onConfirm: null
        })
    }
    onConfirm = () => {
        this.props.updateModal({modalOpen: false})
        this.props.modalConfirm.action(this.props.modalConfirm.payload)
    }
    componentDidMount() {
        this.setState({
            modalOpen: this.props.modalOpen
        })
    }
    render() {
        let modal
        if(this.props.modalOpen) { //reverse condition
            modal = 
            <div className="modal">
                <div className="modal-body">
                    <div className="modal-header">
                        <div>
                            <h3>{this.props.modalHeader}</h3>
                        </div>
                        <div className="modal-close" onClick={this.closeModal}>
                            <img src="assets/close-button.svg" alt="close modal"></img>
                        </div>
                    </div>   
                    <p>{this.props.modalContent}</p>
                    <div className="modal-buttons">
                        <button onClick={this.closeModal} className="modal-button">Cancel</button>
                        <button onClick={this.onConfirm} className="modal-button modal-button-confirm">Confirm</button>
                    </div>
                </div>       
            </div>
        }
        return (
            <div>
                {modal}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalOpen: state.modal.modalOpen,
        modalHeader: state.modal.modalHeader,
        modalContent: state.modal.modalContent,
        modalConfirm: state.modal.modalConfirm,
        showButtons: state.modal.showButtons,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateModal: (state) => dispatch(updateModal(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)