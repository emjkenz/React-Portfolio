const isActive = (activePage, page) => {
    return activePage === page ? ' active' : ''
} 

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
                        <li className="nav-item">
                            <a
                                className={`nav-link${isActive(page, 'home')}`}
                                href="#home"
                                onClick={() => setPage('home')}
                            >Home</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link${isActive(page, 'about')}`}
                                href="#about"
                                onClick={() => setPage('about')}
                            >About</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link${isActive(page, 'other')}`}
                                href="#other"
                                onClick={() => setPage('other')}
                            >Other</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;