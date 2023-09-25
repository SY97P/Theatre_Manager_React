import React from "react";
import "../../App.css";

export function CompanyButton({performance, onModifyEvent, onRemoveEvent}) {

    const handleModifyEvent = () => {
        onModifyEvent(performance)
    };
    const handleRemoveEvent = () => {
        onRemoveEvent(performance)
    };

    return (
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <button onClick={handleModifyEvent} className="btn mr-2" style={{background: "#FF9933", color: "white", marginRight: 10, width: 80}}>수정</button>
                    <button onClick={handleRemoveEvent} className="btn" style={{background: "#FF9933", color: "white", width: 80}}>제거</button>
                </div>
            </div>
    );
}