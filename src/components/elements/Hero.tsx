import {NavBar} from "./NavBar";
import cv from '../../data/cv.json'

export default function Hero() {
    return (
        <nav className="navbar hero is-dark has-bg-image is-fixed-top is-transparent">
            <div className="hero-head">
                <NavBar/>
            </div>

            <div className="hero-foot" style={{paddingBottom: "20px"}}>
                <div className="columns is-mobile">
                    <div className="column"></div>
                    {cv.basics.profiles
                        .map((value, index) => {
                            return (
                                <div key={index} className="column has-text-centered">
                                    <a
                                        href={value.url}
                                        target="blank"
                                        className="is-hovered"
                                        title={value.network}
                                    >
                                    <span className="icon is-medium is-">
                                        <i className={value.x_icon}></i>
                                    </span>
                                    </a>
                                </div>
                            )
                        })
                    }
                    <div className="column"></div>
                </div>

            </div>
        </nav>
    )
}