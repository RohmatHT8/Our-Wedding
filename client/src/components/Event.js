import { GiBigDiamondRing } from 'react-icons/gi'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import {getRemainingTimeUntilMsTimestamp} from './utils/CountdownTimerUtils';
import CardRsvp from './CardRsvp';
export default function Event({countDownTimestampMs}) {
    const [remainingTimes, setRemainingtime] = useState({
        days:'00',
        hours:'00',
        minutes:'00',
        seconds:'00'
    })
    useEffect(() => {
        const intervalid = setInterval(() => {
            updatedRemaining(countDownTimestampMs)
        }, 1000)
        return () => clearTimeout(intervalid)
    }, [countDownTimestampMs]) 
    function updatedRemaining (countdown) {
        setRemainingtime(getRemainingTimeUntilMsTimestamp(countdown))
    }
    return ( 
        <>
            <section id="event" className="bg-dark relative">
                <div className="container py-10 text-center mx-auto">
                    <h1 className="font-tangarine text-5xl md:text-7xl font-bold relative z-10 text-slate-100 mb-5">Counting Days</h1>
                    <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8484_em4Rbl8cX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165670516" className="w-1/2 rounded-lg mx-auto md:w-1/4" alt='image'/>
                    <p className="mt-5 text-sm text-slate-50 max-w-md mx-auto">"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia." <br /><span className="uppercase">~ Matius 19 : 6 ~</span></p>
                    {/* Countdown */}
                    <div className="mt-5 flex justify-evenly max-w-sm mx-auto md:mt-10">
                        <div>
                            <p className="py-1 px-3 bg-slate-200 inline-block rounded-sm">{remainingTimes.days}</p>
                            <p className="text-slate-200 font-popper">Hari</p>
                        </div>
                        <div>
                            <p className="py-1 px-3 bg-slate-200 inline-block rounded-sm">{remainingTimes.hours}</p>
                            <p className="text-slate-200 font-popper">Jam</p>
                        </div>
                        <div>
                            <p className="py-1 px-3 bg-slate-200 inline-block rounded-sm">{remainingTimes.minutes}</p>
                            <p className="text-slate-200 font-popper">Menit</p>
                        </div>
                        <div>
                            <p className="py-1 px-3 bg-slate-200 inline-block rounded-sm">{remainingTimes.seconds}</p>
                            <p className="text-slate-200 font-popper">Detik</p>
                        </div>
                    </div>

                    {/* card Event  */}
                    <div className='flex flex-wrap justify-center gap-2'>
                        <div className="card-event">
                            <img src="../foral.jpg" className="img-bg-card" alt='foral'/>
                            <div className='relative z-10'>
                                <GiBigDiamondRing className='mx-auto text-6xl text-yellow-800' />
                                <p className='text-header-card'>Pemberkatan</p>
                                <p className='mt-2 text-xl font-semibold'>Sabtu, 03 Desember 2022 <br /> 09.00 s/d 10.30 wib <br /> Hotel Balcony Sukabumi</p>
                                <a href='https://www.google.com/maps/place/Hotel+Balcony/@-6.9084752,106.9339156,17z/data=!3m1!4b1!4m8!3m7!1s0x2e6849b58cbe0be3:0x399a386e1916002a!5m2!4m1!1i2!8m2!3d-6.9084726!4d106.9360761' target={"_blank"}><button className='button-card transition duration-500'><FaMapMarkedAlt className='inline text-slate-50 text-xl mb-1 mr-2' />Google Maps</button></a>
                            </div>
                        </div>

                        <div className="card-event">
                            <img src="../foral.jpg" className="img-bg-card" alt='foral'/>
                            <div className='relative z-10'>
                                <img src='../resepsi.png' className='w-1/5 mx-auto' alt='resepsi'/>
                                <p className='text-header-card'>Resepsi</p>
                                <p className='mt-2 text-xl font-semibold'>Sabtu, 03 Desember 2022 <br /> 12.00 s/d 02.00 wib <br /> Hotel Balcony Sukabumi</p>
                                <a href='https://www.google.com/maps/place/Hotel+Balcony/@-6.9084752,106.9339156,17z/data=!3m1!4b1!4m8!3m7!1s0x2e6849b58cbe0be3:0x399a386e1916002a!5m2!4m1!1i2!8m2!3d-6.9084726!4d106.9360761' target={"_blank"}><button className='button-card transition duration-500'><FaMapMarkedAlt className='inline text-slate-50 text-xl mb-1 mr-2' />Google Maps</button></a>
                            </div>
                        </div>
                    </div>

                    {/* card RSVS */}
                    <CardRsvp />
                    

                </div>

                <div className="absolute bottom-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="absolute bottom-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="0.3" d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,170.7C672,149,768,171,864,165.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
            </section>
        </>
    )
}