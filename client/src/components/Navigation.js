import { HiHome } from 'react-icons/hi'
import { BsFillSuitHeartFill, BsFillChatSquareTextFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdPhotoLibrary } from 'react-icons/md'
export default function Navigation() {
    return (
        <nav className="w-full fixed bottom-0 z-50 px-10">
            
            <div className='w-8 h-8 bg-yellow-100 flex justify-center items-center rounded-lg mb-2 opacity-30 hover:opacity-90 transition-all duration-500 overflow-hidden relative'><audio src='../audio/audio.mp3' autoPlay controls loop className='absolute -left-[10px]'></audio></div>
            <div className="w-full sm:w-96 p-2 sm:p-5 bg-yellow-200 shadow-xl border border-yellow-800 rounded-lg mx-auto relative overflow-hidden">
                <img src="../foralkiriatas.jpg" className="absolute scale-150 top-3 left-3 sm:top-3 opacity-40" alt='foral' />

                <div className='relative z-10 flex justify-evenly sm:justify-between'>
                    <a href="#home" className='text-[0.70rem] sm:text-sm text-dark font-semibold text-center'><HiHome className='text-2xl sm:text-2xl mx-auto' />Home</a>

                    <a href="#mempelai" className='text-[0.70rem] sm:text-sm text-dark font-semibold text-center mt-1'><BsFillSuitHeartFill className='text-lg sm:text-xl mx-auto' />Mempelai</a>

                    <a href="#event" className='text-[0.70rem] sm:text-sm text-dark font-semibold text-center mt-1'><FaCalendarAlt className='text-lg sm:text-xl mx-auto' />Event</a>

                    <a href="#gallery" className='text-[0.70rem] sm:text-sm text-dark font-semibold text-center mt-1'><MdPhotoLibrary className='text-lg sm:text-xl mx-auto' />Gallery</a>

                    <a href="#ucapan" className='text-[0.70rem] sm:text-sm text-dark font-semibold text-center mt-1'><BsFillChatSquareTextFill className='text-lg sm:text-xl mx-auto' />Ucapan</a>
                </div>
            </div>
        </nav>
    )
}