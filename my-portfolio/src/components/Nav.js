import React from "react";

export default function Nav({ currentPage, setCurrentPage }) {
    return (
            <div className="nav-container">
                <h1>Kieran Harris</h1>
                <div className="nav-line">
                    <a href="#1" onClick={() => setCurrentPage("AboutMe")} id={currentPage === "AboutMe" ? "active-page" : "nav-anchor"}>About Me</a>
                    <a href="#1" onClick={() => setCurrentPage("MyProjects")} id={currentPage === "MyProjects" ? "active-page" : "nav-anchor"}>My Projects</a>
                    <a href="#1" onClick={() => setCurrentPage("ContactMe")} id={currentPage === "ContactMe" ? "active-page" : "nav-anchor"}>Contact Me</a>
                    <a href="#1" onClick={() => setCurrentPage("Resume")} id={currentPage === "Resume" ? "active-page" : "nav-anchor"}>Resume</a>
                </div>
            </div>
    )
}