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
            <div className="relative w-5/6 mx-auto">
                <div class='snow-flakes'>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div>
                    <div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div><div class='flake'></div></div>
            </div>
            <Navigation />
            <Headers />
            <Mempelai />
            <Event countDownTimestampMs={1670058000000} />
            <Gallery />
            <div className="bg-dark">
                <iframe
                    src="https://youtube.com/embed/lXuKqlke-F0" className="mx-auto w-3/4 h-[400px]">
                </iframe>
            </div>
            <Gift />
            <Ucapan />
            <Footer />
        </>
    )
}