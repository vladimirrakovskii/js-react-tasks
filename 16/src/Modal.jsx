import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class Modal extends React.Component {
    render() {
        const { isOpen, children } = this.props;
        const modalStyle = isOpen ? { display: 'block' } : { display: 'none' };
        const modalClass = isOpen ? 'modal fade show' : 'modal';

        return (
            <div className={modalClass} style={modalStyle} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.Header = class ModalHeader extends React.Component {
    render() {
        const { toggle, children } = this.props;
        return (
            <div className="modal-header">
                <div className="modal-title">{children}</div>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={toggle}
                ></button>
            </div>
        );
    }
}

Modal.Body = class ModalBody extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="modal-body">
                {children}
            </div>
        );
    }
}

Modal.Footer = class ModalFooter extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="modal-footer">
                {children}
            </div>
        );
    }
}
// END
