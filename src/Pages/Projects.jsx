import ChoiceCuts from '../Images/choicecutsimage.png'
import MyMovieSearch from '../Images/mymoviesearch.gif'
import PreWork from '../Images/code.jpg'
import Homework from '../Images/seo.jpg'
import Portfolio from '../Images/motivational.jpg'
import './Project.css';

const allProjects = [
    {
        name: 'Group Project',
        description: 'A platform that connects farmers, ranchers, and consumers in the world of premium meat products.',
        url: 'https://github.com/emjkenz/Choice-Cuts',
        button: 'Read More',
        image: ChoiceCuts,
    },
    {
        name: 'Group Project',
        description: 'Built a website that enables a user to find movie screenings in their local area.',
        url: 'https://emjkenz.github.io/My-Movie-Search/',
        button: 'Read More',
        image: MyMovieSearch,
    },
    {
        name: 'Pre-Work Project',
        description: 'I made a website for my pre-work',
        url: 'https://emjkenz.github.io/prework-study-guide/',
        button: 'Read More',
        image: PreWork,
    },
    {
        name: 'Homework Project',
        description: 'Optimise a website with semantic HTML',
        url: 'https://emjkenz.github.io/Homework-1-SEO-Website-Optimisation/',
        button: 'Read More',
        image: Homework,
    },
    {
        name: 'My Portfolio',
        description: 'The HTML version of this website',
        url: 'https://github.com/emjkenz/my-portfolio',
        button: 'Read More',
        image: Portfolio,
    },
]

const Projects = () => {
    return (
        <div className="row">
            <div className="col">
                <div className="container">
                    <div className="row">
                        <div className="col project">
                            <h1>My Projects</h1>
                            <div className='article-container'>
                                {allProjects.map(project =>
                                    <article style={{ backgroundImage: `url(${project.image})` }}>
                                        <div class="darken">
                                            <h3>{project.name}</h3>
                                            <p>{project.description}</p>
                                            <a href={project.url} target="_blank" rel="noreferrer noopener">{project.button}</a>
                                        </div>
                                    </article>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;