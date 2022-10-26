import { useState, useEffect } from "react"
import Swal from 'sweetalert2'
export default function CardUcapan() {
    const [formInput, setFormInput] = useState({
        name: '',
        ucapan: ''
    })
    const changeInput = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }
    const handleInput = (e) => {
        e.preventDefault()
        fetch('https://undangan-rangkie.herokuapp.com/wishes', {
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
                    data.name + " atas doa terbaik untuk kami",
                    'success'
                )
                setFormInput({
                    name: '',
                    ucapan: ''
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <form onSubmit={handleInput}>
            <input type={"text"} className="w-full border border-yellow-800 mt-5 py-1 px-2 rounded-md active:outline-none" placeholder="Name" name="name" value={formInput.name} onChange={changeInput} required />
            <textarea className="w-full border border-yellow-800 mt-5 py-1 px-2 rounded-md" placeholder="Wishes" rows={"5"} name="ucapan" value={formInput.ucapan} onChange={changeInput} required></textarea>
            <button className="px-3 py-1 bg-yellow-800 rounded-md font-semibold text-yellow-50 mt-1" type="submit">Kirim</button>
        </form>
    )
}