import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {PerformanceList} from "./PerformanceList";
import {Registration} from "./Registration";
import {Mode} from "../vo/Mode";
import '../../Mode.css';

export function TheatreMode() {
    const [performances, setPerformances] = useState([]);
    const [targetPerformance, setTargetPerformance] = useState({});

    const handleRemoveClicked = (performanceId) => {
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
                    alert("공연 정보가 정상적으로 추가되었습니다.");
                    setPerformances([...performances, performance]);
                },
                e => {
                    alert("공연 갱신 실패 - 서버 에러");
                    console.error(e);
                })
        }
    };
    const handleUpdateResult = performance => {
        console.log(performance);
        if (performance == null) {
            alert("공연 정보를 다시 확인해주세요!");
        } else {
            axios.post("http://localhost:8080/api/v1/performances/update", {
                performanceId: performance.performanceId,
                performanceName: performance.performanceName,
                genre: performance.genre,
                ageRate: performance.ageRate,
                openRun: performance.openRun,
                closeRun: performance.closeRun,
                stage: performance.stage,
                price: performance.price
            }).then(
                r => {
                    alert("공연 정보가 정상적으로 수정되었습니다.");
                    const newPerformances = performances.filter(v => v.performanceId !== performance.performanceId);
                    setPerformances([...newPerformances, performance]);
                },
                e => {
                    alert("공연 추가 실패 - 서버 에러");
                    console.error(e);
                })
        }
    };
    const handleSearchByName = (performanceName) => {
        axios.get("http://localhost:8080/api/v1/performances/name/" + performanceName)
            .then(r => setPerformances([r.data]))
            .catch(e => alert("검색 결과가 없습니다."));
        console.log(performances);
    };
    const handleModifyEvent = (performanceId) => {
        setTargetPerformance(performances.find(v => v.performanceId === performanceId));
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/performances")
            .then(r => setPerformances(r.data))
            .catch(e => alert("검색 결과가 없습니다."));
    }, []);

    return (
        <>
            <div className="col-md-8 mt-0 d-flex flex-column align-items-start p-3 pt-0">
                <PerformanceList performances={performances} mode={Mode.THEATRE_MODE}
                                 onSearchByNameEvent={handleSearchByName}
                                 onModifyEvent={handleModifyEvent} onRemoveEvent={handleRemoveClicked}/>
            </div>
            <div className="col-md-4 summary p-4">
                <Registration targetPerformance={targetPerformance} onUpdateSubmit={handleUpdateResult} onRegisterSubmit={handleRegisterSubmit}/>
            </div>
        </>
    );
}