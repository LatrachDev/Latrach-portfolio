import Header from "../../components/Header/Header";
import MainComponent from "../../components/main/MainComponent";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/Header/SideBar";
import AboutMe from "../../components/Sections/AboutMe";

export default function Index() {


    return (
        <div>
            <SideBar />
            <Header />
            <MainComponent />
            <AboutMe />
            <Footer />
        </div>
    );
}