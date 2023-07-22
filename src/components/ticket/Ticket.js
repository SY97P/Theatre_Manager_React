import React from 'react';

export function Ticket({ index, performanceName, price, reservedDate, onTicketRemoveHandler }) {
    const handleRemoveBtnClick = e => {
        onTicketRemoveHandler(index);
    }

    return (
        <div className="position-relative mb-3" style={{paddingRight: '40px'}}>
            <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="card-title">{performanceName}</h5>
                    </div>
                    <div>
                        <p className="card-text">
                            <span className="badge bg-dark text-light">{reservedDate}</span>
                        </p>
                        <p className="card-text">{price}</p>
                    </div>
                </div>
            </div>
            <button className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2" onClick={handleRemoveBtnClick}>제거</button>
        </div>
    );
}
