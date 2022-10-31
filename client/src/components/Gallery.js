export default function Gallery() {
    return (
        <section id="gallery" className="relative bg-white">
            <div className="container py-5 px-10 mx-auto text-center">
                <h1 className="font-tangarine text-5xl md:text-6xl font-bold mb-5 text-dark">Gallery</h1>
            </div>
            <div className="grid grid-cols-2 gap-2 px-2 pb-60 sm:grid-cols-3 max-w-4xl mx-auto">
                <img src="./img/17.jpg" alt="galerry item" />
                <img src="./img/1.jpg" className="row-span-2" alt="galerry item" />
                <img src="./img/2.jpg" alt="galerry item" />
                <img src="./img/3.jpg" alt="galerry item" />
                <img src="./img/4.jpg" alt="galerry item" />
                <img src="./img/5.jpg" className="row-span-2" alt="galerry item" />
                <img src="./img/6.jpg" alt="galerry item" />
                <img src="./img/7.jpg" alt="galerry item" />
                <img src="./img/8.jpg" alt="galerry item" />
                <img src="./img/9.jpg" alt="galerry item" />
                <img src="./img/10.jpg" alt="galerry item" />
                <img src="./img/11.jpg" className="row-span-2" alt="galerry item" />
                <img src="./img/12.jpg" className="row-span-2" alt="galerry item" />
                <img src="./img/13.jpg" className="row-span-2" alt="galerry item" />
                <img src="./img/14.jpg" className="row-span-2" alt="galerry item" />
                <img src="./img/15.jpg" className="row-span-2" alt="galerry item" />
                <img src="./img/16.jpg" className="row-span-2" alt="galerry item" />
                <video width="320" height="240" controls>
                    <source src="../video/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="absolute bottom-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fillOpacity="1" d="M0,160L80,186.7C160,213,320,267,480,261.3C640,256,800,192,960,165.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className="absolute bottom-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fillOpacity="0.3" d="M0,96L80,106.7C160,117,320,139,480,128C640,117,800,75,960,90.7C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className="absolute bottom-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fillOpacity="0.3" d="M0,256L80,256C160,256,320,256,480,224C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </section>
    )
}