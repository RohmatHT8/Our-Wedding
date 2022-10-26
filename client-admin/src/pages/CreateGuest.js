import { IoCopy } from "react-icons/io5"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs"
const spaceToPlus = (word) => {
    return word.split(" ").join("+")
}
export default function CreateGuest() {
    const [value, setValue] = useState('')
    const [copied, setCopied] = useState(false)
    return (
        <>
            <h1 className='text-2xl font-bold text-slate-800 text-center'>Buat Undangan</h1>
            <div className='bg-white w-full p-5 mt-5 rounded-t-xl'>
                <div className="shadow-md p-5 rounded-md  border">
                    <label>
                        <p className="font-bold text-slate-700">Masukan Nama</p>
                        <input type={"text"} className="border w-full rounded-md px-2 py-1" value={value} onClick={() => setCopied(false)} onChange={({ target: { value } }) => setValue(value)} />
                    </label>
                    <CopyToClipboard text={`Kepada Yth. \nBapak/Ibu/Saudara/i \nSalam Sejahtera, \nTanpa mengurangi rasa hormat, melalui undangan virtual ini kami mengundang anda untuk hadir di acara bahagia kami🌻 \nUntuk detail mengenai acara kami, silakan lihat link undangan dibawah ini☺️ \nhttps://randkhi-permata.web.app/invitation?to=${spaceToPlus(value)} \nKami memohon doa terbaik untuk kelancaran atas setiap langkah dan proses yang kami lalui✨ \nTerima kasih. \nYang berbahagia \nRandkhi & Permata \n-------------------------`} onCopy={() => setCopied(true)}>
                        <button className="bg-yellow-500 px-2 py-1 rounded-md mt-2 font-bold text-slate-700 hover:shadow-lg hover:bg-yellow-400"><IoCopy className="inline mb-1 mr-1" /> Salin Link</button>
                    </CopyToClipboard>
                    {copied ? <span className="text-green-700 font-semibold ml-1">Copied <BsCheckCircleFill className="inline mb-1" /></span> : null
                    }
                </div>
            </div>
        </>
    )
}