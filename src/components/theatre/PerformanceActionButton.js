import React, {useState} from 'react';
import {Mode} from '../vo/Mode';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function PerformanceActionButton({performanceId, openRun, closeRun, mode, onModifyEvent, onClickEventHandler}) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleModifyBtnClicked = e => {
        onModifyEvent(performanceId)
    };
    const handleRemoveBtnClicked = e => {
        onClickEventHandler(performanceId, selectedDate);
    };
    const handleAddBtnClicked = e => {
        if (selectedDate === null || selectedDate === ""
            || selectedDate.getTime() < new Date(openRun).getTime()
            || selectedDate.getTime() > new Date(closeRun).getTime()) {
            alert("올바른 관람일을 선택해주세요!");
        } else {
            onClickEventHandler(performanceId, formatDateToString(selectedDate));
        }
    };

    function formatDateToString(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
        const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed

        return `${year}-${month}-${day}`;
    }

    return (
        <div className="d-flex justify-content-end p-3">
            {mode === Mode.THEATRE_MODE ? (
                <>
                    <button className="btn btn-outline-dark me-2" onClick={handleModifyBtnClicked}>
                        수정
                    </button>
                    <button className="btn btn-outline-dark" onClick={handleRemoveBtnClicked}>
                        제거
                    </button>
                </>
            ) : (
                <div>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control mb-2"
                        placeholderText="날짜 선택"
                    />
                    <button className="btn btn-outline-dark" style={{marginLeft: '20px'}} onClick={handleAddBtnClicked}>
                        추가
                    </button>
                </div>
            )}
        </div>
    );
}
