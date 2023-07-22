import React from "react";
import {TicketInfo} from "./TicketInfo";

export function TicketList({order}) {
    return (
        <>
            <h5 className="flex-grow-0"><b>주문 티켓 목록</b></h5>
            {order.tickets.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center" style={{height: '200px'}}>
                    <div className="bg-light p-3 rounded">
                        <h4 className="text-center mb-3">공연 정보가 없습니다</h4>
                        <p className="text-muted text-center">원하시는 공연 정보가 없습니다.</p>
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