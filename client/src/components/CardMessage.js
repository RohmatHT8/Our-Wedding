import { BiTimeFive } from 'react-icons/bi'
export default function CardMessage({el, setWishes}) {
    return (
        <div>
            <div className="px-10 py-5 relative z-10 text-left">
                <p className="font-bold text-yellow-800 font-inter">{el.name}</p>
                <p className="text-[0.70rem] text-slate-400"><BiTimeFive className='inline mb-1 mr-1' />{el.createdAt.split("T")[0]}</p>
                <p className="text-yellow-800 opacity-90 text-sm">{el.wishes}</p>
            </div>
            <hr className="border border-yellow-800 bg-yellow-800 mt-3" />
        </div>
    )
}