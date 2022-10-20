import { useState } from 'react'
import { MdFileCopy } from 'react-icons/md'
export default function Gift() {
    const [isActive, setIsActive] = useState(true)
    return (
        <section id="event" className="bg-dark relative pb-40 md:pb-72">
            <div className="container py-10 text-center px-5 mx-auto">
                <img src="../gift.png" className="w-40 mx-auto" alt='gift'/>
                <h1 className="font-tangarine text-5xl md:text-7xl font-bold relative z-10 text-slate-100 mb-5 mt-3">Wedding Gift</h1>
                <p className="max-w-xl text-slate-100 font-inter mx-auto">Doa restu Bapak Ibu Saudara/i merupakan yang sangat berarti bagi kami. Berikut Bapak Ibu Saudara/i dapat memberikan kado secara cashless sebagai ungkapan tanda kasih</p>
                <button className="bg-yellow-700 hover:bg-yellow-800 pt-2 pb-1 px-5 font-inter font-semibold text-slate-100 rounded-2xl mt-3" onClick={() => {
                    if (!isActive) {
                        setIsActive(true)
                    } else {
                        setIsActive(false)
                    }
                }}><img src="../gift.png" className="w-5 inline mb-2 mx-auto" alt='gift' /> Kirim Hadiah</button>

                <div className={isActive ? "hidden" : "w-72 sm:w-96 bg-slate-100 py-10 mx-auto mt-5 rounded-2xl relative overflow-hidden"}>
                    <img src="../foral.jpg" className="img-bg-card" alt='foral'/>
                    <div className="relative z-10">
                        <p className="text-xl font-bold text-slate-700"><span className="text-blue-700 font-serif text-4xl">Bank BCA</span> <br />Permata Hati Sukaryanatha<br />12345556</p>
                        <button className="bg-blue-700 mt-2 hover:bg-blue-800 text-slate-100 font-semibold py-2 px-3 rounded-md"><MdFileCopy className='inline mb-1 mr-1' />Salin</button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-screen">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fef08a" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,170.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className="absolute bottom-0 w-screen">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fef08a" fill-opacity="0.3" d="M0,160L48,186.7C96,213,192,267,288,245.3C384,224,480,128,576,90.7C672,53,768,75,864,90.7C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className="absolute bottom-0 w-screen">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fef08a" fill-opacity="0.3" d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,133.3C672,149,768,203,864,218.7C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </section>
    )
}