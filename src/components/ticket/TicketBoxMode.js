import React, {useEffect, useState} from 'react';
import {PerformanceList} from "../theatre/PerformanceList";
import axios from "axios";
import {Mode} from "../vo/Mode";
import {Order} from "./Order";

export function TicketBoxMode() {
    const [performances, setPerformances] = useState([]);
    const [tickets, setTickets] = useState([]);

    const handleAddClicked = (performanceId, reservedDate) => {
        const performance = performances.find(performance => performance.performanceId === performanceId);
        const newTicket = {
            performance: performance,
            reservedDate: reservedDate
        }
        setTickets([...tickets, newTicket]);
    };
    const handleSearchByName = (performanceName) => {
        axios.get("http://localhost:8080/api/v1/performances/name/" + performanceName)
            .then(r => setPerformances([r.data]))
            .catch(e => alert("검색 결과가 없습니다."));
        console.log(performances);
    };
    const handleTicketRemove = (index) => {
        setTickets(tickets.filter((v, i) => i !== index));
    };
    const handleSubmit = (email) => {
        if (tickets.length === 0) {
            alert("티켓을 추가해주세요!");
        } else {
            const orderId = crypto.randomUUID();
            axios.post("http://localhost:8080/api/v1/ticket-orders/create", {
                orderId: orderId,
                email: email,
                tickets: tickets.map(ticket => ({
                    orderId: orderId,
                    ticketPrice: ticket.performance.price,
                    reservedDate: ticket.reservedDate
                }))
            }).then(
                res => alert("예매가 정상적으로 처리되었습니다."),
                err => {
                    alert("예매가 처리되지 않았습니다. - 서버 에러");
                    console.error(err);
                }
            )
        }
    };

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/performances")
            .then(r => setPerformances(r.data))
            .catch(e => console.error(e));
    }, []);

    return (
        <>
            <div className="col-md-8 mt-0 d-flex flex-column align-items-start p-3 pt-0">
                <PerformanceList performances={performances} mode={Mode.TICKET_MODE}
                                 onSearchByNameEvent={handleSearchByName} onAddEvent={handleAddClicked}/>
            </div>
            <div className="col-md-4 summary p-4">
                <Order tickets={tickets} onTicketOrderSubmit={handleSubmit} onTicketRemoveHandler={handleTicketRemove}/>
            </div>
        </>
    );
}