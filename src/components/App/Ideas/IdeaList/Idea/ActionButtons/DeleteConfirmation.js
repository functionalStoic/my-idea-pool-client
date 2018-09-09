import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export default ({ onDelete, onCancel }) => (
  <Modal onClose={onCancel} onDelete={onDelete}>
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          fontSize: 24,
          color: '#2A3842',
          marginBottom: 36
        }}
      >
        Are You Sure?
      </div>
      <div
        style={{
          fontSize: 16,
          color: '#2A3842',
          letterSpacing: -0.1,
          lineHeight: '16px',
          paddingBottom: 86
        }}
      >
        This will be permanently deleted
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          fontFamily: 'OpenSans-Semibold',
          fontSize: 18,

          letterSpacing: 0
        }}
      >
        <div onClick={onCancel}>CANCEL</div>
        <div onClick={onDelete} style={{ color: '#00A843' }}>
          OK
        </div>
      </div>
    </div>
  </Modal>
);

class Modal extends Component {
  el = document.createElement('div');
  modalRoot = document.getElementById('modal-root');

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}
        // onClick={this.props.onClose}
      >
        <div
          style={{
            padding: 30,
            background: '#fff',
            borderRadius: '2px',
            display: 'inline-block',
            margin: '1rem',
            position: 'relative',
            minWidth: '300px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center'
          }}
        >
          {this.props.children}
        </div>
      </div>,
      this.el
    );
  }
}
