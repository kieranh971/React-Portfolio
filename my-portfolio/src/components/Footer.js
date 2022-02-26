import React from "react";

export default function Footer() {
    return (
        <footer>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="tel:610-233-6706">
                            <i className="bi bi-phone"></i>
                            <span>Phone</span>
                        </a>
                        <a className="nav-item nav-link" href="https://github.com/kieranh971/">
                            <i className="bi bi-github"></i>
                            <span>Github</span>
                        </a>
                        <a className="nav-item nav-link" href="https://www.linkedin.com/in/kieran-harris-4607b617b/">
                            <i className="bi bi-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </div>
            </nav>
        </footer>
    )
}