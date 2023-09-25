import React from "react";

export function Price({price, onPriceChangeHandler}) {
    const handlePriceChange = e => onPriceChangeHandler(e.target.value);

    return (
            <div className="mb-3">
                <label htmlFor="price" className="form-label">
                    가격
                </label>
                <input
                        id="price"
                        type="number"
                        className="form-control mb-1"
                        value={price}
                        onChange={handlePriceChange}
                />
            </div>
    );
}