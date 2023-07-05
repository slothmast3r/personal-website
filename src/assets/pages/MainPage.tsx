import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Introduction } from '../components/Introduction';
import { AboutMe } from "../components/AboutMe";
import { Resume } from "../components/Resume";


function MainPage() {

    return (
        <>
       <Introduction></Introduction>
       <AboutMe></AboutMe>
       <Resume></Resume>
        </>
    );
}

export default MainPage;
