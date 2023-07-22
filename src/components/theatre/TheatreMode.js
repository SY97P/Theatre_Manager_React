import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PerformanceList} from "./PerformanceList";
import {Registration} from "./Registration";
import {Mode} from "../vo/Mode";

export function TheatreMode() {
    const [performances, setPerformances] = useState([]);

    const deleteById = (performanceId) => {
        axios.post("http://localhost:8080/api/v1/performances/unregister/" + performanceId)
            .then(r => {
                alert("공연이 정상적으로 제거되었습니다.");
                const remainPerformances = performances.filter(
                    performance => performance.performanceId !== performanceId
                );
                setPerformances(remainPerformances);
            })
            .catch(error => {
                alert("공연 제거 실패 - 서버 에러");
                console.error(error);
            });
    };

    const handleRemoveClicked = (performanceId, selectedDate) => {
        deleteById(performanceId);
    };

    const handleRegisterSubmit = performance => {
        if (performance == null) {
            alert("공연 정보를 다시 확인해주세요!");
        } else {
            axios.post("http://localhost:8080/api/v1/performances/register", {
                performanceName: performance.performanceName,
                genre: performance.genre,
                ageRate: performance.ageRate,
                openRun: performance.openRun,
                closeRun: performance.closeRun,
                stage: performance.stage,
                price: performance.price
            }).then(
                r => {
                    alert("공연이 정상적으로 추가되었습니다.");
                    setPerformances([...performances, performance]);
                },
                e => {
                    alert("공연 추가 실패 - 서버 에러");
                    console.error(e);
                })
        }
    };

    const getAllPerformance = () => {
        return axios.get("http://localhost:8080/api/v1/performances")
            .then(r => setPerformances(r.data));
    };

    useEffect(() => {
        getAllPerformance();
    }, []);

    return (
        <>
            <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                <PerformanceList performances={performances} mode={Mode.THEATRE_MODE} onClickEventHandler={handleRemoveClicked}/>
            </div>
            <div className="col-md-4 summary p-4">
                <Registration onRegisterSubmit={handleRegisterSubmit}/>
            </div>
        </>
    );
}