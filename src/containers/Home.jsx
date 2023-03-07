import React from "react";
import image from "../assets/home.png";

function Home() {
    return (
        <main>
            <h2 style={{ fontFamily: "Raleway" }}>
                Welcome to your dream website
            </h2>
            <section>
                <img src={image} alt="" />
                <div>
                    <h3>How to use?</h3>
                    <p>
                        Our website will help you create your dream team for
                        upcoming matches! use it as a professional advisor. we
                        are trusted by over a million users. our ML model will
                        help you choose the best team for betting. let's win the
                        bet!!!
                    </p>
                </div>
            </section>
            <section className="about">
                <h2 style={{ backgroundColor: "black" }}>About Us</h2>
                <p>
                    We are the team of 5 people, from india. our aim is to help
                    people predicting the best team for betting applications. we
                    do not guarantee the best team but help you build your team.
                </p>
                <q>
                    The greatest glory in living lies not in never falling, but
                    in rising every time we fall.
                </q>
                <p style={{ textAlign: "right" }}> -Nelson Mandela</p>
            </section>
            <section style={{ marginTop: "50px" }}>
                <h2>Our Services</h2>
                <div className="cards">
                    <div>
                        <h3>Matches</h3>
                        <p>information about current and upcoming matches</p>
                    </div>
                    <div>
                        <h3>Predictions</h3>
                        <p>available predictions for upcoming matches</p>
                    </div>
                    <div>
                        <h3>Profile</h3>
                        <p>your bookmarked matches, created teams!</p>
                    </div>
                </div>
            </section>
            <section className="statistics">
                <h2>Our Stats</h2>
                <div className="newcards">
                    <div>
                        <h3>Users</h3>
                        <span>123+</span>
                    </div>
                    <div>
                        <h3>Predictions</h3>
                        <span>100+</span>
                    </div>
                    <div>
                        <h3>Ongoing Matches</h3>
                        <span>20</span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
