export default function Gallery() {
    return (
        <section id="gallery" className="relative bg-white">
            <div className="container py-5 px-10 mx-auto text-center">
                <h1 className="font-tangarine text-5xl md:text-6xl font-bold mb-5 text-dark">Gallery</h1>
            </div>
            <div className="grid grid-cols-2 gap-2 px-2 pb-20 sm:grid-cols-3 max-w-4xl mx-auto">
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8456_c5uOi9BlC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165671225" />

                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8484_em4Rbl8cX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165670516" className="row-span-2" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8458_68LtMnrQ7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165669480" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8457_5ToxkeLCi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165669216" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8454_73kBPlmfc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165668135" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8455_neBrNpc-U.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165668766" className="row-span-2" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8452_1BxctRP4m.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165667537" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8449_cBaDUfaL8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165665772" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8448_5YovW2aBh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165665183" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8447_eSZJXre9V.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165664075" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8420_9DTxNVEhst.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165665732" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8126_XFFZsKV-L.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165665692" className="row-span-2" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8125_XLyYTsEWN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165665673" className="row-span-2" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8123_umjELPnQK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165665450" className="row-span-2" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8442_3eHAapnlQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165664927" className="row-span-2" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8307_RVvJOpFaM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165664706" className="row-span-2" />
                <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8459_MYJGp-zct.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165671056" className="row-span-2" />
            </div>
            <div className="absolute bottom-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,160L80,186.7C160,213,320,267,480,261.3C640,256,800,192,960,165.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className="absolute bottom-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="0.3" d="M0,96L80,106.7C160,117,320,139,480,128C640,117,800,75,960,90.7C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className="absolute bottom-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="0.3" d="M0,256L80,256C160,256,320,256,480,224C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </section>
    )
}