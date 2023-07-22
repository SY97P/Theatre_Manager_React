import React from 'react';
import {PerformanceActionButton} from "./PerformanceActionButton";

export function Performance({performanceId, performanceName, genre, ageRate, openRun, closeRun, stage, price, mode, onClickEventHandler}) {
    return (
        <div className="performance-card card mb-3">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src="https://i.imgur.com/HKOFQYa.jpeg" alt="" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{performanceName}</h5>
                        <p className="card-text">{genre}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="card-text"><strong>Age Rate:</strong> {ageRate}</p>
                                <p className="card-text"><strong>Stage:</strong> {stage}</p>
                                <p className="card-text"><strong>Price:</strong> {price}</p>
                            </div>
                            <div className="col-md-6">
                                <p className="card-text"><strong>Open Run:</strong> {openRun}</p>
                                <p className="card-text"><strong>Close Run:</strong> {closeRun}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PerformanceActionButton performanceId={performanceId} openRun={openRun} closeRun={closeRun} mode={mode} onClickEventHandler={onClickEventHandler}/>
        </div>
    );
}