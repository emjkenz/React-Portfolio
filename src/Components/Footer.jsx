const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer bg-light">
            <footer className="py-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a 
                            href="https://github.com/emjkenz" 
                            className="nav-link px-2 text-muted"
                            target="_blank"
                            rel="noreffer noopener noreferrer"
                        ><i className="bi-github"></i> Github</a>
                    </li>
                </ul>
                <p className="text-center text-muted">© {year} Emily's <span className="text-success">React</span> Portfolio</p>
            </footer>
        </div>
        
    );
}

export default Footer;