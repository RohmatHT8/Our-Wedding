import {IoCopy} from "react-icons/io5"
import { WhatsappShareButton } from "react-share"
import { WhatsappIcon } from "react-share"
import { Container, Segment } from "semantic-ui-react"
export default function CreateGuest() {
    return (
        <>
            <h1 className='text-2xl font-bold text-slate-800 text-center'>Buat Undangan</h1>
            <div className='bg-white w-full p-5 mt-5 rounded-t-xl'>
                <div className="shadow-md p-5 rounded-md">
                    <label>
                        <p className="font-bold text-slate-700">Masukan Nama</p>
                        <input type={"text"} className="border w-full rounded-md px-2 py-1" />
                    </label>
                    <button className="bg-yellow-500 px-2 py-1 rounded-md mt-2 font-bold text-slate-700 hover:shadow-lg hover:bg-yellow-400"><IoCopy className="inline mb-1 mr-1"/> Salin Link</button>
                    {/* <WhatsappShareButton
                        title="Sharing Content"
                        url="https://www.youtube.com/watch?v=2BnTYEafRQc"
                    >
                        <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
                    </WhatsappShareButton> */}
                </div>
            </div>
        </>
    )
}