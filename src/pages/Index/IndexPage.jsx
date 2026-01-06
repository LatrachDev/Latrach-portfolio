import Header from "../../components/Header/Header";
import MainComponent from "../../components/main/MainComponent";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/Header/SideBar";
import AboutMe from "../../components/Sections/AboutMe";
import WebDevelopmentProjects from "../../components/Sections/WebDevelopmentProjects";
import DesignGallery from "../../components/Sections/DesignGallery";
import Experiences from "../../components/Sections/Experiences";
import Formations from "../../components/Sections/Formations";
import MyTools from "../../components/Tools/MyTools";

export default function Index() {
    return (
        <div>
            <SideBar />
            <Header />
            <MainComponent />
            <AboutMe />
            <MyTools />
            <WebDevelopmentProjects />
            <DesignGallery />
            <Experiences />
            <Formations />
            <Footer />
        </div>
    );
}