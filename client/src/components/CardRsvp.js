import { useState } from 'react'
import { VscMailRead } from 'react-icons/vsc'
import Swal from 'sweetalert2'
export default function CardRsvp() {
    const [formInput, setFormInput] = useState({
        nama: '',
        konfirmasi: '',
        jumlah: ''
    })
    const changeInput = (e) => {
        const { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }
    const handleInput = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/invitation', {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formInput),
        })
            .then((response) => response.json())
            .then((data) => {
                Swal.fire(
                    'Terimakasih',
                    data.name,
                    'success'
                  )
                setFormInput({
                    nama: '',
                    konfirmasi: '',
                    jumlah: ''
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='w-72 sm:w-96 lg:w-4/5 bg-white px-10 py-5 mt-10 mb-10 sm:mb-20 md:mb-32 lg:mb-44 mx-auto rounded-2xl relative overflow-hidden'>
            <img src="../foralkiriatas.jpg" className='absolute top-0 left-0 opacity-50' alt='resepsi' />
            <div className='relative z-10'>
                <p className=' text-yellow-700 font-tangarine text-5xl font-bold mb-2'>RSVP</p>
                <form onSubmit={handleInput} method="post">
                    <label>
                        <p className='text-left font-semibold font-inter text-sm text-slate-700 mb-1'>Nama Tamu</p>
                        <input type={"text"} className="w-full border border-yellow-700 rounded-lg p-2" placeholder='Nama Tamu' required name='nama' onChange={changeInput} value={formInput.nama} />
                    </label>
                    <label>
                        <p className='text-left font-semibold font-inter text-sm text-slate-700 mb-1 mt-3'>Konfirmasi Kehadiran</p>
                        <select className='border border-yellow-700 rounded-lg p-2 w-full' required name='konfirmasi' onChange={changeInput}>
                            <option value={"hadir"}>Ya, saya akan hadir</option>
                            <option value={"ragu"}>Masih ragu-ragu</option>
                            <option value={"tidak hadir"}>Maaf, saya tidak bisa hadir</option>
                        </select>
                    </label>
                    <label>
                        <p className='text-left font-semibold font-inter text-sm text-slate-700 mb-1 mt-3'>Jumlah Kehadiran</p>
                        <input type={"number"} className="w-full border border-yellow-700 rounded-lg p-2" placeholder='Masukan Jumlah' required name="jumlah" onChange={changeInput} value={formInput.jumlah} />
                    </label>
                    <button className='button-card transition duration-500 mb-4' type='submit'><VscMailRead className='inline mb-1 mr-2 text-xl' />Submit RSVP</button>
                </form>
            </div>
        </div>
    )
}