import React from "react";

export function OpenRun({openRun, onOpenRunChangeHandler}) {
    const handleOpenRunChange = e => onOpenRunChangeHandler(e.target.value);

    return (
            <div className="mb-3">
                <label htmlFor="openRun" className="form-label">
                    오픈런
                </label>
                <input
                        id="openRun"
                        type="date" // 날짜를 입력할 수 있는 태그로 변경
                        className="form-control"
                        value={openRun}
                        onChange={handleOpenRunChange}
                />
            </div>
    );
}