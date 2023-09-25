import React, {useState} from "react";

export function Banner({onSearchByNameEvent}) {
    const [searchName, setSearchName] = useState('');

    const onSearchByName = e => {
        if (searchName === '') {
            alert("검색할 공연 이름을 입력해주세요");
        } else {
            onSearchByNameEvent(searchName);
        }
    };

    return (
            <div className="row mb-3">
                {/*제목*/}
                <div className="col-md-6">
                    <h5 className="flex-grow-0 mt-4 mb-3"><b>공연 목록</b></h5>
                </div>
                {/*검색창*/}
                <div className="col-md-6 mt-4">
                    <div className="input-group">
                        <input
                                type="text"
                                className="form-control"
                                placeholder="공연 이름 검색"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                        />
                        <button className="btn" style={{background: "#FF9933", color: "white"}} onClick={onSearchByName}>검색
                        </button>
                    </div>
                </div>
            </div>
    );
}