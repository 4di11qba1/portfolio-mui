
import Home from "../sections/Home.jsx";
import About from "../sections/About.jsx";
import Services from "../sections/Services.jsx";
import Skills from "../sections/Skills.jsx";
import Test from "./Test.jsx"
import { useState, useEffect } from "react";

function Main() {
    return (
        <div className={'main'}>
            <Home />
            <Services />
            <Skills />
            <About />
            {/*<Test />*/}
        </div>
    )
}

export default Main;