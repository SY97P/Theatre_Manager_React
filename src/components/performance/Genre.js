import React from "react";

export function Genre({genre, onGenreChangeHandler}) {
    const handleGenreChange = e => onGenreChangeHandler(e.target.value);

    return (
            <div className="mb-3">
                <label htmlFor="genre" className="form-label">
                    장르
                </label>
                <select
                        id="genre"
                        className="form-select mb-1"
                        value={genre}
                        onChange={handleGenreChange}
                >
                    <option value="">장르 선택</option>
                    <option value="PLAY">연극</option>
                    <option value="OPERA">오페라</option>
                    <option value="MUSICAL">뮤지컬</option>
                </select>
            </div>
    );
}