import { BiTimeFive } from 'react-icons/bi'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import CardUcapan from './CardUcapan'
export default function Ucapan() {
    return (
        <section id="ucapan" className=" bg-yellow-100 relative">
            <div className="container py-10 mx-auto text-center">
                <h1 className="font-tangarine text-5xl md:text-6xl font-semibold mb-5">Doa dan Ucapan</h1>
                <div className="px-5">
                    <div className="max-w-2xl p-3 bg-yellow-50 shadow-xl rounded-xl mx-auto border border-yellow-600 relative overflow-hidden">
                        <img src="../foralkiriatas.jpg" className="absolute scale-150 top-12 sm:bottom-16 opacity-50" alt='foral' />
                        <div className="relative z-10">
                            <p className="text-right font-bold text-yellow-800"><img src="../bird.png" className="w-5 inline mb-1" />0 Wishes</p>
                            <hr className="border border-yellow-800 bg-yellow-800" />
                            <CardUcapan />
                        </div>
                        {/* card messege */}
                        <hr className="border border-yellow-800 bg-yellow-800 mt-3" />

                        <div className="px-10 py-5 relative z-10 text-left">
                            <p className="font-bold text-yellow-800 font-inter text-lg">Rohmat Hidayattullah</p>
                            <p className="text-sm text-slate-400"><BiTimeFive className='inline mb-1 mr-1' />baru saja</p>
                            <p className="text-yellow-800 opacity-90 font-semibold">Selamat Ya lorem ipsum dolor sit amet pdok ashdn ashdyeb sadkasd asdahsk </p>
                        </div>
                        <hr className="border border-yellow-800 bg-yellow-800 mt-3" />

                        {/* pagination */}
                        <div className='pt-2 relative z-10'>
                            <a href='#' className='text-yellow-800 p-2 hover:font-bold'><BsArrowLeft className='inline mb-1 mr-1'/>Sebelumnya</a>
                            <a className='text-yellow-800 p-2 hover:font-bold'>Selanjutnya <BsArrowRight className='inline mb-1 ml-1'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}