import {Header} from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React from "react";

const Home = () => {
    return (
        <div className="App">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Home;