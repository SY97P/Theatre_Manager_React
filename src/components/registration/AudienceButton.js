import DatePicker from "react-datepicker";
import React, {useState} from "react";
import {formatDateToString} from "../util/formatDateToString";

export function AudienceButton({performance, onAddEvent}) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleAddBtnClicked = e => {
        if (selectedDate === null || selectedDate === ""
                || selectedDate.getTime() < new Date(performance.openRun).getTime()
                || selectedDate.getTime() > new Date(performance.closeRun).getTime()) {
            alert("올바른 관람일을 선택해주세요!");
        } else {
            onAddEvent(performance, formatDateToString(selectedDate));
        }
    };

    return (
            <>
                <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control mb-2"
                        placeholderText="날짜 선택"
                />
                <button className="btn btn-outline-dark"
                        style={{marginLeft: '20px'}}
                        onClick={handleAddBtnClicked}>
                    추가
                </button>
            </>
    );
}