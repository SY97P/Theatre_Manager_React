import React from 'react';
import {Performance} from "./Performance";

export function PerformanceList({performances = [], mode, onModifyEvent, onClickEventHandler}) {
    return (
        <>
            <h5 className="flex-grow-0"><b>공연 목록</b></h5>
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
                            <Performance {...performance} mode={mode} onModifyEvent={onModifyEvent} onClickEventHandler={onClickEventHandler}/>
                        </li>
                    )}
                </ul>
            )}
        </>
    );
}