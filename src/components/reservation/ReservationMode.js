import React, {useState} from "react";
import {Search} from "./Search";
import {TicketList} from "./TicketList";

export function ReservationMode() {
    const [order, setOrder] = useState({
        orderId: "", email: "", orderedAt: "", ticketOrderStatus: "", tickets: []
    });

    const handleOrderDataChanged = (searchedOrder) => {
        setOrder(searchedOrder);
    }

    return (
        <>
            <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                <TicketList order={order}/>
            </div>
            <div className="col-md-4 summary p-4">
                <Search onOrderDataChanged={handleOrderDataChanged}/>
            </div>
        </>
    );
}