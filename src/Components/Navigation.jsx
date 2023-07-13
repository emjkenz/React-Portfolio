const Navigation = ({
    name,
    url,
    isActive,
    setPage,
    page,
    addBorder = false,
}) => {
    return (
        <li className={`nav-item ${addBorder?'border-top':''}`}>
            <a
                className={`nav-link${isActive(page, url)}`}
                href={`#${url}`}
                onClick={() => setPage(url)}
            >{name}</a>
        </li>
    );
}

export default Navigation