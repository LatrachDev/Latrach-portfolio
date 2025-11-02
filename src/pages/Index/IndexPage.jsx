import Header from "../../components/Header/Header";
import MainComponent from "../../components/main/MainComponent";
import Navbar from "../../components/Header/NavBar";
import History from "../../components/Sections/History";
import Footer from "../../components/Footer/Footer";

export default function Index() {
    return (
        <div>
            <Navbar />
            <Header />
            <MainComponent />
        </div>
    );
}