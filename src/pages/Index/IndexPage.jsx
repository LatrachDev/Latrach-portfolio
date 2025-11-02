import { useRef } from "react";
import Header from "../../components/Header/Header";
import MainComponent from "../../components/main/MainComponent";
import Navbar from "../../components/Header/NavBar";
import History from "../../components/Sections/History";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/Header/SideBar";

export default function Index() {
    const sideBarRef = useRef(null);

    const handleContactClick = () => {
        sideBarRef.current?.open?.();
    };

    return (
        <div>
            <SideBar ref={sideBarRef} />
            <Navbar onContactClick={handleContactClick} />
            <Header />
            <MainComponent />
            <Footer />
        </div>
    );
}