import React from "react";

export function Stage({stage, onStageChangeHandler}) {
    const handleStageChange = e => onStageChangeHandler(e.target.value);
    return (
            <div className="mb-3">
                <label htmlFor="stage" className="form-label">
                    공연장 번호
                </label>
                <select
                        id="stage"
                        className="form-select"
                        value={stage}
                        onChange={handleStageChange}
                >
                    <option value="">공연장 번호 선택</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                </select>
            </div>
    );
}