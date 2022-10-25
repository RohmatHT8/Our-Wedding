import CardDashboard from "../component/CardDashboard";
import TableDashboard from "../component/TableDashboard";
import { useEffect, useState } from "react"
export default function Dashboard() {
    const [guest, setGuest] = useState([])
    const [count, setCount] = useState({
        hadir:0,
        ragu:0,
        tidakHadir:0
    })
    useEffect(() => {
        fetch('http://localhost:3001/invitation')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setCount({
                    hadir:data.count,
                    ragu:data.ragu,
                    tidakHadir:data.tidakHadir
                })
                setGuest(data.invitation)
            })
    }, [])
    return (
        <>
            <h1 className='text-2xl font-bold text-slate-800 text-center'>Dashboard</h1>
            <div className='bg-white w-full p-5 mt-5 rounded-t-xl'>
                <p className='text-center pt-3 font-semibold text-xl text-slate-700 mb-2'>Data Tamu</p>
                {/* card */}
                  <CardDashboard count={count}/>
                {/* table */}
                  <TableDashboard guest={guest}/>
            </div>
        </>
    )
}