import Event from "../components/Event";
import Gallery from "../components/Gallery";
import Headers from "../components/Headers";
import Mempelai from "../components/Mempelai";
import Gift from "../components/Gift";
import Ucapan from "../components/Ucapan";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function HomePages() {
    return (
        <>
            <Navigation />
            <Headers />
            <Mempelai />
            <Event countDownTimestampMs = {1670058000000}/>
            <Gallery />
            <Gift />
            <Ucapan />
            <Footer />
        </>
    )
}