const Header = ({
    page,
    setPage,
}) => {
    return (
        <header>
            <nav>
                <div>Logo</div>
                <ul>
                    <li><a
                        href="#home"
                        onClick={() => setPage('home')}
                    >Home</a></li>
                    <li><a 
                        href="#about"
                        onClick={() => setPage('about')}
                    >About</a></li>
                    <li><a 
                        href="#other"
                        onClick={() => setPage('other')}
                    >Other</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;