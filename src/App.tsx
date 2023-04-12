import React from 'react'
import 'bulma/css/bulma.min.css'
import {Header} from './components/structure/Header'
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";

function App() {
    return (
        <div className="App has-bg-image">
            <section className="section">
                <Header/>
            </section>

            <section className="section">
                <Content/>
                <Footer/>
            </section>

        </div>
    )
}

export default App
