import React from 'react';
import {Performance} from "./Performance";
import {EmptyPerformance} from "./EmptyPerformance";

export function PerformanceList({performances, mode, onModifyEvent, onRemoveEvent, onAddEvent}) {
    return (
            <>
                {performances.length === 0 ? <EmptyPerformance/>
                        : (
                                <ul className="list-group products">
                                    {performances.map(performance =>
                                            <li key={performance.id}
                                                className="list-group-item d-flex mt-3">
                                                <Performance performance={performance} mode={mode} onModifyEvent={onModifyEvent}
                                                             onRemoveEvent={onRemoveEvent} onAddEvent={onAddEvent}/>
                                            </li>
                                    )}
                                </ul>
                        )}
            </>
    );
}