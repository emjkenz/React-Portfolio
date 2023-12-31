import ChoiceCuts from '../Images/choicecutsimage.png'
import MyMovieSearch from '../Images/mymoviesearch.gif'
import PreWork from '../Images/code.jpg'
import Homework from '../Images/seo.jpg'
import MyPortfolio from '../Images/motivational.jpg'
import Notepad from '../Images/notepad.jpg';
import Tutoriffic from '../Images/tutoriffic.jpg'
import './Portfolio.css';
import Project from '../Components/Project'

const allProjects = [
    {
        name: 'Group Project 3',
        description: 'A virtual online learning platform.',
        url: 'https://github.com/emjkenz/Tutoriffic-Student',
        button: 'Read More',
        image: Tutoriffic,
    },
    {
        name: 'PWA Text Editor',
        description: 'A PWA powered Text Editor to jot down code snippits.',
        url: 'https://github.com/emjkenz/PWA-Text-Editor',
        button: 'Read More',
        image: Notepad,
    },
    {
        name: 'Group Project 2',
        description: 'A platform that connects farmers, ranchers, and consumers in the world of premium meat products.',
        url: 'https://github.com/emjkenz/Choice-Cuts',
        button: 'Read More',
        image: ChoiceCuts,
    },
    {
        name: 'Group Project 1',
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
        image: MyPortfolio,
    },
]

const Portfolio = () => {
    return (
        <div className="row">
            <div className="col">
                <div className="container">
                    <div className="row">
                        <div className="col project">
                            <h1>My Portfolio</h1>
                            <div className='article-container'>
                                {allProjects.map(project =>
                                    <Project project={project} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;