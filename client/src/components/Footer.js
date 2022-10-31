export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            <div className="absolute top-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fef9c3" fillOpacity="1" d="M0,224L80,192C160,160,320,96,480,80C640,64,800,96,960,112C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
            <div className="absolute top-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fef9c3" fillOpacity="0.3" d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,170.7C672,149,768,171,864,165.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <div className="absolute top-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fef9c3" fillOpacity="0.4" d="M0,64L80,69.3C160,75,320,85,480,117.3C640,149,800,203,960,218.7C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
            <div className="absolute bottom-0 w-full blur-lg opacity-60 scale-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000" fillOpacity="1" d="M0,128L80,106.7C160,85,320,43,480,32C640,21,800,43,960,74.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className="h-screen bg-cover bg-fixed bg-center relative -z-10" style={{ "backgroundImage": "url(https://ik.imagekit.io/kthsx9hzg/8_GKsf7JRKF.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666142218180)" }}>
            </div>
            <div className="absolute bottom-24 z-10 right-1/4">
                <p className="text-white font-serif text-center">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.<br />kami yang berbahagia</p>
                <h1 className="font-mea-culpa text-6xl text-yellow-500 mt-2 md:text-8xl text-center">Randkhi & Permata</h1>
            </div>
        </footer>
    )
}