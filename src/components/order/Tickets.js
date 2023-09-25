import {Ticket} from "./Ticket";
import React from "react";

export function Tickets({tickets, orderComplete, btnClickEvent}) {
    return (
            <>
                {tickets.map((ticket, idx) =>
                        <Ticket key={idx} index={idx} ticket={ticket} orderComplete={orderComplete}
                                btnClickEvent={btnClickEvent}/>
                )}
            </>
    );
}