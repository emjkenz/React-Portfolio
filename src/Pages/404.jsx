import './404.css';

const NotFound = () => {
    return (
        <>
            <div className="row">
                <div className="col notfound">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                    <a href='/' className='btn btn-primary'>Home</a>
                </div>
            </div>
        </>
    );
}

export default NotFound;