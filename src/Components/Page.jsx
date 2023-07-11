import NotFound from "../Pages/404";
import About from "../Pages/About";
import Home from "../Pages/Home";
import './Page.css';

const PagePicker = ({page}) => {
    switch (page) {
        case 'home':
            return <Home />
        case 'about':
            return <About />
        default:
            return <NotFound />
    }
}

const Page = ({
    page,
}) => 
    <div className={`container-fluid py-3 ${page}-page`}>
        <PagePicker page={page} />
    </div>

export default Page;