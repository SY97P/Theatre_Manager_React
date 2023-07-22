import React, {useState} from "react";
import {Ticket} from "./Ticket";

export function Order({tickets, onTicketOrderSubmit, onTicketRemoveHandler}) {
    const totalPrice = tickets.reduce((prev, curr) => prev + curr.performance.price, 0);
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        if (email === "") {
            alert("이메일을 입력해주세요");
        } else {
            onTicketOrderSubmit(email);
        }
    };

    return (
        <>
            <div>
                <h5 className="m-0 p-0"><b>티켓</b></h5>
            </div>
            <br/><br/>
            {tickets.map((ticket, idx) =>
                <Ticket key={idx} index={idx}
                        performanceName={ticket.performance.performanceName}
                        price={ticket.performance.price}
                        reservedDate={ticket.reservedDate}
                        onTicketRemoveHandler={onTicketRemoveHandler} />
            )}
            <hr/>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">이메일</label>
                    <input type="email" className="form-control mb-1" value={email} onChange={e => setEmail(e.target.value)} id="email"/>
                </div>
            </form>
            <div className="row pt-2 pb-2 border-top">
                <h5 className="col">총금액</h5>
                <h5 className="col text-end">{totalPrice}원</h5>
            </div>
            <button className="btn btn-dark col-12" onClick={handleSubmit}>예매하기</button>
        </>
    );
}