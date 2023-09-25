import React from "react";

export function Title({title, onTitleChangeHandler}) {
    const handleTitleChange = e => onTitleChangeHandler(e.target.value);

    return (
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    공연 이름
                </label>
                <input
                        id="title"
                        type="text"
                        className="form-control mb-1"
                        value={title}
                        onChange={handleTitleChange}
                />
            </div>
    );
}