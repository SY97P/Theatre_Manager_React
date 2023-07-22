import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {TheatreMode} from "./components/theatre/TheatreMode";
import {TicketBoxMode} from "./components/ticket/TicketBoxMode";
import {ReservationMode} from "./components/reservation/ReservationMode";

function App() {
    return (
        <div className="container-fluid">
            <Router>
                <div>
                    <div className="row justify-content-center m-4">
                        <h1 className="text-center" color="white">🍊 TANGERINE THEATRE 🍊</h1>
                    </div>

                    <div className="row justify-content-end mb-3" style={{marginRight: '50px'}}>
                        <div className="col-auto">
                            <Link to="/theatre" style={{backgroundColor: '#FF9933'}} className="btn me-2">
                                Theatre
                            </Link>
                            <Link to="/ticket" style={{backgroundColor: '#FF9933'}} className="btn me-2">
                                Ticket Box
                            </Link>
                            <Link to="/reservation" style={{backgroundColor: '#FF9933'}} className="btn">
                                Reservation
                            </Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="row">
                            <Routes>
                                <Route path="/theatre" element={<TheatreMode/>}/>
                                <Route path="/ticket" element={<TicketBoxMode/>}/>
                                <Route path="/reservation" element={<ReservationMode/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </div>

    );
}

export default App;
