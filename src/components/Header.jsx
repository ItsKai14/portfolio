import { Link } from "react-router-dom"

function Header () {
    return (
        <>
            <nav className="navbar bg-dark navbar-expand-lg sticky-top py-3" aria-label="Main site navigation">
                <div className="container">
                    <b><Link className="navbar-brand" style={{ fontSize: "xx-large", color: "#22D3EE" }} to="/">CodeDotExe</Link></b>
                    <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="/hamburgerMenu.png" className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;