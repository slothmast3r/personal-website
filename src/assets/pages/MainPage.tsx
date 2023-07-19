import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Introduction } from '../components/Introduction';
import { AboutMe } from "../components/AboutMe";
import { Resume } from "../components/Resume";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Blog } from "../components/Blog";


function MainPage() {

    return (
        <>
       <Introduction></Introduction>
       <AboutMe></AboutMe>
       <Resume></Resume>
       <Skills></Skills>
       <Projects></Projects>
       <Blog></Blog>
        </>
    );
}

export default MainPage;
