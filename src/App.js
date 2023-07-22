import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import {TheatreMode} from "./components/theatre/TheatreMode";
import {TicketBoxMode} from "./components/ticket/TicketBoxMode";

function App() {
  return (
      <div className="container-fluid">
        <Router>
          <div>
            <div className="row justify-content-center m-4">
              <h1 className="text-center">Grids & Circle</h1>
            </div>

            <h1>앱의 시작</h1>
            <ul>
              <li>
                <Link to="/theatre">Theatre 모드</Link>
              </li>
              <li>
                <Link to="/ticket">Ticket 모드</Link>
              </li>
            </ul>

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
