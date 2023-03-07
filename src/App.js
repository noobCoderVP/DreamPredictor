import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Error from "./containers/Error";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Matches from "./containers/Matches";
import Predictions from "./containers/Predictions";
import Profile from "./containers/Profile";
import Contact from "./containers/Contact";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Header></Header>
                <div className="layout">
                    <Sidebar></Sidebar>
                    <div className="main">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route
                                path="/register"
                                element={<Register />}></Route>
                            <Route
                                path="/matches"
                                element={<Matches />}></Route>
                            <Route
                                path="/predictions"
                                element={<Predictions />}></Route>
                            <Route
                                path="/profile"
                                element={<Profile />}></Route>
                            <Route
                                path="/contact"
                                element={<Contact />}></Route>
                            {/* <Route></Route>
                            <Route></Route>
                            <Route></Route> */}
                            <Route path="/*" element={<Error />}></Route>
                        </Routes>
                        <Footer></Footer>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default App;
