import React, {useEffect, useState} from "react";
import {Title} from "../performance/Title";
import {Genre} from "../performance/Genre";
import {AgeRate} from "../performance/AgeRate";
import {Stage} from "../performance/Stage";
import {Price} from "../performance/Price";
import {OpenRun} from "../performance/OpenRun";
import {CloseRun} from "../performance/CloseRun";
import axios from "axios";

function Registration({performance}) {
    const emptyPerformance = {
        id: null,
        title: null,
        genre: null,
        ageRate: null,
        stage: null,
        price: null,
        openRun: null,
        closeRun: null
    };
    const [newPerformance, setNewPerformance] = useState(emptyPerformance);

    const titleChangeHandler = (value) => setNewPerformance({...newPerformance, title: value});
    const genreChangeHandler = (value) => setNewPerformance({...newPerformance, genre: value});
    const ageRateChangeHandler = (value) => setNewPerformance({...newPerformance, ageRate: value});
    const stageChangeHandler = (value) => setNewPerformance({...newPerformance, stage: value});
    const priceChangeHandler = (value) => setNewPerformance({...newPerformance, price: value});
    const openRunChangeHandler = (value) => setNewPerformance({...newPerformance, openRun: value});
    const closeRunChangeHandler = (value) => setNewPerformance({...newPerformance, closeRun: value});

    const registerHandler = () => {
        console.log(newPerformance);
        axios.post("http://localhost:8080/performances", {
            headers: {'Authorization': `Bearer ${localStorage.jwtToken}`},
            title: newPerformance.title,
            genre: newPerformance.genre,
            ageRate: newPerformance.ageRate,
            stage: newPerformance.stage,
            price: newPerformance.price,
            openRun: newPerformance.openRun,
            closeRun: newPerformance.closeRun
        })
        .then(response => {
            const registered = response.data;
            console.log(registered);
            window.location.reload();
        })
        .catch(e => {
            console.log(e);
            alert("공연 등록이 실패했습니다.")
        });
    }

    const modifyHandler = () => {
        axios.put(`http://localhost:8080/performances/${performance.id}`, {
            headers: {'Authorization': `Bearer ${localStorage.jwtToken}`},
            id: newPerformance.id,
            title: newPerformance.title,
            genre: newPerformance.genre,
            ageRate: newPerformance.ageRate,
            stage: newPerformance.stage,
            price: newPerformance.price,
            openRun: newPerformance.openRun,
            closeRun: newPerformance.closeRun
        })
        .then(response => {
            const modified = response.data;
            console.log(modified);
            window.location.reload();
        })
        .catch(e => {
            console.log(e);
            alert("공연 정보 변경이 실패했습니다.");
        })
    }

    const clearHandler = () => {
        setNewPerformance(emptyPerformance);
        window.location.reload();
    };

    useEffect(() => {
        if (performance !== null) {
            setNewPerformance({
                id: performance.id,
                title: performance.title,
                genre: performance.genre,
                ageRate: performance.ageRate,
                stage: performance.stage,
                price: performance.price,
                openRun: performance.openRun,
                closeRun: performance.closeRun
            });
        }
    }, [performance]);

    return (
            <>
                <form>
                    <Title title={newPerformance.title} onTitleChangeHandler={titleChangeHandler}/>
                    <Genre genre={newPerformance.genre} onGenreChangeHandler={genreChangeHandler}/>
                    <AgeRate ageRate={newPerformance.ageRate} onAgeRateChangeHandler={ageRateChangeHandler}/>
                    <Stage stage={newPerformance.stage} onStageChangeHandler={stageChangeHandler}/>
                    <Price price={newPerformance.price} onPriceChangeHandler={priceChangeHandler}/>
                    <OpenRun openRun={newPerformance.openRun} onOpenRunChangeHandler={openRunChangeHandler}/>
                    <CloseRun closeRun={newPerformance.closeRun} onCloseRunChangeHandler={closeRunChangeHandler}/>
                </form>
                {performance === null ? (
                        <button className="btn btn-dark col-12 mb-3"
                                onClick={registerHandler}>
                            등록하기
                        </button>
                ) : (<>
                    <button className="btn btn-dark col-12"
                            onClick={modifyHandler}>
                        수정하기
                    </button>
                    <button className="btn btn-dark col-12 mb-3"
                            onClick={clearHandler}>
                        신규 등록하기
                    </button>
                </>)}
            </>
    );
}

export default Registration;