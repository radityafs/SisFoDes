import React from "react";

export default function Modal({ trigger, title, size = "", children }) {
    return (
        <div ref={trigger} className="modal fade" tabIndex={-1}>
            <div className={`modal-dialog modal-dialog-centered ${size}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <div classname="modal-title" id="exampleModalLabel">
                            <h3>{title}</h3>
                        </div>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );
}
