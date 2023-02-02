import { useState } from "react"
import logo from '../../assets/images/logo.png'

const Header = () => {
    const [show, setShow] = useState(true)

    const handleShowBar = () => {
        setShow(!show)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadows">
            <a className="navbar-brand"><img src = {logo} alt = "logo" width = "150px" height = "50px"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={handleShowBar}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={show ? "collapse navbar-collapse justify-content-end align-items-center" : ''} id="navbarText">
                <ul className="navbar-nav  d-flex justify-content-end">
                    <li className="nav-item active mt-2 ">
                        <h6>Welcome Pythru</h6>
                        <p>Last Login:01-Feb.23 14:49:05</p><span>f</span>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export { Header }