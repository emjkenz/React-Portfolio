import NotFound from "../Pages/404";
import About from "../Pages/About";
import Home from "../Pages/Home";

const Page = ({
    page,
}) => {
    switch (page) {
        case 'home':
            return <Home />
        case 'about':
            return <About />
        default:
            return <NotFound />
    }
}

export default Page;