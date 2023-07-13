import { useState } from "react"
import Navigation from "./Navigation"

const isActive = (activePage, page) => {
    return activePage === page ? ' active' : ''
}

const links = [
    {
        name: 'Home',
        url: 'home',
    },
    {
        name: 'About Me',
        url: 'about-me',
    },
    {
        name: 'Skills',
        url: 'skills',
    },
    {
        name: 'Contact',
        url: 'contact',
    },
    {
        name: 'Portfolio',
        url: 'portfolio',
    },
    {
        name: 'Resume',
        url: 'resume',
    }
]

const Header = ({
    page,
    setPage,
}) => {

    const [mobileNav, setMobileNav] = useState(false)

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Logo/Name */}
                    <div className="navbar-brand">Em's Portfolio</div>
                    {/* Mobile Nav Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navToggle"
                        aria-controls="navbarToggleExternalContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setMobileNav(!mobileNav)}
                    >
                        <i className="bi bi-list"></i>
                    </button>
                    {/* Links */}
                    <ul className="navbar-nav d-none d-lg-flex">
                        {links.map(link =>
                            <Navigation
                                name={link.name}
                                url={link.url}
                                isActive={isActive}
                                page={page}
                                setPage={setPage}
                            />
                        )}
                    </ul>
                </div>
            </nav>
            {/* Links */}
            <div className={`collapse ${mobileNav ? 'show' : ''}`} id="navToggle">
                <ul className="bg-light navbar-nav text-center">
                    {links.map(link =>
                        <Navigation 
                            name={link.name}
                            url={link.url}
                            isActive={isActive}
                            page={page}
                            setPage={setPage}
                        />
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;