import { useEffect, useState } from 'react'
import CardMessage from './CardMessage'
import CardUcapan from './CardUcapan'
import Loading from './utils/Loading'
export default function Ucapan() {
    const [wishes, setWishes] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/wishes')
            .then(response => response.json())
            .then(data => setWishes(data))
    }, [])
    return (
        <section id="ucapan" className=" bg-yellow-100 relative">
            <div className="container py-10 mx-auto text-center">
                <h1 className="font-tangarine text-5xl md:text-6xl font-semibold mb-5">Doa dan Ucapan</h1>
                <div className="px-5">
                    <div className="max-w-2xl p-3 bg-yellow-50 shadow-xl rounded-xl mx-auto border border-yellow-600 relative overflow-hidden">
                        <img src="../foralkiriatas.png" className="absolute scale-150 top-12 sm:bottom-16 opacity-50" alt='foral' />
                        <div className="relative z-10">
                            <p className="text-right font-bold text-yellow-800"><img src="../bird.png" className="w-5 inline mb-1" />{!wishes.count ? <span>0</span> : wishes.count} Wishes</p>
                            <hr className="border border-yellow-800 bg-yellow-800" />
                            <CardUcapan />
                        </div>
                        {/* card messege */}
                        <hr className="border border-yellow-800 bg-yellow-800 mt-3" />
                        <div className='h-96 overflow-auto relative z-30'>
                            {!wishes.rows ? <Loading /> : wishes.rows.map((el, idx) => {
                                return <CardMessage key={idx} el={el} />
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}