import emily from '../Images/Face.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="row home">
            <div className='col'>
                <div>
                    <p>Hello<span class="underscore">__</span></p>
                    <h1>I'm <span class="emily">Emily</span><span class="flash">|</span></h1>
                    <p>Developer in the making</p>
                </div>
            </div>
            <div className="col image-container">
                <img src={emily} alt="Portrait" />
            </div>
        </div>
    );
}

export default Home;