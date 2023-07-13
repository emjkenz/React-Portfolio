import MyResume from '../Assets/Resume.docx';
import './Resume.css';

const Resume = () => {
    return (
        <div className="row">
            <div className="col">
                <div className="container">
                    <div className="row">
                        <div className="col resume">
                            <h1>Resume</h1>
                            <p>Download my resume</p>
                            <a className="btn btn-primary" href={MyResume} download={'Resume.docx'}>Download <i class="bi bi-arrow-down-circle"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;