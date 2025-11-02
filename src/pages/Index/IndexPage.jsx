import Header from "../../components/Header/Header";
import MainComponent from "../../components/main/MainComponent";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/Header/SideBar";

export default function Index() {


    return (
        <div>
            <SideBar />
            <Header />
            <MainComponent />
            <Footer />
        </div>
    );
}