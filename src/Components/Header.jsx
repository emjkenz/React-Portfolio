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
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    {/* Logo/Name */}
                    <div className="navbar-brand">My Portfolio</div>
                    {/* Mobile Nav Button */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* Links */}
                    <ul className="navbar-nav">
                        {links.map(link =>
                            <li className="nav-item">
                                <a
                                    className={`nav-link${isActive(page, link.url)}`}
                                    href={`#${link.url}`}
                                    onClick={() => setPage(link.url)}
                                >{link.name}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;