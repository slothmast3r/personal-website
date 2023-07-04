import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Introduction} from '../components/Introduction';
import { AboutMe } from "../components/AboutMe";


function MainPage() {

    return (
        <>
       <Introduction></Introduction>
       <AboutMe></AboutMe>
        </>
    );
}

export default MainPage;
