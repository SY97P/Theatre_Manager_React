import React from "react";
import {TicketInfo} from "./TicketInfo";

export function TicketList({order}) {
    return (
        <>
            <div>
                <h5 className="flex-grow-0"><b>예매티켓 목록: {order.orderId}</b></h5>
            </div>
            {order.tickets.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center" style={{height: '200px'}}>
                    <div className="bg-light p-3 rounded">
                        <h4 className="text-center mb-3">예매내역이 없습니다</h4>
                        <p className="text-muted text-center">원하시는 예매내역이 없습니다.</p>
                    </div>
                </div>
            ) : (
                <ul className="list-group products">
                    {order.tickets.map((ticket, idx) =>
                        <li key={idx} className="list-group-item d-flex mt-3">
                            <TicketInfo ticket={ticket}/>
                        </li>
                    )}
                </ul>
            )}
        </>
    );
}