import {BsEnvelopeOpen} from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
export default function FrontPages() {
    const [searchParams] = useSearchParams()
    const name = searchParams.get("to")
    return (
        <div className='w-screen h-screen overflow-hidden'>
            <div className='h-screen object-cover sm:w-screen object-bottom bg-no-repeat relative bg-cover bg-bottom' style={{ "backgroundImage": "url('https://ik.imagekit.io/kthsx9hzg/4_uTjiDlmNe.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666142218315')" }}>
                <div className="flare"></div>
                <div className="flare"></div>
                <div className="flare bottom-0 -right-6"></div>
                <div className="bg-black w-screen h-screen opacity-50 absolute"></div>
                <div className="container pt-10 text-center absolute z-30 md:bottom-5 lg:bottom-20">
                    <h1 className="text-7xl font-bold text-white font-tangarine md:text-8xl">Randkie & Permata</h1>
                    <p className="font-serif text-slate-300">Dear</p>
                    <p className="font-serif text-white text-2xl mt-3 uppercase">{name}</p>
                    <p className="font-poppins text-slate-300 text-sm mt-3">Mohon maaf apabila terdapat kesalahan penulisan nama/gelar</p>
                    <button className="bg-amber-300 py-2 px-5 mt-3 rounded-lg hover:bg-amber-200 "><BsEnvelopeOpen className='inline mb-[0.4rem]'/> Open Invitation</button>
                </div>
            </div>
        </div>
    )
}