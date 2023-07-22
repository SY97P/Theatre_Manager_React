import React from 'react';
import {Performance} from "./Performance";

export function PerformanceList({performances= [], onRemoveClick}) {
    return (
        <>
            <h5 className="flex-grow-0"><b>공연 목록</b></h5>
            <ul className="list-group products">
                {performances.map(performance =>
                    <li key={performance.performanceId} className="list-group-item d-flex mt-3">
                        <Performance {...performance} onRemoveClick={onRemoveClick}/>
                    </li>
                )}
            </ul>
        </>
    );
}