import React, {useEffect, useState} from "react";
import {Mode} from "./util/Mode";
import {PerformanceList} from "./performance/PerformanceList";
import Registration from "./registration/Registration";
import Order from "./order/Order";
import {Banner} from "./performance/Banner";
import axios from "axios";
import "./Main.css";

function Main({mode}) {
    const size = 10;
    const [page, setPage] = useState(0);
    const [performances, setPerformances] = useState([]);
    const [target, setTarget] = useState(null);
    const [tickets, setTickets] = useState([]);

    const onSearchByNameHandler = (searchName) => {
        axios.get(`http://localhost:8080/performances?title=${searchName}?page=${page}&size=${size}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.jwtToken}`
            }
        })
        .then(response => setPerformances(response.data.responses.content));
    };

    const onModifyHandler = (performance) => setTarget(performance);

    const onRemoveHandler = (performance) => {
        axios.delete(`http://localhost:8080/performances/${performance.id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.jwtToken}`
            }
        })
        .then(() => {
            const newPerformances = performances.filter(p => p !== performance);
            setPerformances(newPerformances);
            alert("공연이 정상적으로 삭제되었습니다.")
        })
        .catch(e => {
            console.warn(e);
            alert("공연이 제거되지 못했습니다.");
        })
    };

    const onAddTicketHandler = (performance, viewDate) => {
        const newTickets = [...tickets, {
            performanceId: performance.id,
            title: performance.title,
            viewDate: viewDate,
            price: performance.price
        }];
        setTickets(newTickets);
    };

    const onRemoveTicketHandler = (idx) => {
        const newOrderTicket = tickets.filter((ticket, index) => index !== idx);
        setTickets(newOrderTicket);
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/performances/all?page=${page}&size=${size}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.jwtToken}`
            }
        })
        .then(response => {
            const content = response.data.responses.content;
            setPerformances(content);
            console.log(content);
        });
    }, [page, size]);

    return (
            <div className="row mt-4">
                <div className="col-md-7" style={{ paddingRight: 50 }}>
                    <Banner onSearchByNameEvent={onSearchByNameHandler} />
                    <PerformanceList
                            performances={performances}
                            mode={mode}
                            onModifyEvent={onModifyHandler}
                            onRemoveEvent={onRemoveHandler}
                            onAddEvent={onAddTicketHandler}
                    />
                </div>
                {/* 세로선을 포함한 col-md-7 */}
                <div className="col-md-5">
                    <div className="row">
                        <div className="vertical-line col-md-1"/>
                        <div className="col-md-10">
                            {mode === Mode.COMPANY ? (
                                    <Registration performance={target} />
                            ) : (
                                    <Order tickets={tickets} onRemoveEvent={onRemoveTicketHandler} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Main;