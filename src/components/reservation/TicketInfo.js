import React from 'react';

export function TicketInfo({ticket}) {
    const {ticketId, orderId, performanceId, ticketPrice, reservedDate} = ticket;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Ticket ID: {ticketId}</h5>
                <p className="card-text">Order ID: {orderId}</p>
                <p className="card-text">Performance ID: {performanceId}</p>
                <p className="card-text">Ticket Price: {ticketPrice.amount}</p>
                <p className="card-text">Reserved Date: {reservedDate}</p>
            </div>
        </div>
    );
}
