import React from "react";

export function NoMatch() {
    return (
        <div className="text-center mt-5">
            <h2 style={{color: "#FF9933", fontSize: "36px", marginBottom: "20px"}}>
                Welcome to Tangerine Theatre
            </h2>
            <p style={{color: "#4F4F4F", fontSize: "20px", lineHeight: "1.6", marginBottom: "30px"}}>
                Experience the magic of live performances at <strong>Tangerine Theatre</strong>.<br/>
                Our state-of-the-art facilities and captivating productions will
                leave you with unforgettable memories.
            </p>
        </div>
    );
}
