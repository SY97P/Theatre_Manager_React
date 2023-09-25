import React from "react";

export function CloseRun({closeRun, onCloseRunChangeHandler}) {
    const handleCloseRunChange = e => onCloseRunChangeHandler(e.target.value);

    return (
            <div className="mb-3">
                <label htmlFor="closeRun" className="form-label">
                    클로즈런
                </label>
                <input
                        id="closeRun"
                        type="date"
                        className="form-control"
                        value={closeRun}
                        onChange={handleCloseRunChange}
                />
            </div>
    );
}