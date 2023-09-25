import React from 'react';

export function Ticket({ticket, index, orderComplete, btnClickEvent}) {

    const handleRemoveTicket = () => {
        btnClickEvent(index);
    };

    return (
            <div className="position-relative mb-3" style={{paddingRight: '40px'}}>
                <div className="card">
                    <div
                            className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="card-title">{ticket.title}</h5>
                        </div>
                        <div>
                            <p className="card-text">
                                <span className="badge bg-dark text-light">{ticket.viewDate}</span>
                            </p>
                            <p className="card-text">￦ {ticket.price}</p>
                        </div>
                    </div>
                </div>
                {orderComplete ?
                        <button
                                className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                                onClick={handleRemoveTicket}>티켓 제거
                        </button>
                        : null
                }
            </div>
    );
}
