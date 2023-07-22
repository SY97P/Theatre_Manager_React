import React from 'react';

export function Performance({performanceId, performanceName, genre, ageRate, openRun, closeRun, stage, onRemoveClick}) {

    const handleRemoveBtnClicked = e => {
        onRemoveClick(performanceId);
    };

    return (
        <div className="performance-card card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
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
                            </div>
                            <div className="col-md-6">
                                <p className="card-text"><strong>Open Run:</strong> {openRun}</p>
                                <p className="card-text"><strong>Close Run:</strong> {closeRun}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end p-3">
                <button className="btn btn-outline-dark" onClick={handleRemoveBtnClicked}>제거</button>
            </div>
        </div>
    );
}