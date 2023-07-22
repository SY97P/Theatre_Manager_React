import React, { useState } from "react";
import axios from "axios";

export function Search({ onOrderDataChanged }) {
    const [searchedOrder, setSearchedOrder] = useState({
        orderId: "", email: "", orderedAt: "", ticketOrderStatus: "", tickets: []
    });
    const [searchOrderId, setSearchOrderId] = useState("");
    const [searchEmail, setSearchEmail] = useState("");

    const handleDeleteOrder = (e) => {
        console.log(searchedOrder);
        if (searchedOrder.orderId === "") {
            alert("삭제할 대상이 없습니다. 검색해주세요.");
        } else {
            axios.post("http://localhost:8080/api/v1/ticket-orders/delete/" + searchedOrder.orderId)
                .then(r => alert("주문이 취소되었습니다."))
                .catch(e => alert("주문 취소가 실패했습니다. - 서버 에러"));
            setSearchedOrder({orderId: "", email: "", orderedAt: "", ticketOrderStatus: "", tickets: []});
            onOrderDataChanged(searchedOrder);
        }
    };

    const handleSearchByOrderId = e => {
        if (searchOrderId === "") {
            alert("주문 아이디를 입력해주세요!");
        } else {
            axios.get("http://localhost:8080/api/v1/ticket-orders/id/" + searchOrderId)
                .then(r => setSearchedOrder(r.data))
                .catch(e => alert("주문 아이디 조회 실패"));
            onOrderDataChanged(searchedOrder);
        }
    }
    const handleSearchByEmail = e => {
        if (searchEmail === "") {
            alert("이메일을 입력해주세요!");
        } else {
            axios.get("http://localhost:8080/api/v1/ticket-orders/email/" + searchEmail)
                .then(r => setSearchedOrder(r.data))
                .catch(e => alert("이메일 조회 실패"));
            onOrderDataChanged(searchedOrder);
        }
    }

    return (
        <>
            <form>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="orderId로 검색"
                        value={searchOrderId}
                        onChange={(e) => setSearchOrderId(e.target.value)}
                    />
                    <button
                        className="btn btn-outline-dark"
                        type="button"
                        onClick={handleSearchByOrderId}
                    >
                        검색
                    </button>
                </div>
            </form>

            <form>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="email로 검색"
                        value={searchEmail}
                        onChange={(e) => setSearchEmail(e.target.value)}
                    />
                    <button
                        className="btn btn-outline-dark"
                        type="button"
                        onClick={handleSearchByEmail}
                    >
                        검색
                    </button>
                </div>
            </form>

            <hr />

            <button className="btn btn-dark col-12" onClick={handleDeleteOrder}>
                주문 취소하기
            </button>
        </>
    );
}
