import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {TheatreMode} from "./components/theatre/TheatreMode";
import {TicketBoxMode} from "./components/ticket/TicketBoxMode";
import {ReservationMode} from "./components/reservation/ReservationMode";
import {NoMatch} from "./components/NoMatch";

function App() {
    return (
        <div className="container-fluid" style={{ backgroundColor: '#303030', minHeight: '100vh' }}>
            <Router>
                <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
                    <div className="row justify-content-center m-4">
                        <h1 className="text-center" style={{color: 'white'}}>🍊 TANGERINE THEATRE 🍊</h1>
                    </div>

                    <div className="row justify-content-end mb-3" style={{marginRight: '50px'}}>
                        <div className="col-auto">
                            <Link to="/theatre" style={{backgroundColor: '#FF9933', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '5px'}} className="btn me-2">
                                Theatre
                            </Link>
                            <Link to="/ticket" style={{backgroundColor: '#FF9933', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '5px'}} className="btn me-2">
                                Ticket Box
                            </Link>
                            <Link to="/reservation" style={{backgroundColor: '#FF9933', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '5px'}} className="btn">
                                Reservation
                            </Link>
                        </div>
                    </div>

                    <div className="card" style={{backgroundColor: 'white', borderRadius: '10px', padding: '20px'}}>
                        <div className="row">
                            <Routes>
                                <Route path="/theatre" element={<TheatreMode/>}/>
                                <Route path="/ticket" element={<TicketBoxMode/>}/>
                                <Route path="/reservation" element={<ReservationMode/>}/>
                                <Route path="*" element={<NoMatch />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
