import React from 'react'
import 'bulma/css/bulma.min.css'
import {Header} from './components/structure/Header'
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App
