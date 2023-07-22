import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PerformanceList} from "./PerformanceList";
import {Registration} from "./Registration";

export function TheatreMode() {
    const [performances, setPerformances] = useState([]);

    const deleteById = performanceId => {
        axios.post("http://localhost:8080/api/v1/performances/unregister/" + performanceId)
            .then(r => alert("공연이 정상적으로 제거되었습니다."))
            .catch(error => {
                alert("서버 에러");
                console.error(error);
            });
        getAllPerformance();
    };

    const getAllPerformance = () => {
        return axios.get("http://localhost:8080/api/v1/performances")
            .then(r => setPerformances(r.data));
    };

    const handleRemoveClicked = performanceId => {
        deleteById(performanceId);
    };

    const handleRegisterSubmit = performance => {
        if (performance == null) {
            alert("공연 정보를 다시 확인해주세요!");
        } else {
            axios.post("http://localhost:8080/api/v1/performances/register", {

            }).then(
                r => alert("공연이 정상적으로 추가되었습니다."),
                e => {
                    alert("서버 에러");
                    console.error(e);
            })
        }
    };

    useEffect(() => {
        getAllPerformance();
    }, []);

    return (
        <>
            <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                <PerformanceList performances={performances} onRemoveClick={handleRemoveClicked}/>
            </div>
            <div className="col-md-4 summary p-4">
                <Registration onRegisterSubmit={handleRegisterSubmit}/>
            </div>
        </>
    );
}