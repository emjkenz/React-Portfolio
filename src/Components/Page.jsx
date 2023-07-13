import NotFound from "../Pages/404";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Portfolio from "../Pages/Portfolio";
import Skills from "../Pages/Skills";
import Resume from "../Pages/Resume";
import './Page.css';

const PagePicker = ({page}) => {
    switch (page) {
        case 'home':
            return <Home />
        case 'about-me':
            return <About />
        case 'skills':
            return <Skills />
        case 'contact':
            return <Contact />
        case 'portfolio':
            return <Portfolio />
        case 'resume':
            return <Resume />
        default:
            return <NotFound />
    }
}

const Page = ({
    page,
}) => 
    <div className={`container-fluid page py-3 ${page}-page`}>
        <PagePicker page={page} />
    </div>

export default Page;