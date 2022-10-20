import Event from "../components/Event";
import Gallery from "../components/Gallery";
import Headers from "../components/Headers";
import Mempelai from "../components/Mempelai";
import Gift from "../components/Gift";

export default function HomePages() {
    return (
        <>
        <Headers />
        <Mempelai />
        <Event />
        <Gallery />
        <Gift />
        </>
    )
}