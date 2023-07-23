import React, {useState} from 'react';
import {Performance} from "./Performance";
import DatePicker from "react-datepicker";

export function PerformanceList({performances = [], mode, onSearchByNameEvent, onModifyEvent, onClickEventHandler}) {
    const [searchName, setSearchName] = useState('');

    const onSearchByName = e => {
        if (searchName === '') {
            alert("검색할 공연 이름을 입력해주세요");
        } else {
            onSearchByNameEvent(searchName);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <h5 className="flex-grow-0 mt-4 mb-3"><b>공연 목록</b></h5>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="공연 이름 검색"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                            />
                            <button className="btn btn-primary" onClick={onSearchByName}>검색</button>
                        </div>
                    </div>
                </div>

                {performances.length === 0 ? (
                    <div className="d-flex justify-content-center align-items-center" style={{height: '200px'}}>
                        <div className="bg-light p-3 rounded">
                            <h4 className="text-center mb-3">공연 정보가 없습니다</h4>
                            <p className="text-muted text-center">원하시는 공연 정보가 없습니다.</p>
                        </div>
                    </div>
                ) : (
                    <ul className="list-group products">
                        {performances.map(performance =>
                            <li key={performance.performanceId} className="list-group-item d-flex mt-3">
                                <Performance {...performance} mode={mode} onModifyEvent={onModifyEvent}
                                             onClickEventHandler={onClickEventHandler}/>
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </>
    );
}