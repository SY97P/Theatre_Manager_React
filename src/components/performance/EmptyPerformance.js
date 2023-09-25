import React from "react";

export function EmptyPerformance() {
    return (
            <div className="d-flex justify-content-center align-items-center"
                 style={{height: '200px'}}>
                <div className="bg-light p-3 rounded">
                    <h4 className="text-center mb-3">공연 정보가 없습니다</h4>
                    <p className="text-muted text-center">원하시는 공연 정보가 없습니다.</p>
                </div>
            </div>
    );
}