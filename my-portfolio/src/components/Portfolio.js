import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Nav from "./Nav";
import Footer from "./Footer";

function Portfolio() {
    const [currentPage, setCurrentPage] = useState("AboutMe");


    const renderPortfolio = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe/>;
        } else if (currentPage === "MyProjects") {
            return <MyProjects/>;
        } else if (currentPage === "ContactMe") {
            return <ContactMe/>;
        } else if (currentPage === "Resume") {
            return <Resume/>;
        }
    };

    return (
        <div className="container">
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {renderPortfolio()}
            <Footer />
        </div>
    );


}

export default Portfolio