import NotFound from "../Pages/404";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Resume from "../Pages/Resume";
import './Page.css';

const PagePicker = ({page}) => {
    switch (page) {
        case 'home':
            return <Home />
        case 'about':
            return <About />
        case 'skills':
            return <Skills />
        case 'contact':
            return <Contact />
        case 'projects':
            return <Projects />
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