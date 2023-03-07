import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { MdOnlinePrediction } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { AiFillProfile } from "react-icons/ai";
import { FiLogOut, FiLogIn } from "react-icons/fi";

function Sidebar() {
    const [logged, setlogged] = useState(localStorage.getItem("dream"));
    return (
        <aside>
            <ul>
                <NavLink to="/">
                    <li>
                        <FaHome />
                        <span>Home</span>
                    </li>
                </NavLink>
                <NavLink to="/matches">
                    <li>
                        <GiCricketBat />
                        <span>Matches</span>
                    </li>
                </NavLink>
                <NavLink to="/predictions">
                    <li>
                        <MdOnlinePrediction />
                        <span>Predictions</span>
                    </li>
                </NavLink>
                <NavLink to="/contact">
                    <li>
                        <IoMdContact />
                        <span>Contacts</span>
                    </li>
                </NavLink>
                <NavLink to="/profile">
                    <li>
                        <AiFillProfile />
                        <span>Profile</span>
                    </li>
                </NavLink>
                <NavLink className="logout" to="/login">
                    <li>
                        {logged ? (
                            <>
                                <FiLogOut />
                                <span>LogOut</span>
                            </>
                        ) : (
                            <>
                                <FiLogIn />
                                <span>LogIn</span>
                            </>
                        )}
                    </li>
                </NavLink>
            </ul>
        </aside>
    );
}

export default Sidebar;
