import React from "react";
import {Tickets} from "./Tickets";

export function OrderComplete({orderData}) {
    return (
            <div>
                <p>이메일</p>
                <p>{orderData.email}</p>
                <p>관람일</p>
                <p>{orderData.orderDate}</p>
                <p>주문상태</p>
                <p>{orderData.orderStatus}</p>
                <p>총 가격</p>
                <p>￦ {orderData.totalPrice}</p>
                <p>티켓</p>
                {orderData.tickets.map((ticket, idx) =>
                        <Tickets key={idx} tickets={orderData.tickets}/>
                )}
            </div>
    );
}