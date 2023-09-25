import React, {useState} from "react";
import axios from "axios";
import {OrderComplete} from "./OrderComplete";
import {Tickets} from "./Tickets";

function Order({tickets, onRemoveEvent}) {
    const [orderData, setOrderData] = useState(null);
    const [orderComplete, setOrderComplete] = useState(false);

    console.log(orderComplete);

    const orderedTickets = tickets.map(ticket => {
        const {performanceId, viewDate} = ticket;
        return {performanceId, viewDate};
    });

    const handleClose = () => {
        setOrderComplete(false);
        setOrderData(null);
        window.location.reload();
    }

    const handleReserveTicket = () => {
        if (orderedTickets.size <= 0) {
            alert("티켓을 선택해주세요");
        } else {
            axios.post("http://localhost:8080/orders", {
                headers: {
                    'Authorization': `Bearer ${localStorage.jwtToken}`
                },
                tickets: orderedTickets
            })
            .then(response => {
                alert("주문이 등록되었습니다.");
                setOrderData(response.data);
                setOrderComplete(true);
                console.log(response);
            })
            .catch(e => {
                alert("주문 등록에 실패했습니다.");
            })
        }
    }

    return (
            <>
                <div>
                    <h5 className="m-0 p-0"><b>{orderComplete ? "주문 내역" : "티켓"}</b></h5>
                </div>
                <br/><br/>
                {orderComplete ? (
                        <OrderComplete orderData={orderData}/>
                ) : (
                        <Tickets tickets={tickets} removeTicketHandler={onRemoveEvent}/>
                )}
                <hr/>
                {orderComplete ? (
                        <button className={"btn btn-dark col-12"} onClick={handleClose}>내역 확인</button>
                ) : (
                        <button className="btn btn-dark col-12" onClick={handleReserveTicket}>예매하기</button>
                )}
            </>
    );
}

export default Order;