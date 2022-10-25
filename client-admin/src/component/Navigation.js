import { AiFillHome } from 'react-icons/ai'
import { IoCreate } from 'react-icons/io5'
import { Link } from 'react-router-dom'
export default function Naavigation() {
    return (
        <div className="fixed bottom-1 w-full">
            <div className="w-1/5 p-2 rounded-lg mx-auto bg-yellow-500 flex gap-1 justify-evenly">
                <Link to={"/"}>
                    <AiFillHome className='text-white hover:text-lg transition-all hover:text-slate-800' />
                </Link>
                <Link to={"/create"}>
                    <IoCreate className='text-white hover:text-lg transition-all hover:text-slate-800' />
                </Link>
            </div>
        </div>
    )
}