const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer bg-light">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item">
                        <a href="https://github.com/emjkenz" class="nav-link px-2 text-muted">Github</a>
                    </li>
                </ul>
                <p class="text-center text-muted">© {year} Emily's <span className="text-success">React</span> Portfolio</p>
            </footer>
        </div>
        
    );
}

export default Footer;