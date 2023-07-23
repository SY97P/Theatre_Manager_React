import React, {useEffect, useState} from 'react';

export function Registration({targetPerformance, onUpdateSubmit, onRegisterSubmit}) {
    const [performance, setPerformance] = useState({
        performanceId: "", performanceName: "", genre: "", ageRate: "ALL", openRun: "", closeRun: "", stage: "", price: ""
    });

    const handlePerformanceNameInputChanged = e => setPerformance({...performance, performanceName: e.target.value});
    const handleOpenRunInputChanged = e => setPerformance({...performance, openRun: e.target.value});
    const handleCloseRunInputChanged = e => setPerformance({...performance, closeRun: e.target.value});
    const handleGenreInputChanged = e => setPerformance({...performance, genre: e.target.value});
    const handleAgeRateInputChanged = e => setPerformance({...performance, ageRate: e.target.value});
    const handleStageInputChanged = e => setPerformance({...performance, stage: e.target.value});
    const handlePriceInputChanged = e => setPerformance({...performance, price: e.target.value});

    const handleRegisterSubmit = e => {
        if (performance.performanceName === "" || performance.genre === "" || performance.ageRate === ""
            || performance.openRun === "" || performance.closeRun === "" || performance.stage === "") {
            alert("누락된 공연 정보가 있습니다. 확인해주세요!");
        } else {
            onRegisterSubmit(performance);
        }
    }
    const handleUpdateSubmit = e => {
        if (performance.performanceId === "" || performance.performanceName === "" || performance.genre === "" || performance.ageRate === ""
            || performance.openRun === "" || performance.closeRun === "" || performance.stage === "") {
            alert("누락된 공연 정보가 있습니다. 확인해주세요!");
        } else {
            onUpdateSubmit(performance);
        }
    };

    useEffect(() => {
        setPerformance(targetPerformance);
    }, [targetPerformance]);

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="performanceName" className="form-label">
                        공연 이름
                    </label>
                    <input
                        type="text"
                        className="form-control mb-1"
                        value={performance.performanceName}
                        onChange={handlePerformanceNameInputChanged}
                        id="performanceName"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">
                        장르
                    </label>
                    <select
                        className="form-select mb-1"
                        value={performance.genre}
                        onChange={handleGenreInputChanged}
                        id="genre"
                    >
                        <option value="">장르 선택</option>
                        <option value="PLAY">연극</option>
                        <option value="OPERA">오페라</option>
                        <option value="MUSICAL">뮤지컬</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="ageRate" className="form-label">
                        관람 가능 연령
                    </label>
                    <select
                        className="form-select"
                        value={performance.ageRate}
                        onChange={handleAgeRateInputChanged}
                        id="ageRate"
                    >
                        <option value="ALL">전체 관람 가능</option>
                        <option value="FIFTEEN">15세 이상 관람 가능</option>
                        <option value="ADULT_ONLY">성인만 관람 가능</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="stage" className="form-label">
                        공연장 번호
                    </label>
                    <select
                        className="form-select"
                        value={performance.stage}
                        onChange={handleStageInputChanged}
                        id="stage"
                    >
                        <option value="">공연장 번호 선택</option>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        관람료
                    </label>
                    <input
                        type="number"
                        className="form-control mb-1"
                        value={performance.price}
                        onChange={handlePriceInputChanged}
                        id="price"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="openRun" className="form-label">
                        오픈런
                    </label>
                    <input
                        type="date" // 날짜를 입력할 수 있는 태그로 변경
                        className="form-control"
                        value={performance.openRun}
                        onChange={handleOpenRunInputChanged}
                        id="openRun"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="closeRun" className="form-label">
                        클로즈런
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        value={performance.closeRun}
                        onChange={handleCloseRunInputChanged}
                        id="closeRun"
                    />
                </div>
            </form>
            <button className="btn btn-dark col-12 mb-3" onClick={handleRegisterSubmit}>
                등록하기
            </button>
            <button className="btn btn-dark col-12" onClick={handleUpdateSubmit}>
                수정하기
            </button>
        </>
    );
}