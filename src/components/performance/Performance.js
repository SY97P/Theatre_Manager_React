import React from 'react';
import {Mode} from "../util/Mode";
import {CompanyButton} from "../registration/CompanyButton";
import {AudienceButton} from "../registration/AudienceButton";

export function Performance({performance, mode, onModifyEvent, onRemoveEvent, onAddEvent}) {

    const getCurrency = (price) => `${price}`

    return (
            <div className="performance-card card mb-3">
                <div className="row g-0">

                    <div className="col-md-4 d-flex align-items-center">
                        <img src="https://i.imgur.com/HKOFQYa.jpeg" alt=""
                             className="img-fluid rounded-start"/>
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{performance.title}</h5>
                            <p className="card-text">{performance.genre}</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="card-text"><strong>Age Rate:</strong> {performance.ageRate}</p>
                                    <p className="card-text"><strong>Stage:</strong> {performance.stage}</p>
                                    <p className="card-text"><strong>Price:</strong> {getCurrency(performance.price)}</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="card-text"><strong>Open Run:</strong> {performance.openRun}</p>
                                    <p className="card-text"><strong>Close Run:</strong> {performance.closeRun}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {mode === Mode.COMPANY
                        ? <CompanyButton performance={performance} onModifyEvent={onModifyEvent}
                                         onRemoveEvent={onRemoveEvent}/>
                        : <AudienceButton performance={performance} onAddEvent={onAddEvent}/>}
            </div>
    );
}