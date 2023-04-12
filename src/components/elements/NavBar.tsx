import {useState} from 'react'
import MenuItem from './MenuItem'

export function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    function handleMenuClick() {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <nav className="navbar is-transparent">
                <div className="container">
                    <div className="navbar-brand">
                        <a href="/" className="navbar-item title is-unselectable">Kiran Varma</a>
                    </div>
                </div>

                <div>
                    <div className="navbar-burger burger" onClick={handleMenuClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={'navbar-menu nav-menu ' + (showMenu ? 'is-active' : null)}>
                        <div className="navbar-end" onClick={handleMenuClick}>
                            <MenuItem text="About Me" href="#about-me"/>
                            <MenuItem text="Skills" href="#skills"/>
                            <MenuItem text="Experience" href="#experience"/>
                            <MenuItem text="CV" href="#cv"/>
                            <MenuItem text="Contact Me" href="#contact-me"/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
