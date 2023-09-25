import React from "react";

export function AgeRate({ageRate, onAgeRateChangeHandler}) {
    const handleAgeRateChange = e => onAgeRateChangeHandler(e.target.value);

    return (
            <div className="mb-3">
                <label htmlFor="ageRate" className="form-label">
                    관람 가능 연령
                </label>
                <select
                        id="ageRate"
                        className="form-select"
                        value={ageRate}
                        onChange={handleAgeRateChange}
                >
                    <option value="">관람 가능 연령 선택</option>
                    <option value="KID_AVAILABLE">어린이 관람 가능</option>
                    <option value="TEEN_AVAILABLE">청소년 관람 가능</option>
                    <option value="ADULT_AVAILABLE">성인만 관람 가능</option>
                </select>
            </div>
    );
}