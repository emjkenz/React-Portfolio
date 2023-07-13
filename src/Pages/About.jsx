import './About.css';
import emily from '../Images/Face.jpg';

const About = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className='container'>
                        <div className='row'>
                            <div className='col about'>
                                <h1>About Me</h1>
                                <div className='image-container'>
                                    <img src={emily} alt="Me" />
                                </div>
                                <div>
                                    <ul>
                                        <li>Registered Nurse</li>
                                        <li>Cat mum</li>
                                        <li>Gamer</li>
                                        <li>Loose cannon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;