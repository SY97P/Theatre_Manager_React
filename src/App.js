import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {TheatreMode} from "./components/theatre/TheatreMode";
import {TicketBoxMode} from "./components/ticket/TicketBoxMode";

function App() {
  return (
      <div className="container-fluid">
        <Router>
          <div>
            <div className="row justify-content-center m-4">
              <h1 className="text-center" color="white">🍊 TANGERINE THEATRE 🍊</h1>
            </div>

            <div className="row justify-content-end mb-3" style={{ marginRight: '50px' }}>
              <div className="col-auto">
                <Link to="/theatre" style={{ backgroundColor: '#FF9933' }} className="btn me-2">
                  Theatre 모드
                </Link>
                <Link to="/ticket" style={{ backgroundColor: '#FF9933' }} className="btn">
                  Ticket 모드
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="row">
                <Routes>
                  <Route path="/theatre" element={<TheatreMode />} />
                  <Route path="/ticket" element={<TicketBoxMode />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </div>

  );
}

export default App;
