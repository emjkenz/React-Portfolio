const Project = ({project}) => {
    const {
        name,
        description,
        url,
        button,
        image,
    } = project;
    return (
        <article style={{ backgroundImage: `url(${image})` }}>
            <div className="darken">
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noreferrer noopener">{button}</a>
            </div>
        </article>
    );
}

export default Project;