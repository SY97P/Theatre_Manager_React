import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Intro } from './components/Intro';
import setAuthorizationToken from './components/auth/setAuthorizationToken';
import Main from './components/Main';
import { Mode } from './components/util/Mode';

function App() {
    useEffect(() => {
        const uri = window.location.pathname;
        if (uri.includes('authorized')) {
            const token = uri.replace('/authorized/', '');
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
        }
    }, []);

    return (
            <div className="container-fluid body">
                <Router>
                    <div className="main-container">
                        <div className="banner text-center my-4">
                            <img src="/logo.png" alt="logo" />
                        </div>
                        <div className="row justify-content-end mb-3">
                            <div className="col-auto">
                                <Link to="/company" className="btn btn-primary me-2" style={{background: "orange", border: "none", width: 200, height: 50}}>
                                    For Company
                                </Link>
                                <Link to="/audience" className="btn btn-primary me-2" style={{background: "orange", border: "none", width: 200, height: 50}}>
                                    For Audience
                                </Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="row">
                                <Routes>
                                    <Route path="/company" element={<Main mode={Mode.COMPANY} />} />
                                    <Route path="/audience" element={<Main mode={Mode.AUDIENCE} />} />
                                    <Route path="*" element={<Intro />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
    );
}

export default App;
